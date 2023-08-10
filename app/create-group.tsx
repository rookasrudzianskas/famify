//@ts-nocheck
import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {supabase} from "@/supabase";
import {useRouter} from "expo-router";
import {MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";

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
    <View className="flex-1 mx-3 pt-16">
      <View className="space-y-3 flex-1 w-full flex items-center mt-4">
        <Text className="text-2xl font-semibold text-center text-white">Quick Group</Text>
        <View className="flex flex-row items-center justify-between space-x-3 my-4 mb-1">
          <TouchableOpacity activeOpacity={0.8} onPress={() => router.push<any>(`/add-goal`)} className="flex flex-row items-center bg-gray-800/70 rounded-lg flex-1 justify-between px-3 py-2">
            <MaterialCommunityIcons name="lightning-bolt" size={20} color="purple" className="" />
            <View>
              <Text className="font-[600] text-white mb-1">Upgrade to PRO</Text>
              <Text className="text-[12px] text-gray-600">To unlock the full power</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} onPress={() => router.push<any>(`/add-goal`)} className="flex flex-row items-center bg-gray-800/70 rounded-lg flex-1 justify-between px-3 py-2">
            <MaterialIcons name="group" size={20} color="#188038" className="" />
            <View>
              <Text className="font-[600] text-white mb-1">Add a goal</Text>
              <Text className="text-[12px] text-gray-600">A Goal of Your Group</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TextInput
          placeholder="Name"
          style={{backgroundColor: '#171616', borderRadius: 4}}
          className="w-full h-12 px-5 mt-2 text-white border-[1px] border-gray-500 py-1"
          value={groupName}
          onChangeText={setGroupName}
        />
      </View>
      <TouchableOpacity onPress={createNewGroup} className="flex items-center justify-center  h-10 bg-white rounded-md mb-28 mx-5">
        <Text className="text-black font-semibold text-base">Create a group</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateGroup;
