import { supabase } from './supabaseClient';
import { Profile } from '../types';

export async function getProfile(userId: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', userId)
    .single();
    
  if (error) throw error;
  
  return data as Profile;
}

export async function updateProfile(profile: Partial<Profile> & { user_id: string }) {
  // Check if profile exists
  const { data: existingProfile } = await supabase
    .from('profiles')
    .select('id')
    .eq('user_id', profile.user_id)
    .single();
    
  if (existingProfile) {
    // Update existing profile
    const { data, error } = await supabase
      .from('profiles')
      .update(profile)
      .eq('user_id', profile.user_id)
      .select();
      
    if (error) throw error;
    return data[0] as Profile;
  } else {
    // Create new profile
    const { data, error } = await supabase
      .from('profiles')
      .insert([profile])
      .select();
      
    if (error) throw error;
    return data[0] as Profile;
  }
}

export async function linkSpouse(userId: string, spouseCode: string) {
  // Find spouse profile by code
  const { data: spouseProfile, error: findError } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', spouseCode)
    .single();
    
  if (findError) throw findError;
  
  if (!spouseProfile) {
    throw new Error('Código de cônjuge não encontrado');
  }
  
  // Update current user profile
  const { error: updateError } = await supabase
    .from('profiles')
    .update({ spouse_id: spouseCode })
    .eq('user_id', userId);
    
  if (updateError) throw updateError;
  
  // Update spouse profile
  const { data: currentProfile } = await supabase
    .from('profiles')
    .select('id')
    .eq('user_id', userId)
    .single();
    
  const { error: spouseUpdateError } = await supabase
    .from('profiles')
    .update({ spouse_id: currentProfile.id })
    .eq('id', spouseCode);
    
  if (spouseUpdateError) throw spouseUpdateError;
  
  return true;
}