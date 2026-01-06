import { createClient } from "@supabase/supabase-js"
import { NextResponse } from "next/server"

async function sendWelcomeEmail(email: string, full_name: string) {
  const resendApiKey = process.env.RESEND_API_KEY

  if (!resendApiKey) {
    console.error("[v0] RESEND_API_KEY not configured - skipping email send")
    return { success: false, error: "Email service not configured" }
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: "Seeker Exchange <onboarding@seekerexchange.com>",
        to: email,
        subject: "You're on the Seeker Exchange Waitlist 🚀",
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
              <div style="background-color: #0a2f1f; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
                <h1 style="color: #c8ff00; margin: 0; font-size: 28px;">You're In! 🎉</h1>
              </div>
              
              <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <p style="font-size: 16px; margin-bottom: 20px;">Hi ${full_name},</p>
                
                <p style="font-size: 16px; margin-bottom: 20px;">
                  Thank you for joining <strong>Seeker Exchange</strong>! We're thrilled to have you on our waitlist.
                </p>
                
                <div style="background-color: #f0fff4; border-left: 4px solid #c8ff00; padding: 15px; margin: 25px 0;">
                  <p style="margin: 0; font-size: 16px;">
                    <strong>What's next?</strong><br/>
                    You'll receive <strong>free airtime</strong> and <strong>early access</strong> when we launch!
                  </p>
                </div>
                
                <p style="font-size: 16px; margin-bottom: 20px;">
                  Stay updated by following us on social media:
                </p>
                
                <div style="text-align: center; margin: 30px 0;">
                  <a href="https://x.com/seeker_exchange" style="display: inline-block; background-color: #c8ff00; color: #0a2f1f; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 0 10px 10px 0;">Follow on X</a>
                  <a href="https://www.instagram.com/_seeker_exchange" style="display: inline-block; background-color: #c8ff00; color: #0a2f1f; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 0 10px 10px 0;">Follow on Instagram</a>
                </div>
                
                <p style="font-size: 14px; color: #666; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                  Get ready for the future of digital finance in Africa.<br/>
                  <strong>Seeker Exchange</strong> - Trade smarter, faster, and safer.
                </p>
              </div>
              
              <div style="text-align: center; margin-top: 20px; color: #999; font-size: 12px;">
                <p>© 2025 Seeker Exchange. All rights reserved.</p>
              </div>
            </body>
          </html>
        `,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("[v0] Resend API error:", errorData)
      return { success: false, error: errorData }
    }

    const data = await response.json()
    console.log("[v0] Welcome email sent successfully:", data.id)
    return { success: true, data }
  } catch (error) {
    console.error("[v0] Error sending welcome email:", error)
    return { success: false, error }
  }
}

export async function POST(request: Request) {
  try {
    const { full_name, phone_number, email, country, followed_socials } = await request.json()

    // Validate required fields
    if (!full_name || !phone_number || !email || !country || followed_socials === undefined) {
      return NextResponse.json({ success: false, message: "Please fill in all required fields." }, { status: 400 })
    }

    // Validate phone number E.164 format (starts with + followed by digits)
    const phoneRegex = /^\+[1-9]\d{1,14}$/
    if (!phoneRegex.test(phone_number)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid phone number in international format (e.g., +234...)." },
        { status: 400 },
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, message: "Please enter a valid email address." }, { status: 400 })
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SECRET_KEY

    if (!supabaseUrl || !supabaseKey) {
      console.error("[v0] Supabase environment variables not configured")
      return NextResponse.json(
        { success: false, message: "Configuration error. Please contact support." },
        { status: 500 },
      )
    }

    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    })

    const { error } = await supabase.from("waitlist").insert({
      full_name,
      phone_number,
      email,
      country,
      followed_socials,
    })

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json({ success: false, message: "This phone number is already on our waitlist!" })
      }
      console.error("[v0] Supabase error:", error)
      return NextResponse.json({ success: false, message: "An error occurred. Please try again." }, { status: 500 })
    }

    const emailResult = await sendWelcomeEmail(email, full_name)

    if (!emailResult.success) {
      console.warn("[v0] Failed to send welcome email, but waitlist entry was successful")
    }

    return NextResponse.json({
      success: true,
      message: "You're in 🎉 Free airtime will be sent at launch",
    })
  } catch (error) {
    console.error("[v0] Waitlist API error:", error)
    return NextResponse.json({ success: false, message: "An error occurred. Please try again." }, { status: 500 })
  }
}
