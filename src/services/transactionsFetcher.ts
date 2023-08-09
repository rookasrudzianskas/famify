import {supabase} from "@/supabase";

export async function transactionsFetcher() {
  try {
    const { data, error } = await supabase.from('transactions').select('*').eq('group_id', 1).order('created_at');
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
