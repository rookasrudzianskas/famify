import {ScrollView, StyleSheet, View} from 'react-native';
import { Text } from '@/components/Themed';
import { NativeWindStyleSheet } from "nativewind";
import GetStarted from "@/components/get-started";
import MRROverView from "@/components/mrr-overview";
import PostsList from "@/components/posts-list";
import {useEffect, useState} from "react";
import {Session} from "@supabase/supabase-js";
import {supabase} from "@/supabase";
import Account from "@/components/auth/account";
import Auth from "@/components/auth/auth";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function TabOneScreen() {
  const CARDS = [1, 2, 3, 4];
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 100}}
      className="flex-1 bg-black p-5 pt-16">
      {/*<Account key={session.user.id} session={session} />*/}
      {session && session.user ? (
        <>
          <Text className="text-white text-xl font-semibold">Good afternoon</Text>
          <GetStarted />
          <MRROverView />
          <PostsList />
        </>
        ) : (
          <Auth />
        )}


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
