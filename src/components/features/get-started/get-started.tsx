//@ts-nocheck
import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import {AntDesign} from "@expo/vector-icons";
import {useRouter} from "expo-router";
import {fetchAllGoals} from "@/src/services/specific/fetch-all-goals";
import * as Progress from 'react-native-progress';
import {fetchSpecificGoalProgress} from "@/src/services/specific/get-goal-progress";

const GetStarted = () => {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [goalProgress, setGoalProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    (async () => {
      const data = await fetchAllGoals();
      const goalsData = await fetchSpecificGoalProgress(1);
      setGoalProgress(goalsData);
      setGoals(data);
      setLoading(false);
    })();
  }, []);

  if(loading) return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator />
    </View>
  );

  return (
    <View>
      <View className="flex flex-row items-center justify-between mt-3">
        <Text className="text-lg font-semibold text-white">Get Started</Text>
        <TouchableOpacity onPress={() => router.push('/(tabs)/two')} className="flex flex-row items-center space-x-1 justify-center">
          <Text className="text-gray-500 text-sm">All Achievements</Text>
          <AntDesign name="arrowright" size={14} color="gray" />
        </TouchableOpacity>
      </View>

      {goals.length > 0 && (
        <View>
          <FlatList
            data={goals}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{marginTop: 20}}
            renderItem={({item}) => (
              <View className="flex flex-col h-48 mx-2 rounded-lg bg-green-500/30 p-3 px-8">
                <Text className="text-[30rem]">{item.emoji}</Text>
                <Text className="text-lg font-bold text-white mt-2">{item.name}</Text>
                <View className="flex flex-row items-center mb-2 bg-transparent">
                  <Text className="text-lg font-semibold text-white">81.500</Text>
                  <Text className="text-gray-400">/{item.amount.toFixed(2)} dollars goal</Text>
                </View>
                <Progress.Bar
                  progress={goalProgress / item.amount}
                  width={null}
                  color="white"
                  animated={true}
                />
                <View className="flex flex-row items-center justify-between bg-transparent mt-5">
                  <View />
                  <TouchableOpacity className="bg-white/20 px-4 py-1 rounded-md">
                    <Text>Boost your sales</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default GetStarted;
