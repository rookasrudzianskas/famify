import {supabase} from "@/supabase";

export async function fetchAllGoals() {
  try {
    const { data, error } = await supabase
      .from('goals')
      .select('*')
      .eq('groupId', 1);
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
