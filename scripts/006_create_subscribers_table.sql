-- Create a table for newsletter/email subscribers
CREATE TABLE IF NOT EXISTS subscribers (
  id BIGSERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Optional: Enable Row Level Security
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;

-- Optional: Add a simple RLS policy to allow inserts from your API/service role
CREATE POLICY "Allow insert for service role" ON subscribers
  FOR INSERT
  TO service_role
  USING (true);
