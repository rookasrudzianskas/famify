//@ts-nocheck
import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, FlatList} from 'react-native';
import {AntDesign} from "@expo/vector-icons";
import {fetchAllGoals} from "@/src/services/specific/fetch-all-goals";
import {renderBeautifulDollarAmount} from "@/src/utils/price-formatter";
import { MotiView } from 'moti';
import { Skeleton } from 'moti/skeleton';

const LOADING_DATA = [
  {
    id: 1,
    title: 'GOALS CREATED',
  },
  {
    id: 2,
    title: 'TOTAL SAVED',
  },
  {
    id: 3,
    title: 'GROUPS',
  }
]

const MRROverView = () => {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(false);
  const colorMode = true ? 'dark' : 'light';

  useEffect(() => {
    setLoading(true);
    (async () => {
      const data = await fetchAllGoals(5);
      setGoals(data);
      setLoading(false);
    })();
  }, []);

  if(loading) return (
    <>
      <MotiView
        transition={{
          type: 'timing',
        }}
        animate={{ backgroundColor: true ? '#000000' : '#ffffff' }}
      >
        <View className="flex flex-row items-center justify-between mt-9">
          <Text className="text-lg font-semibold text-white">Overview</Text>
          <View className="flex flex-row items-center space-x-1 justify-center">
            <Text className="text-gray-500 text-sm">View All Stats</Text>
            <AntDesign name="arrowright" size={14} color="gray" />
          </View>
        </View>
        <FlatList
          data={LOADING_DATA}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View className="flex flex-col h-32 rounded-lg bg-black py-3 w-36">
              <Text className="text-sm font-semibold text-gray-600 mt-2">{item.title}</Text>
              <View className="flex flex-row items-center mt-3 bg-transparent">
                <Skeleton
                  colorMode={colorMode}
                  width={100}
                  height={50}
                  style={{marginLeft: 20}}
                />
              </View>
            </View>
          )}
        />
      </MotiView>
    </>
  );

  const DATA = [
    {
      id: 1,
      component: <View className="flex flex-col h-32 mx-2 rounded-lg bg-black p-3 w-40">
        <Text className="text-sm font-semibold text-gray-600 mt-2">GOALS CREATED</Text>
        <View className="flex flex-row items-center bg-transparent">
          <Text className="text-4xl font-semibold text-white mt-1">{goals.length} Goals</Text>
        </View>
      </View>
    },
    {
      id: 2,
      component: <View className="flex flex-col h-32 mx-2 rounded-lg bg-black p-3 w-40">
        <Text className="text-sm font-semibold text-gray-600 mt-2">TOTAL SAVED</Text>
        <View className="flex flex-row items-center bg-transparent">
          <Text className="text-4xl font-semibold text-white mt-1">{renderBeautifulDollarAmount(goals)}</Text>
        </View>
      </View>
    },
    {
      id: 3,
      component: <View className="flex flex-col h-32 mx-2 rounded-lg bg-black p-3 w-40">
        <Text className="text-sm font-semibold text-gray-600 mt-2">THIS MONTH</Text>
        <View className="flex flex-row items-center bg-transparent">
          <Text className="text-4xl font-semibold text-white mt-1">{renderBeautifulDollarAmount(goals)}</Text>
        </View>
      </View>
    },
    {
      id: 4,
      component: <View className="flex flex-col h-32 mx-2 rounded-lg bg-black p-3 w-40">
        <Text className="text-sm font-semibold text-gray-600 mt-2">GROUPS</Text>
        <View className="flex flex-row items-center bg-transparent">
          <Text className="text-4xl font-semibold text-white mt-1">2</Text>
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
