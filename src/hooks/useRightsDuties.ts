import { useState, useEffect } from 'react';
import { getRightsDuties, getRightDutyById } from '../services/rightsDutiesService';
import { RightDuty } from '../types';

export function useRightsDuties(
  category?: 'husband' | 'wife' | 'both',
  type?: 'right' | 'duty'
) {
  const [rightsDuties, setRightsDuties] = useState<RightDuty[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRightsDuties = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const data = await getRightsDuties(category, type);
        setRightsDuties(data);
      } catch (err: any) {
        setError(err.message);
        console.error('Error fetching rights and duties:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchRightsDuties();
  }, [category, type]);

  const getRightDuty = async (id: string) => {
    try {
      return await getRightDutyById(id);
    } catch (err: any) {
      console.error('Error fetching right/duty:', err);
      throw err;
    }
  };

  return {
    rightsDuties,
    loading,
    error,
    getRightDuty,
  };
}