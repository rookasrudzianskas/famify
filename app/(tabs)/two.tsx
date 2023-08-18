// @ts-nocheck
import {ActivityIndicator, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import { Text, View } from '@/src/components/Themed';
import {supabase} from "@/supabase";
import {AntDesign, MaterialIcons} from "@expo/vector-icons";
import React, {useEffect, useState} from "react";
import {useRouter} from "expo-router";
import { MotiView } from 'moti';
import { Skeleton } from 'moti/skeleton';

export default function TabTwoScreen() {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const colorMode = true ? 'dark' : 'light';

  async function fetchInformation() {
    try {
      const { data, error } = await supabase.from('goals').select('*').eq('groupId', 1);
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

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const data = await fetchInformation();
      setGoals(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if(true) return (
    <>
      <MotiView
        transition={{
          type: 'timing',
        }}
        animate={{ backgroundColor: true ? '#000000' : '#ffffff' }}
        style={{backgroundColor: '#000000', marginHorizontal: 15}}
      >
        <View className="flex flex-row items-center justify-between mt-9">
          <Text className="text-lg font-semibold text-white">Overview</Text>
          <View className="flex flex-row items-center space-x-1 justify-center">
            <Text className="text-gray-500 text-sm">View All Stats</Text>
            <AntDesign name="arrowright" size={14} color="gray" />
          </View>
        </View>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View className="my-2">
              <Skeleton
                colorMode={colorMode}
                width={396}
                height={140}
                style={{marginLeft: 20}}
              />
            </View>
          )}
        />
      </MotiView>
    </>
  );

  return (
    <View className="flex-1">
      <FlatList
        data={goals}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{marginTop: 20, paddingBottom: 200}}
        renderItem={({item}) => (
          <TouchableOpacity activeOpacity={0.7} onPress={() => router.push(`/goal/${item.id}`)} className={`flex flex-col h-44 my-3 mx-2 rounded-lg p-3 px-7 bg-blue-500/30`}>
            <MaterialIcons name="attach-money" size={35} color="black" />
            <Text className="text-lg font-bold text-white mt-2">{item.name}</Text>
            <View className="flex flex-row items-center bg-transparent">
              <Text className="text-lg font-semibold text-white">0</Text>
              <Text className="text-gray-400">/{" "}{item.amount} dollars made</Text>
            </View>
            <View className="bg-transparent flex flex-col items-center justify-center mt-2">
              <View className="w-full flex items-center justify-center bg-gray-900 pl-[2px] pr-3 h-3 rounded-md">
                <View className="w-full bg-gray-300/10 h-2 rounded-md px-10">
                </View>
              </View>
            </View>
            <View className="flex flex-row items-center justify-between bg-transparent mt-2">
              <View />
              <TouchableOpacity className="bg-white/20 px-4 py-1 rounded-md">
                <Text>Explore Goal</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
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
