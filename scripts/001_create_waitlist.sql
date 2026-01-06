-- Create waitlist table
create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  created_at timestamp with time zone default now()
);

-- Enable RLS
alter table public.waitlist enable row level security;

-- Allow anyone to insert their email (no auth required for waitlist)
create policy "Anyone can join waitlist"
  on public.waitlist for insert
  with check (true);

-- Only allow reading your own email (if we add auth later)
create policy "Users can view their own entry"
  on public.waitlist for select
  using (true);
