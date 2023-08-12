import {supabase} from "@/supabase";

export async function fetchSpecificGroupByInviteCode(inviteCode) {
  try {
    const { data, error } = await supabase
      .from('groups')
      .select('*')
      .eq('invite_code', inviteCode)
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
