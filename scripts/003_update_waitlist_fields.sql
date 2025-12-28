-- Add new fields to waitlist table
ALTER TABLE public.waitlist 
  ADD COLUMN IF NOT EXISTS full_name text,
  ADD COLUMN IF NOT EXISTS phone_number text,
  ADD COLUMN IF NOT EXISTS country text,
  ADD COLUMN IF NOT EXISTS followed_socials boolean DEFAULT false;

-- Make email nullable and phone_number unique
ALTER TABLE public.waitlist 
  ALTER COLUMN email DROP NOT NULL,
  ADD CONSTRAINT unique_phone_number UNIQUE (phone_number);

-- Drop the old unique constraint on email if it exists
ALTER TABLE public.waitlist DROP CONSTRAINT IF EXISTS waitlist_email_key;

-- Update RLS policies
DROP POLICY IF EXISTS "Anyone can join waitlist" ON public.waitlist;

CREATE POLICY "Anyone can join waitlist"
  ON public.waitlist FOR INSERT
  WITH CHECK (true);
