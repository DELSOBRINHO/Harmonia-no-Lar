import { supabase } from './supabaseClient';
import { ChecklistItem } from '../types';

export async function getChecklistItems(userId: string, date: string) {
  const { data, error } = await supabase
    .from('checklist')
    .select('*')
    .eq('user_id', userId)
    .eq('date', date);
    
  if (error) throw error;
  
  return data as ChecklistItem[];
}

export async function updateChecklistItem(item: Partial<ChecklistItem> & { id: string }) {
  const { data, error } = await supabase
    .from('checklist')
    .update(item)
    .eq('id', item.id)
    .select();
    
  if (error) throw error;
  
  return data[0] as ChecklistItem;
}

export async function createChecklistItem(item: Omit<ChecklistItem, 'id'>) {
  const { data, error } = await supabase
    .from('checklist')
    .insert([item])
    .select();
    
  if (error) throw error;
  
  return data[0] as ChecklistItem;
}

export async function deleteChecklistItem(id: string) {
  const { error } = await supabase
    .from('checklist')
    .delete()
    .eq('id', id);
    
  if (error) throw error;
  
  return true;
}