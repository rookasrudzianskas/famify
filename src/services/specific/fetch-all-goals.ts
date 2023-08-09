import {supabase} from "@/supabase";

export async function fetchAllGoals(limit = 100) {
  try {
    const { data, error } = await supabase
      .from('goals')
      .select('*')
      .eq('groupId', 1)
      .limit(limit)
      .order('created_at', {ascending: false});
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
