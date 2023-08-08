//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {AntDesign} from "@expo/vector-icons";

const MRROverView = () => {
  const CARDS = [1, 2, 3, 4];

  return (
    <View>
      <View className="flex flex-row items-center justify-between mt-9">
        <Text className="text-lg font-semibold text-white">Overview</Text>
        <View className="flex flex-row items-center space-x-1 justify-center">
          <Text className="text-gray-500 text-sm">View All Stats</Text>
          <AntDesign name="arrowright" size={14} color="gray" />
        </View>
      </View>

      <View>
        <FlatList
          data={CARDS}
          keyExtractor={(item) => item.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{marginTop: 10}}
          renderItem={({item}) => (
            <View className="flex flex-col h-32 mx-2 rounded-lg bg-black p-3 w-36">
              <Text className="text-sm font-semibold text-gray-600 mt-2">MRR</Text>
              <View className="flex flex-row items-center bg-transparent">
                <Text className="text-xl font-semibold text-white">$18,500</Text>
              </View>
              <View className="flex flex-row items-center justify-between bg-transparent mt-5">
                <TouchableOpacity className="bg-white/20 px-2 py-1 rounded-md">
                  <Text>+0.5%</Text>
                </TouchableOpacity>
                <View />
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default MRROverView;
