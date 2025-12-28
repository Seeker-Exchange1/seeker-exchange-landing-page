-- ============================================
-- RUN THIS SCRIPT MANUALLY IN SUPABASE DASHBOARD
-- ============================================
-- Navigate to: Supabase Dashboard > SQL Editor > New Query
-- Copy and paste this entire script and click "Run"
-- ============================================

-- Add new fields to waitlist table
ALTER TABLE public.waitlist 
  ADD COLUMN IF NOT EXISTS full_name text,
  ADD COLUMN IF NOT EXISTS phone_number text,
  ADD COLUMN IF NOT EXISTS country text,
  ADD COLUMN IF NOT EXISTS followed_socials boolean DEFAULT false;

-- Make email nullable since phone is now the primary identifier
ALTER TABLE public.waitlist 
  ALTER COLUMN email DROP NOT NULL;

-- Add unique constraint on phone_number to prevent duplicates
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint 
    WHERE conname = 'unique_phone_number'
  ) THEN
    ALTER TABLE public.waitlist 
      ADD CONSTRAINT unique_phone_number UNIQUE (phone_number);
  END IF;
END $$;

-- Drop the old unique constraint on email if it exists
ALTER TABLE public.waitlist 
  DROP CONSTRAINT IF EXISTS waitlist_email_key;

-- Update RLS policies to allow public inserts
DROP POLICY IF EXISTS "Anyone can join waitlist" ON public.waitlist;
DROP POLICY IF EXISTS "Enable insert for anon users" ON public.waitlist;

CREATE POLICY "Anyone can join waitlist"
  ON public.waitlist 
  FOR INSERT
  WITH CHECK (true);

-- Verify the changes
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'waitlist' 
  AND table_schema = 'public'
ORDER BY ordinal_position;
