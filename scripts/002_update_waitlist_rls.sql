-- Enable public insert access to waitlist table
-- This allows anyone to join the waitlist without authentication

-- Drop existing policies if any
DROP POLICY IF EXISTS "Allow public insert" ON public.waitlist;

-- Create policy to allow anyone to insert their email
CREATE POLICY "Allow public insert"
ON public.waitlist
FOR INSERT
TO anon
WITH CHECK (true);

-- Optional: Allow public to read their own email (for duplicate checking)
DROP POLICY IF EXISTS "Allow public read" ON public.waitlist;

CREATE POLICY "Allow public read"
ON public.waitlist
FOR SELECT
TO anon
USING (true);
