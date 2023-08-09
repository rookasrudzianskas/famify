//@ts-nocheck
import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView, ActivityIndicator} from 'react-native';
import {Link, Stack} from "expo-router";
import {AntDesign} from "@expo/vector-icons";
import {transactionsFetcher} from "@/src/services/transactionsFetcher";
import TransactionListItem from "@/src/components/ui/transaction-list-item";
import ConfettiCannon from "react-native-confetti-cannon";

const Index = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isMe, setIsMe] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const data = await transactionsFetcher();
      setTransactions(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if(loading) return (
    <View className="h-screen flex items-center justify-center">
      <ActivityIndicator />
    </View>
  );

  if(transactions.length > 0 ) return (
    <View className="pt-10 mx-5 space-y-5">
      {showConfetti && <ConfettiCannon count={200} origin={{x: 200, y: -200}} onAnimationEnd={() => setShowConfetti(false)}/>}
      {transactions.map((transaction: any, key) => (
        <TransactionListItem
          transaction={transaction}
          key={key}
          isMe={isMe}
          showConfetti={showConfetti}
          setShowConfetti={setShowConfetti}
        />
      ))}
    </View>
  )


  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          title: 'Transactions',
          headerRight: () => (
            <Link href="/modal" className="mr-4">
              <AntDesign name="plus" size={18} color="white"/>
            </Link>
          )
        }}
      />
    </SafeAreaView>
  );
};

export default Index;
