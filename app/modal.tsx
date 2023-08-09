import {Platform, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import { Text, View } from '@/src/components/Themed';
import React, {useState} from "react";
import {supabase} from "@/supabase";
import {useRouter} from "expo-router";

export default function ModalScreen() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState("0");
  const router = useRouter();

  const createNewTransaction = async () => {
    try {
      const { data, error } = await supabase.from('transactions').insert({
        amount: parseInt(amount),
        user_id: "423492384920348230948230948",
        goal_id: 1,
      });
      if (error) {
        console.error('Error creating group:', error.message);
        return;
      }

      router.push('/index');
    } catch (error) {
      console.error('Transaction error', error.message);
    }
  }

  return (
    <View className="h-screen pt-7 px-5">
      <View className="flex flex-col mt-6 w-full">
        <Text className="text-lg text-semibold text-white text-center mb-4">Add a Saving Goal</Text>
        <View className="flex flex-col ml-3 space-y-5 h-full">
          <View>
            <Text className="text-gray-600 mb-1 ml-1">Name</Text>
            <TextInput
              placeholder="Name"
              className="w-full h-10 px-5 mt-0 text-white border border-gray-800/70 py-1 rounded-md border-2"
              value={title}
              onChangeText={setTitle}
            />
          </View>

          <View>
            <Text className="text-gray-600 mb-1 ml-1">Amount</Text>
            <TextInput
              placeholder="1"
              className="w-full h-10 px-5 mt-0 text-white border border-gray-800/70 py-1 rounded-md border-2"
              keyboardType="numeric"
              selectTextOnFocus
              value={amount}
              onChangeText={(text) => setAmount(text)}  // Update the amount when text changes
            />
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={createNewTransaction} className="flex absolute bottom-44 w-full px-5 items-center justify-center mb-20 h-10 bg-white rounded-md">
            <Text className="text-black font-semibold text-base">Create a transaction</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
