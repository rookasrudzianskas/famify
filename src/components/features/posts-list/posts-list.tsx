//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, FlatList, Image} from 'react-native';
import {AntDesign} from "@expo/vector-icons";

const PostsList = () => {
  const CARDS = [1, 2, 3, 4];

  return (
    <View>
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
    </View>
  );
};

export default PostsList;
