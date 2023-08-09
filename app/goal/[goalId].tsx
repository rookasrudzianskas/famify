//@ts-nocheck
import React, {useEffect, useState} from 'react';
import {Text, View, ActivityIndicator, FlatList} from 'react-native';
import {useLocalSearchParams} from "expo-router";
import {fetchSpecificGoal} from "@/src/services/specific/fetch-goal";
import {MaterialIcons} from "@expo/vector-icons";
import {fetchSpecificTransactions} from "@/src/services/specific/fetch-transactions";
import ConfettiCannon from "react-native-confetti-cannon";
import TransactionListItem from "@/src/components/ui/transaction-list-item";
import {transactionsFetcher} from "@/src/services/transactionsFetcher";

const GoalScreen = () => {
  const { goalId } = useLocalSearchParams();
  const [goal, setGoal] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchGoals() {
      const data = await fetchSpecificGoal(goalId);
      setGoal(data);
      setLoading(false);
    }
    fetchGoals();
  }, []);

  useEffect(() => {
    setLoading(true);
    async function fetchTransactions() {
      const data = await fetchSpecificTransactions();
      setTransactions(data);
      setLoading(false);
    }
    fetchTransactions();
  }, []);

  if(loading) return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator />
    </View>
  );

  return (
    <View className="mt-7">
      {transactions.length > 0 && (
        <View className="pt-3 mx-5 space-y-5">
          <FlatList
            data={transactions}
            ListHeaderComponent={() => (
              <>
                <View className={`flex flex-col h-44 my-3 rounded-lg p-3 px-7 bg-blue-500/30`}>
                  <MaterialIcons name="attach-money" size={35} color="black" />
                  <Text className="text-lg font-bold text-white mt-2">{goal.name}</Text>
                  <View className="flex flex-row items-center bg-transparent">
                    <Text className="text-lg font-semibold text-white">0</Text>
                    <Text className="text-gray-400">/{" "}{goal.amount} dollars made</Text>
                  </View>
                  <View className="bg-transparent flex flex-col items-center justify-center mt-2">
                    <View className="w-full flex items-center justify-center bg-gray-900 pl-[2px] pr-3 h-3 rounded-md">
                      <View className="w-full bg-gray-300/10 h-2 rounded-md px-10"/>
                    </View>
                  </View>
                </View>
                <Text className="text-xl font-semibold text-white mb-2">Explore Transactions</Text>
              </>
            )}
            renderItem={({item}) => (
              <TransactionListItem
                transaction={item}
                key={item.id}
                isMe={true}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{paddingBottom: 100}}
            refreshing={loading}
            onRefresh={() => {
              setLoading(true);
              async function fetchData() {
                const data = await fetchSpecificTransactions();
                setTransactions(data);
                setLoading(false);
              }
              fetchData();
            }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  );
};

export default GoalScreen;
