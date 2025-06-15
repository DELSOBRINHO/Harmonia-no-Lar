import { supabase } from './supabaseClient';
import { RightDuty } from '../types';

export async function getRightsDuties(category?: 'husband' | 'wife' | 'both', type?: 'right' | 'duty') {
  let query = supabase
    .from('rights_duties')
    .select('*');
    
  if (category) {
    query = query.eq('category', category);
  }
  
  if (type) {
    query = query.eq('type', type);
  }
  
  const { data, error } = await query;
  
  if (error) throw error;
  
  return data as RightDuty[];
}

export async function getRightDutyById(id: string) {
  const { data, error } = await supabase
    .from('rights_duties')
    .select('*')
    .eq('id', id)
    .single();
    
  if (error) throw error;
  
  return data as RightDuty;
}