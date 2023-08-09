import {supabase} from "@/supabase";

export async function fetchSpecificGoalProgress(goalId) {
  try {
    const { data, error } = await supabase
      .rpc('get_goal_progress', {
        id: goalId
      })
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
