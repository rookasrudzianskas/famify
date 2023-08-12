//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import {useRouter} from "expo-router";

const GroupScreen = () => {
  const router = useRouter();
  return (
    <View className="pt-16 mx-2">
      <View className="flex items-center">
        <Text className="text-2xl font-semibold text-center text-white">Manage Group</Text>
        <View className="flex flex-row items-center justify-between space-x-3 my-4">
          <TouchableOpacity activeOpacity={0.8} onPress={() => router.push<any>(`/create-group`)} className="flex flex-row items-center bg-gray-800/70 rounded-lg flex-1 justify-between px-3 py-2">
            <MaterialCommunityIcons name="lightning-bolt" size={20} color="purple" className="" />
            <View>
              <Text className="font-[600] text-white mb-1">Upgrade to PRO</Text>
              <Text className="text-[12px] text-gray-600">To unlock the full power</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} onPress={() => router.push<any>(`/create-group`)} className="flex flex-row items-center bg-gray-800/70 rounded-lg flex-1 justify-between px-3 py-2">
            <MaterialIcons name="group" size={20} color="#188038" className="" />
            <View>
              <Text className="font-[600] text-white mb-1">Create a group</Text>
              <Text className="text-[12px] text-gray-600">A Goal of Your Group</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default GroupScreen;
