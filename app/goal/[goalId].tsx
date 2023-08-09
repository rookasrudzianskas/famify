//@ts-nocheck
import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, FlatList} from 'react-native';
import {useLocalSearchParams} from "expo-router";
import {fetchSpecificGoal} from "@/src/services/specific/fetch-goal";
import {fetchSpecificTransactions} from "@/src/services/specific/fetch-transactions";
import TransactionListItem from "@/src/components/ui/transaction-list-item";
import GoalListItem from "@/src/components/ui/goal-list-item";
import {fetchSpecificGoalProgress} from "@/src/services/specific/get-goal-progress";

const GoalScreen = () => {
  const { goalId } = useLocalSearchParams();
  const [goal, setGoal] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [goalProgress, setGoalProgress] = useState();

  useEffect(() => {
    setLoading(true);
    (async () => {
      const data = await fetchSpecificGoal(goalId);
      const transactionData = await fetchSpecificTransactions();
      const goalsData = await fetchSpecificGoalProgress(goalId);
      setGoal(data);
      setTransactions(transactionData);
      setGoalProgress(goalsData);
      setLoading(false);
    })();
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
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{paddingBottom: 100}}
            refreshing={loading}
            showsVerticalScrollIndicator={false}
            onRefresh={() => {
              setLoading(true);
              async function fetchData() {
                const data = await fetchSpecificTransactions();
                setTransactions(data);
                setLoading(false);
              }
              fetchData();
            }}
            ListHeaderComponent={() => (
              <GoalListItem
                goal={goal}
                goalProgress={goalProgress}
              />
            )}
            renderItem={({item}) => (
              <TransactionListItem
                transaction={item}
                key={item.id}
                isMe={true}
              />
            )}
          />
        </View>
      )}
    </View>
  );
};

export default GoalScreen;
