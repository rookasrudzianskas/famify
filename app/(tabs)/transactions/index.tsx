//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import {Link, Stack} from "expo-router";
import {AntDesign} from "@expo/vector-icons";

const Index = () => {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          title: 'Transactions',
          headerRight: () => (
            <Link href="/savings/create" className="mr-4">
              <AntDesign name="plus" size={18} color="white" />
            </Link>
          )
        }}
      >
        <Text>
          byrookas 🚀
        </Text>
      </Stack.Screen>
    </SafeAreaView>
  );
};

export default Index;
