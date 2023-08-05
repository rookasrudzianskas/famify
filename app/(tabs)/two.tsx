import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import db, {supabase} from "@/supabase";
import {useQuery} from "react-query";
import {MaterialIcons} from "@expo/vector-icons";
import React from "react";

export default function TabTwoScreen() {

  const {
    data: goals,
    isLoading: isLoadingGoals,
    refetch
  } = useQuery(['goals'], {
    queryFn: async () => {
      const groupId = 1;
      const { data, error } = await supabase.from('goals').select('*').eq('groupId', groupId);
      console.log(data);
      return data; // Add this line to return the fetched data
    }
  });

  const GOALS = [
    {
      id: 1,
      title: 'Goal 1',
      description: 'This is the first goal',
      groupId: 1,
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      amount: 100,
      currentAmount: 0,
      color: 'bg-yellow-500/30'
    },
    {
      id: 2,
      title: 'Goal 2',
      description: 'This is the second goal',
      groupId: 1,
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      amount: 100,
      currentAmount: 0,
      color: 'bg-blue-500/30'
    }
  ]

  return (
    <View className="flex-1">
      <FlatList
        data={GOALS}
        keyExtractor={(item) => item.id.toString()}
        vertical
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{marginTop: 20}}
        renderItem={({item}) => (
          <View className={`flex flex-col h-44 my-3 mx-2 rounded-lg p-3 px-7 ${item.color}`}>
            <MaterialIcons name="attach-money" size={35} color="black" />
            <Text className="text-lg font-bold text-white mt-2">{item.title}</Text>
            <View className="flex flex-row items-center bg-transparent">
              <Text className="text-lg font-semibold text-white">{item.currentAmount.toFixed(2)}{" "}</Text>
              <Text className="text-gray-400">/{" "}{item.amount} dollars made</Text>
            </View>
            <View className="flex flex-row items-center justify-between bg-transparent mt-5">
              <View />
              <TouchableOpacity className="bg-white/20 px-4 py-1 rounded-md">
                <Text>Explore Goal</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
