//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useLocalSearchParams} from "expo-router";

const GoalScreen = () => {
  const { goalId } = useLocalSearchParams();

  return (
    <View>
      <Text className="text-white">
        byrookas 🚀 {goalId}
      </Text>
    </View>
  );
};

export default GoalScreen;
