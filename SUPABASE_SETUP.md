# Supabase Setup Guide

To make the sign-up and login fully functional with a database, follow these steps to set up Supabase.

## 1. Create a Supabase Project
1. Go to [Supabase](https://supabase.com/) and sign up/log in.
2. Click **"New Project"**.
3. Choose your organization, name your project (e.g., "ChemMaster Pro"), and set a database password.
4. Select a region close to your users.
5. Click **"Create new project"**.

## 2. Get API Keys
1. Once the project is created, go to **Project Settings** (gear icon) > **API**.
2. Copy the **Project URL** and **anon public** key.
3. Add these to your Netlify Environment Variables (Site settings > Environment variables):
   - `VITE_SUPABASE_URL`: Your Project URL
   - `VITE_SUPABASE_ANON_KEY`: Your anon public key

## 3. Create the Database Table
1. Go to the **SQL Editor** (terminal icon) in the left sidebar.
2. Click **"New Query"**.
3. Paste the following SQL code and click **"Run"**:

```sql
-- Create a table for quiz results
create table quiz_results (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) not null,
  topic_id text not null,
  topic_title text not null,
  score int not null,
  total int not null,
  answers jsonb not null,
  created_at timestamptz default now()
);

-- Enable Row Level Security (RLS)
alter table quiz_results enable row level security;

-- Create a policy that allows users to insert their own results
create policy "Users can insert their own results"
  on quiz_results for insert
  with check (auth.uid() = user_id);

-- Create a policy that allows users to view their own results
create policy "Users can view their own results"
  on quiz_results for select
  using (auth.uid() = user_id);
```

## 4. Configure Authentication (Optional)
1. Go to **Authentication** > **Providers**.
2. Ensure **Email** is enabled.
3. (Optional) Disable "Confirm email" in **Authentication** > **URL Configuration** if you want users to log in immediately without verifying email.

## 5. Deploy
Redeploy your site on Netlify to pick up the new environment variables.
