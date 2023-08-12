//@ts-nocheck
import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ActivityIndicator, TextInput} from 'react-native';
import {MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import {useRouter} from "expo-router";
import {fetchSpecificGroup} from "@/src/services/specific/fetch-specific-group";
import { Image } from 'expo-image';
import {useSupabase} from "@/src/context/useSupabase";
import Modal from "react-native-modal";
import {fetchSpecificGroupByInviteCode} from "@/src/services/specific/fetch-specific-group-by-code";

const GroupScreen = () => {
  const router = useRouter();
  const [group, setGroup] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingGroupSearch, setLoadingGroupSearch] = useState(false);
  const [groupCode, setGroupCode] = useState<string>(null);
  const [foundGroup, setFoundGroup] = useState<any>(null);
  const [joinCode, setJoinCode] = useState<boolean>(false);
  const {session} = useSupabase();

  useEffect(() => {
    setLoading(true);
    (async () => {
      const data = await fetchSpecificGroup(3);
      setGroup(data);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    setLoadingGroupSearch(true);
    (async () => {
      if(!groupCode) return;
      const data = await fetchSpecificGroupByInviteCode(groupCode);
      setFoundGroup(data);
      console.log(data)
      setLoadingGroupSearch(false);
    })();
  }, [groupCode]);

  if(loading) return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator />
    </View>
  );

  return (
    <>
      <View className="pt-16 mx-3">
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

        <View className="">
          <Text className="text-xl font-semibold text-left text-white">Members</Text>
          <View className="flex flex-row items-center space-x-2 mt-2 bg-[#171616] py-1 rounded-md px-2">
            <Image
              source={{ uri: 'https://reactnative.dev/img/tiny_logo.png'}}
              className="w-10 h-10 rounded-full"
            />
            <Text className="text-white text-[15px]">{session?.user?.email}</Text>
          </View>
        </View>

        <View className="mt-9">
          <Text className="text-xl font-semibold text-left text-white">Invite code</Text>
          <Text className="text-sm text-gray-500 text-left">Share the code with your partner and start managing your finances together</Text>
          <View className="flex flex-row items-center justify-center mt-2 bg-[#171616] py-1 rounded-md px-2">
            <Text className="text-white text-[30px] tracking-[10px] text-center">{group?.invite_code}</Text>
          </View>
        </View>

        <View className="mt-9">
          <Text className="text-xl font-semibold text-left text-white">Join another group</Text>
          <Text className="text-sm text-gray-500 text-left">If you have an invite code, you can join your partner's group</Text>

          <TouchableOpacity
            onPress={() => setJoinCode(true)}
            className="flex items-center justify-center h-10 bg-white mt-5 rounded-md mb-6"
          >
            <Text className="text-black font-semibold text-base">Join a group</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        style={{ margin: 0 }}
        backdropOpacity={0.8}
        animationIn="fadeIn"
        onBackdropPress={() => setJoinCode(false)}
        isVisible={joinCode}>
        <View>
          <View className="flex bg-white mx-5 px-4 py-3 rounded-md">
            <Text className="text-2xl font-semibold text-left">Join a group</Text>
            <Text className="mt-1">Use the invite code to join a different group.</Text>
            <View className="flex flex-row items-center space-x-2 mt-4">
              <Text>Invite code</Text>
              <TextInput
                placeholder="Invite code"
                className="flex-1 px-3 text-sm text-gray-700 placeholder-gray-500 border rounded-md py-2"
                onChangeText={(text) => setGroupCode(text)}
                value={groupCode}
              />
            </View>

            {loadingGroupSearch && (
              <View className="mt-3">
                <ActivityIndicator />
              </View>
            )}

            {(foundGroup && !loadingGroupSearch) && (
              <View className="flex flex-row items-center mt-3">
                <Text className="font-semibold">Found group:</Text>
                <Text className="font-semibold"> {foundGroup?.name}</Text>
              </View>
            )}

            <TouchableOpacity
              onPress={() => {}}
              activeOpacity={loadingGroupSearch ? 1 : 0.8}
              disabled={loadingGroupSearch}
              className="flex items-center justify-center mt-5 h-10 bg-black rounded-md"
            >
              <Text className="text-white font-semibold text-base">Join a group</Text>
            </TouchableOpacity>
          </View>

        </View>
      </Modal>
    </>
  );
};

export default GroupScreen;
