// @ts-nocheck
import {Platform, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import { Text, View } from '@/src/components/Themed';
import React, {useEffect, useState} from "react";
import {supabase} from "@/supabase";
import {useRouter} from "expo-router";
import { SelectList } from 'react-native-dropdown-select-list'
import {fetchInformation} from "@/src/services/goalsFetcher";

export default function ModalScreen() {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState("0");
  const router = useRouter();
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  const createNewTransaction = async () => {
    try {
      const { data, error } = await supabase.from('transactions').insert({
        amount: parseInt(amount),
        user_id: "4eff72e0-7817-4977-94fd-f8b3d2786a90",
        goal_id: 1,
        group_id: 1,
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

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const data = await fetchInformation();
      setGoals(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <View className="h-screen pt-7 px-5">
      <View className="flex flex-col mt-6 w-full">
        <Text className="text-lg text-semibold text-white text-center mb-4">Add a Saving Goal</Text>
        <View className="flex flex-col ml-3 space-y-5 h-full">
          <View>
            <Text className="text-gray-600 mb-1 ml-1">Name</Text>
            <TextInput
              placeholder="Name"
              style={{backgroundColor: '#171616', borderRadius: 4}}
              className="w-full h-12 px-5 mt-0 text-white border-[1px] border-gray-500 py-1"
              value={title}
              onChangeText={setTitle}
            />
          </View>

          <View className="">
            <Text className="text-gray-600 mb-1 ml-1">Amount</Text>
            <TextInput
              placeholder="1"
              style={{backgroundColor: '#171616', borderRadius: 4}}
              className="w-full h-12 px-5 mt-0 text-white border-[1px] border-gray-500 py-1"
              keyboardType="numeric"
              selectTextOnFocus
              value={amount}
              onChangeText={(text) => setAmount(text)}  // Update the amount when text changes
            />

            {goals.length > 0 && (
              <View className="mt-6">
                <Text className="text-gray-600 mb-1 ml-1">Goals</Text>
                <SelectList
                  setSelected={(val) => setSelected(val)}
                  data={() => goals.map((goal) => ({key: goal.id, value: goal.name}))}
                  save="value"
                  boxStyles={{backgroundColor: '#171616', borderRadius: 4}}
                  inputStyles={{backgroundColor: '#171616', color: '#fff'}}
                  dropdownStyles={{backgroundColor: '#171616', borderRadius: 4}}
                  dropdownItemStyles={{backgroundColor: '#171616'}}
                  dropdownTextStyles={{color: '#fff'}}
                />
              </View>
            )}
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
