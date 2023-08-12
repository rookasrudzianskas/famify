import {supabase} from "@/supabase";

export async function fetchSpecificGroup(id) {
  try {
    const { data, error } = await supabase
      .from('groups')
      .select('*')
      .eq('id', id)
      .single();
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
