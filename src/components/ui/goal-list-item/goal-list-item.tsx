//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";

const GoalListItem = ({goal, goalProgress}) => {
  return (
    <>
      <View className={`flex flex-col h-44 my-3 rounded-lg p-3 px-7 bg-blue-500/30`}>
        <MaterialIcons name="attach-money" size={35} color="black" />
        <Text className="text-lg font-bold text-white mt-2">{goal.name}</Text>
        <View className="flex flex-row items-center bg-transparent">
          <Text className="text-lg font-semibold text-white">{goalProgress || 0}</Text>
          <Text className="text-gray-400">/{" "}{goal.amount} dollars made</Text>
        </View>
        <View className="bg-transparent flex flex-col items-center justify-center mt-2">
          <View className="w-full flex items-center justify-center bg-gray-900 pl-[2px] pr-3 h-3 rounded-md">
            <View className="w-full bg-gray-300/10 h-2 rounded-md px-10"/>
          </View>
        </View>
      </View>
      <Text className="text-xl font-semibold text-white mb-2">Explore Transactions</Text>
    </>
  );
};

export default GoalListItem;
