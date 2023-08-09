//@ts-nocheck
import React, {useEffect, useState} from 'react';
import {Text, View, ActivityIndicator, FlatList} from 'react-native';
import {useLocalSearchParams} from "expo-router";
import {fetchSpecificGoal} from "@/src/services/specific/fetch-goal";
import {fetchSpecificTransactions} from "@/src/services/specific/fetch-transactions";
import TransactionListItem from "@/src/components/ui/transaction-list-item";
import GoalListItem from "@/src/components/ui/goal-list-item";

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
              <GoalListItem
                goal={goal}
              />
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
