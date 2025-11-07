# Supabase Setup Instructions

This guide will help you set up Supabase for your Fitness App.

## Step 1: Create a Supabase Project

1. Go to [Supabase](https://supabase.com) and sign up or log in
2. Click on "New Project"
3. Fill in your project details:
   - Project Name: `fitness-app` (or any name you prefer)
   - Database Password: Choose a strong password
   - Region: Select the region closest to you
4. Click "Create new project" and wait for it to initialize

## Step 2: Create the Users Table

1. In your Supabase dashboard, go to the **SQL Editor**
2. Click on "New Query"
3. Copy and paste the following SQL command:

```sql
-- Create users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  username VARCHAR(30) NOT NULL CHECK (char_length(username) >= 3 AND char_length(username) <= 30),
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX idx_users_email ON users(email);

-- Add Row Level Security (RLS) policies if needed
-- ALTER TABLE users ENABLE ROW LEVEL SECURITY;
```

4. Click "Run" to execute the query
5. Verify the table was created by going to **Table Editor** → **users**

## Step 3: Get Your Supabase Credentials

1. In your Supabase dashboard, click on the **Settings** icon (gear icon)
2. Go to **API** section
3. You will see:
   - **Project URL**: This is your `SUPABASE_URL`
   - **Project API keys**:
     - `anon` `public`: This is your `SUPABASE_ANON_KEY`

## Step 4: Update Your .env File

1. Open your `.env` file in the project root
2. Replace the placeholder values with your actual Supabase credentials:

```env
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=your-actual-anon-key-here
PORT=3000
```

## Step 5: Install Dependencies

Run the following command in your project directory:

```bash
npm install
```

This will install the `@supabase/supabase-js` package along with other dependencies.

## Step 6: Run Your Application

```bash
npm start
```

Or for development with auto-restart:

```bash
npm run dev
```

## Testing the Integration

1. Open your application in a browser
2. Try creating a new account using the signup form
3. Check your Supabase dashboard → **Table Editor** → **users** to see the new user
4. Try logging in with the created credentials

## Troubleshooting

### Connection Issues
- Make sure your `SUPABASE_URL` and `SUPABASE_ANON_KEY` are correct
- Check that there are no extra spaces in your `.env` file
- Ensure your Supabase project is active and not paused

### Table Not Found
- Verify the `users` table was created successfully in the SQL Editor
- Check that the table name is lowercase: `users`

### Authentication Errors
- Ensure Row Level Security (RLS) policies allow your operations
- If you enabled RLS, you may need to add policies for insert/select operations

## Security Notes

⚠️ **Important**: 
- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore` to prevent accidental commits
- Keep your `SUPABASE_ANON_KEY` secure
- For production, consider using Supabase's built-in authentication instead of custom password handling

## Next Steps

- Consider using Supabase Auth for authentication instead of custom implementation
- Set up Row Level Security (RLS) policies for better security
- Add user profile features using additional Supabase tables
- Implement JWT tokens for session management