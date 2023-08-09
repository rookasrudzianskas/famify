import {supabase} from "@/supabase";

export async function fetchSpecificTransactions() {
  try {
    const { data, error } = await supabase
      .from('transactions')
      .select('*, goals(*)',)
      .eq('goal_id', 1)
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
