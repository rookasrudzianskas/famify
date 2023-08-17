//@ts-nocheck
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useSupabase} from "@/src/context/useSupabase";
import { Image } from 'expo-image';
import {
  Feather,
  Foundation,
  Ionicons,
} from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {useRouter} from "expo-router";

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const Profile = () => {
  const {session} = useSupabase();
  const router = useRouter();

  return (
    <View className="pt-16 mx-3">
      <View className="flex items-center">
        <Image
          className="rounded-full w-32 h-32 mt-20"
          source="https://picsum.photos/seed/696/3000/2000"
          placeholder={blurhash}
          contentFit="cover"
          transition={1000}
        />
        <View>
          <Text className="text-2xl font-semibold text-center text-white mt-5">{session?.user?.email}</Text>
        </View>
      </View>

      <View className="mt-5">
        <TouchableOpacity
          onPress={() => router.push('/group/1')}
          className="flex-row items-center justify-between bg-gray-800/70 py-2 px-3 rounded-t-[7px]" activeOpacity={0.7}>
          <View className="flex-row items-center">
            <View className="relative flex-row">
              <View className="w-7 h-7 bg-orange-500 rounded-md items-center justify-center">
                <Feather name="users" size={14} color="white" />
              </View>
            </View>
              <Text className="text-[15px] text-gray-200 font-[600] ml-3">My Houselhold</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {}}
          className="flex-row items-center justify-between bg-gray-800/70 py-2 px-3" activeOpacity={0.7}>
          <View className="flex-row items-center">
            <View className="relative flex-row">
              <View className="w-7 h-7 bg-green-600 rounded-md items-center justify-center">
                <Ionicons name="cube-outline" size={17} color="white" />
              </View>
            </View>
            <Text className="text-[15px] text-gray-200 font-[600] ml-3">My Items</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {}}
          className="flex-row items-center justify-between bg-gray-800/70 py-2 px-3" activeOpacity={0.7}>
          <View className="flex-row items-center">
            <View className="relative flex-row">
              <View className="w-7 h-7 bg-blue-500 rounded-md items-center justify-center">
                <Foundation name="address-book" size={17} color="white" />
              </View>
            </View>
            <Text className="text-[15px] text-gray-200 font-[600] ml-3">Address Info</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {}}
          className="flex-row items-center justify-between bg-gray-800/70 py-2 px-3" activeOpacity={0.7}>
          <View className="flex-row items-center">
            <View className="relative flex-row">
              <View className="w-7 h-7 bg-blue-500 rounded-md items-center justify-center">
                <FontAwesome name="gratipay" size={17} color="white" />
              </View>
            </View>
            <Text className="text-[15px] text-gray-200 font-[600] ml-3">Purchase History</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {}}
          className="flex-row items-center justify-between bg-gray-800/70 py-2 px-3  rounded-b-[7px]" activeOpacity={0.7}>
          <View className="flex-row items-center">
            <View className="relative flex-row">
              <View className="w-7 h-7 bg-gray-500 rounded-md items-center justify-center">
                <Feather name="settings" size={14} color="white" />
              </View>
            </View>
            <Text className="text-[15px] text-gray-200 font-[600] ml-3">Settings</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="gray" />
        </TouchableOpacity>
    </View>
    </View>
  );
};

export default Profile;
