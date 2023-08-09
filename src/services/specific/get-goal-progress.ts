import {supabase} from "@/supabase";

export async function fetchSpecificGoalProgress(id) {
  try {
    const { data, error } = await supabase
      .from('transactions')
      .select('*')
      .eq('goal_id', id)
    if (error) {
      console.error('Error fetching countries:', error.message);
      return [];
    }

    return data;
  } catch (error) {
    console.error('Error fetching countries:', error.message);
    return [];
  }
}
