// supabaseClient.js

// IMPORTANT: We can't use process.env here like in Node.js.
// These values are copied directly from your .env file for client-side use.
const SUPABASE_URL = 'https://alcyailgkmkzgjagxikh.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsY3lhaWxna21remdqYWd4aWtoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0OTYwMDIsImV4cCI6MjA3ODA3MjAwMn0.uy6AVh1fYxstdS0AA84p_nmM2BoSrje4T90saVosRrE';

// Create and export the Supabase client
export const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);