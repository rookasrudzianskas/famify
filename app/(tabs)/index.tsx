import {ScrollView, StyleSheet} from 'react-native';
import { Text } from '@/src/components/Themed';
import { NativeWindStyleSheet } from "nativewind";
import GetStarted from "../../src/components/features/get-started";
import MRROverView from "../../src/components/features/mrr-overview";
import PostsList from "../../src/components/features/posts-list";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function TabOneScreen() {
  const CARDS = [1, 2, 3, 4];
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 100}} className="flex-1 bg-black p-5 pt-16">
      <Text className="text-white text-xl font-semibold">Good afternoon, Rokas</Text>

      <GetStarted />
      <MRROverView />
      <PostsList />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
