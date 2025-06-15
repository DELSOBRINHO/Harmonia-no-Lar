import { useState, useEffect } from 'react';
import { getProfile, updateProfile, linkSpouse } from '../services/profileService';
import { Profile } from '../types';
import { useAuth } from './useAuth';

export function useProfile() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProfile = async () => {
    if (!user) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const profileData = await getProfile(user.id);
      setProfile(profileData);
    } catch (err: any) {
      setError(err.message);
      console.error('Error fetching profile:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchProfile();
    } else {
      setProfile(null);
    }
  }, [user]);

  const updateUserProfile = async (data: Partial<Profile>) => {
    if (!user) return { success: false, error: 'Usuário não autenticado' };
    
    setLoading(true);
    setError(null);
    
    try {
      const updatedProfile = await updateProfile({
        ...data,
        user_id: user.id,
      });
      
      setProfile(updatedProfile);
      return { success: true };
    } catch (err: any) {
      setError(err.message);
      console.error('Error updating profile:', err);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  const linkUserSpouse = async (spouseCode: string) => {
    if (!user) return { success: false, error: 'Usuário não autenticado' };
    
    setLoading(true);
    setError(null);
    
    try {
      await linkSpouse(user.id, spouseCode);
      await fetchProfile(); // Refresh profile after linking
      return { success: true };
    } catch (err: any) {
      setError(err.message);
      console.error('Error linking spouse:', err);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  return {
    profile,
    loading,
    error,
    updateProfile: updateUserProfile,
    linkSpouse: linkUserSpouse,
    refreshProfile: fetchProfile,
  };
}