
import { NextResponse } from "next/server"
// Use Response for Next.js 16 app router compatibility
import { createClient } from "@supabase/supabase-js"

export async function POST(req: Request) {
  const { email } = await req.json();
  const resendApiKey = process.env.RESEND_API_KEY;
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!email || !resendApiKey || !supabaseUrl || !supabaseKey) {
    return new Response(JSON.stringify({ success: false, message: "Missing email or API key or Supabase config" }), { status: 400, headers: { "Content-Type": "application/json" } });
  }

  // Store email in Supabase 'subscribers' table
  const supabase = createClient(supabaseUrl, supabaseKey);
  const { error: dbError } = await supabase.from("subscribers").insert([{ email }]);
  if (dbError) {
    return new Response(JSON.stringify({ success: false, message: "Error saving email" }), { status: 500, headers: { "Content-Type": "application/json" } });
  }

  // Send confirmation email via Resend
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Seeker Exchange <updates@seekerexchange.com>",
        to: email,
        subject: "Thanks for subscribing to Seeker Exchange!",
        html: `
          <div style='font-family:sans-serif;padding:32px;text-align:center;'>
            <h2 style='color:#0a2f1f;'>Welcome to Seeker Exchange Updates!</h2>
            <p style='font-size:16px;'>You are now subscribed to receive exclusive offers and updates.</p>
            <p style='margin-top:24px;font-size:14px;color:#666;'>Follow us on <a href='https://x.com/seeker_exchange' style='color:#c8ff00;'>X</a> and <a href='https://www.instagram.com/_seeker_exchange' style='color:#c8ff00;'>Instagram</a>.</p>
            <p style='margin-top:32px;font-size:12px;color:#aaa;'>© Seeker Exchange</p>
          </div>
        `,
      }),
    });
    if (!response.ok) {
      return new Response(JSON.stringify({ success: false, message: "Failed to send email" }), { status: 500, headers: { "Content-Type": "application/json" } });
    }
    return new Response(JSON.stringify({ success: true, message: "Subscription successful!" }), { status: 200, headers: { "Content-Type": "application/json" } });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: "Error sending email" }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
}
