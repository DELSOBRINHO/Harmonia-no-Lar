import { supabase } from './supabaseClient';
import { User, Session } from '@supabase/supabase-js';
import { UserRole } from '../types';

export async function signIn(email: string, password: string) {
  return supabase.auth.signInWithPassword({ email, password });
}

export async function signUp(email: string, password: string, role: UserRole) {
  return supabase.auth.signUp({
    email,
    password,
    options: {
      data: { role }
    }
  });
}

export async function signOut() {
  return supabase.auth.signOut();
}

export async function getCurrentUser(): Promise<User | null> {
  const { data } = await supabase.auth.getUser();
  return data.user;
}

export async function getCurrentSession(): Promise<Session | null> {
  const { data } = await supabase.auth.getSession();
  return data.session;
}

export function onAuthStateChange(callback: (user: User | null) => void) {
  return supabase.auth.onAuthStateChange((_, session) => {
    callback(session?.user || null);
  });
}