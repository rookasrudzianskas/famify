//@ts-nocheck
import React, {useEffect, useState} from 'react';
import {Text, View, ActivityIndicator, ScrollView, FlatList} from 'react-native';
import {AntDesign} from "@expo/vector-icons";
import {useRouter} from "expo-router";
import {fetchAllGoals} from "@/src/services/specific/fetch-all-goals";

const MRROverView = () => {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [goalProgress, setGoalProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    (async () => {
      const data = await fetchAllGoals(5);
      setGoals(data);
      setLoading(false);
    })();
  }, []);

  if(loading) return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator />
    </View>
  );

  const DATA = [
    {
      id: 1,
      component: <View className="flex flex-col h-32 mx-2 rounded-lg bg-black p-3 w-36">
        <Text className="text-sm font-semibold text-gray-600 mt-2">GOALS CREATED</Text>
        <View className="flex flex-row items-center bg-transparent">
          <Text className="text-4xl font-semibold text-white">{goals.length}</Text>
        </View>
      </View>
    },
    {
      id: 2,
      component: <View className="flex flex-col h-32 mx-2 rounded-lg bg-black p-3 w-80">
        <Text className="text-sm font-semibold text-gray-600 mt-2">TOTAL SAVED</Text>
        <View className="flex flex-row items-center bg-transparent">
          <Text className="text-4xl font-semibold text-white">${(goals.reduce((acc, curr) => acc + curr.amount, 0).toFixed(1))}</Text>
        </View>
      </View>
    }
  ]

  return (
    <View>
      <View className="flex flex-row items-center justify-between mt-9">
        <Text className="text-lg font-semibold text-white">Overview</Text>
        <View className="flex flex-row items-center space-x-1 justify-center">
          <Text className="text-gray-500 text-sm">View All Stats</Text>
          <AntDesign name="arrowright" size={14} color="gray" />
        </View>
      </View>

      <ScrollView>
        <View className="flex flex-row">
          <FlatList
            data={DATA}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{marginTop: 20}}
            renderItem={({item}) => (
              <>
                {item.component}
              </>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default MRROverView;
