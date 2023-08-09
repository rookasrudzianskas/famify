import { StatusBar } from 'expo-status-bar';
import {Platform, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import { Text, View } from '@/src/components/Themed';
import React, {useState} from "react";
import {Ionicons} from "@expo/vector-icons";

export default function ModalScreen() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState("0");

  const createNewTransaction = async () => {

  }

  return (
    <View className="h-screen pt-16 px-5">
      <View className="flex flex-col bg-red-500 mt-6 w-full">
        {/*<Image className="w-10 h-10 rounded-full" source={{uri: user.image}} />*/}
        <View className="flex flex-col ml-3 flex-1 h-36">
          <View className="flex flex-row border mt-1 inline-flex w-[80px] items-center justify-center space-x-1 rounded-full border-2 border-[#1da1f2]">
            <Text className="text-[#1da1f2] font-semibold">Public</Text>
            <Ionicons name="chevron-down-sharp" size={18} color="#1da1f2" />
          </View>
          <TextInput
            placeholder={'What is happening'}
            className="text-[14px] mt-2 w-full"
            multiline
            numberOfLines={5}
            style={{flex: 1}}
            // value={text}
            // onChangeText={setText}
          />
        </View>
        <View>
          <TouchableOpacity onPress={createNewTransaction} className="flex w-full px-5 items-center justify-center mb-20 h-10 bg-white rounded-md">
            <Text className="text-black font-semibold text-base">Create a transaction</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    // <View className="flex items-center h-full">
    //   <Text className="text-lg text-white font-semibold">
    //     Create a new Savings Goal
    //   </Text>
    //   <View className="">
    //     <View className="space-y-3 flex-1">
    //       <TextInput
    //         placeholder="Name"
    //         className="w-full h-10 px-5 mt-0 text-white border border-gray-800/70 py-1 rounded-md border-2"
    //         value={title}
    //         onChangeText={setTitle}
    //       />
    //
    //       <TextInput
    //         placeholder="1"
    //         className="w-full h-10 px-5 mt-0 text-white border border-gray-800/70 py-1 rounded-md border-2"
    //         keyboardType="numeric"
    //         selectTextOnFocus
    //         value={amount}
    //         onChangeText={(text) => setAmount(text)}  // Update the amount when text changes
    //       />
    //     </View>
    //

    //   </View>
    //   {/* Use a light status bar on iOS to account for the black space above the modal */}
    //   <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    // </View>
  );
}
