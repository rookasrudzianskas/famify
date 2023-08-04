//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {AntDesign, MaterialIcons} from "@expo/vector-icons";

const GetStarted = () => {
  const CARDS = [1, 2, 3, 4];

  return (
    <View>
      <View className="flex flex-row items-center justify-between mt-3">
        <Text className="text-lg font-semibold text-white">Get Started</Text>
        <View className="flex flex-row items-center space-x-1 justify-center">
          <Text className="text-gray-500 text-sm">All Achievements</Text>
          <AntDesign name="arrowright" size={14} color="gray" />
        </View>
      </View>

      <View>
        <FlatList
          data={CARDS}
          keyExtractor={(item) => item.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{marginTop: 20}}
          renderItem={({item}) => (
            <View className="flex flex-col h-44 mx-2 rounded-lg bg-green-500/30 p-3 px-7">
              <MaterialIcons name="attach-money" size={35} color="black" />
              <Text className="text-lg font-bold text-white mt-2">Make my first 100k dollars</Text>
              <View className="flex flex-row items-center bg-transparent">
                <Text className="text-lg font-semibold text-white">81.500</Text>
                <Text className="text-gray-400">/100.000 dollars made</Text>
              </View>
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
    </View>
  );
};

export default GetStarted;
