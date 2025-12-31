-- ============================================
-- RUN THIS SCRIPT MANUALLY IN SUPABASE DASHBOARD
-- ============================================
-- Navigate to: Supabase Dashboard > SQL Editor > New Query
-- Copy and paste this entire script and click "Run"
-- ============================================

-- Remove duplicate RLS policy to improve performance
DROP POLICY IF EXISTS "seeker waitlist insert" ON public.waitlist;

-- Verify only one INSERT policy remains
SELECT 
  policyname, 
  cmd as action,
  qual as using_expression,
  with_check as with_check_expression
FROM pg_policies 
WHERE tablename = 'waitlist' 
  AND schemaname = 'public'
ORDER BY cmd, policyname;

-- Expected result: Only "Anyone can join waitlist" policy should remain for INSERT
