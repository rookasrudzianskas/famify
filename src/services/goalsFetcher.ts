import {supabase} from "@/supabase";

export async function fetchInformation() {
  try {
    const { data, error } = await supabase.from('goals').select('*');
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
