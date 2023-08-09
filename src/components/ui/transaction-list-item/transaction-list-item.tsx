//@ts-nocheck
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {formatTimeAgo} from "@/src/utils/data-formatter";

const TransactionListItem = ({transaction, isMe, setShowConfetti}) => {
  return (
    <TouchableOpacity
      onPress={() => setShowConfetti(true)}
      activeOpacity={0.7} className={`bg-green-800/60 rounded-lg max-w-[80%] my-2 py-3 
      ${isMe ? 'ml-auto w-full' : 'mr-auto w-full'}`
    }>
      <View className="flex justify-between flex-row ">
        <Text className="text-white text-base pl-5">
          {transaction.amount < 0 && '-'}
          <Text className="text-bold">$ </Text>
          <Text className={`font-bold ${transaction.amount > 0 ? 'text-green-300' : 'text-red-300'}`}>{transaction.amount} </Text>
          added {transaction.amount > 0 ? 'towards' : 'from'} your <Text className="font-bold">{'Travelling'}</Text>
        </Text>
        <Text/>
      </View>
      <View className="flex mt-1">
        <Text className={`text-white text-xs ${isMe ? 'mr-auto ml-5' : 'mr-auto'}`}>{formatTimeAgo(transaction.created_at)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TransactionListItem;
