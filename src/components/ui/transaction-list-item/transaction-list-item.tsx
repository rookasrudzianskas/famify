//@ts-nocheck
import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';

const TransactionListItem = ({transaction, isMe, setShowConfetti, showConfetti}) => {
  return (
    <TouchableOpacity
      onPress={() => setShowConfetti(true)}
      activeOpacity={0.7} className={`bg-green-800/60 flex justify-between flex-row rounded-lg max-w-[80%] my-2 py-3 
      ${isMe ? 'ml-auto w-full' : 'mr-auto w-full'}`
    }>
      <Text className="text-white text-base pl-5">
        $ <Text className="font-semibold">{transaction.amount}</Text> added towards your goal
      </Text>
      <Text/>
    </TouchableOpacity>
  );
};

export default TransactionListItem;
