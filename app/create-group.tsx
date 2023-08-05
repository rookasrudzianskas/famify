//@ts-nocheck
import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {supabase} from "@/supabase";
import {useRouter} from "expo-router";

const CreateGroup = () => {
  const [groupName, setGroupName] = useState<string>('');
  const router = useRouter();

  async function createNewGroup() {
    if (!groupName.trim()) return;

    try {
      const { data, error } = await supabase.from('groups').insert({ name: groupName.trim() });
      if (error) {
        console.error('Error creating group:', error.message);
        return;
      }

      console.log('Group created successfully:', data);
      router.push('/(tabs)/index');
      // You can perform any other actions after creating the group here
    } catch (error) {
      console.error('Error creating group:', error.message);
    }
  }

  return (
    <View className="flex-1">
      <View className="space-y-3 flex-1 w-full flex items-center mt-4">
        <Text className="flex items-center justify-center text-white text-lg font-semibold">Create a group</Text>
        <TextInput
          placeholder="Name"
          className="h-10 px-4 mt-0 w-full mx-2 text-white border border-gray-800/70 py-1 rounded-md border-2"
          value={groupName}
          onChangeText={setGroupName}
        />
      </View>
      <TouchableOpacity onPress={createNewGroup} className="flex items-center justify-center  h-10 bg-white rounded-md mb-20 mx-5">
        <Text className="text-black font-semibold text-base">Create a group</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateGroup;
