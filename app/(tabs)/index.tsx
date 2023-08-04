import {FlatList, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { NativeWindStyleSheet } from "nativewind";
import {AntDesign, MaterialIcons} from "@expo/vector-icons";
import {Image} from "react-native";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function TabOneScreen() {
  const CARDS = [1, 2, 3, 4];
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 100}} className="flex-1 bg-black p-5 pt-16">
      <Text className="text-white text-xl font-semibold">Good afternoon</Text>

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

      <View className="flex flex-row items-center justify-between mt-9">
        <Text className="text-lg font-semibold text-white">Latest Posts</Text>
        <View className="flex flex-row items-center space-x-1 justify-center">
          <Text className="text-gray-500 text-sm">View All Posts</Text>
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
            <View className="flex flex-col h-56 mx-2 rounded-lg bg-black p-3 w-[300px]">
              <Image
                source={{uri: 'https://picsum.photos/500/300?random=3'}}
                className="w-full h-36 object-cover rounded-md"
              />
              <View className="flex flex-row items-center justify-between bg-transparent mt-3">
                <Text className="font-semibold text-white">Something beautiful about it</Text>
              </View>
            </View>
          )}
        />
      </View>

    </ScrollView>
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
