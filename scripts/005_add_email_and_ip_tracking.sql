-- Add email and ip_address columns to waitlist table with constraints
-- This migration adds validation for email uniqueness and IP-based spam prevention

-- Add email unique constraint
ALTER TABLE public.waitlist 
ADD CONSTRAINT waitlist_email_unique UNIQUE(email);

-- Add ip_address column if not exists
ALTER TABLE public.waitlist 
ADD COLUMN IF NOT EXISTS ip_address TEXT;

-- Enable RLS if not already enabled
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist (to avoid conflicts)
DROP POLICY IF EXISTS "Anyone can join waitlist" ON public.waitlist;
DROP POLICY IF EXISTS "Users can view their own entry" ON public.waitlist;

-- Allow anyone to insert their email (no auth required for waitlist)
CREATE POLICY "Anyone can join waitlist"
  ON public.waitlist FOR INSERT
  WITH CHECK (true);

-- Allow reading any entry (admin view only) - admins can view via service role key
CREATE POLICY "Only service role can view entries"
  ON public.waitlist FOR SELECT
  USING (auth.role() = 'service_role');

-- Prevent regular users from updating/deleting
CREATE POLICY "Prevent updates"
  ON public.waitlist FOR UPDATE
  USING (false);

CREATE POLICY "Prevent deletes"
  ON public.waitlist FOR DELETE
  USING (false);

-- Create index on phone_number for faster lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_phone_number ON public.waitlist(phone_number);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON public.waitlist(email);

-- Create index on ip_address for spam detection
CREATE INDEX IF NOT EXISTS idx_waitlist_ip_address ON public.waitlist(ip_address);

-- Create index on created_at for time-based queries
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON public.waitlist(created_at);

CREATE INDEX IF NOT EXISTS idx_waitlist_ip_created_at ON public.waitlist(ip_address, created_at);
-- [SECURITY RECOMMENDATION] Add CAPTCHA to your frontend waitlist form to prevent bot signups.
-- Example: Use Google reCAPTCHA or hCaptcha and verify the token in your API route before inserting.
