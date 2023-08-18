import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import React, {useEffect, useState} from 'react';
import {useColorScheme, View, Text} from 'react-native';
import {Session} from "@supabase/supabase-js";
import {supabase} from "@/supabase";
import Auth from "@/src/components/auth/auth";
import { RootSiblingParent } from 'react-native-root-siblings';
import { OnboardFlow } from 'react-native-onboard';

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import {SupabaseProvider} from "@/src/context/SupabaseProvider";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

const queryClient = new QueryClient()

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
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
    <RootSiblingParent>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

          <SupabaseProvider>
            <OnboardFlow fullscreenModal={true} pages={[
              {
                title: 'Welcome to my app',
                subtitle: 'Cool description of my app',
                imageUri: 'https://illlustrations.co/static/f8a168f23ea5623d0c8987b551729183/day78-wallet.png',
              },
              {
                title: 'Page 2 header',
                subtitle: 'Welcome to page 2',
                imageComponent: <View><Text>Hello!</Text></View>
              }]} />
            {/*{session && session.user ? (*/}
            {/*  <Stack>*/}
            {/*    <Stack.Screen*/}
            {/*      name="(tabs)"*/}
            {/*      options={{ headerShown: false }}*/}
            {/*    />*/}
            {/*    <Stack.Screen*/}
            {/*      name="modal"*/}
            {/*      options={{ presentation: 'modal', title: 'Add Transaction' }}*/}
            {/*    />*/}
            {/*    <Stack.Screen*/}
            {/*      name="account"*/}
            {/*      options={{ headerShown: false }}*/}
            {/*    />*/}
            {/*    <Stack.Screen*/}
            {/*      name="goal/[goalId]"*/}
            {/*      options={{ title: 'Goal Explanation' }}*/}
            {/*    />*/}
            {/*    <Stack.Screen*/}
            {/*      name="create-group"*/}
            {/*      options={{ headerShown: false }}*/}
            {/*    />*/}
            {/*    <Stack.Screen*/}
            {/*      name="group/[groupId]"*/}
            {/*      options={{ headerShown: false }}*/}
            {/*    />*/}
            {/*  </Stack>*/}
            {/*) : (*/}
            {/*  <Auth />*/}
            {/*)}*/}
          </SupabaseProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </RootSiblingParent>
  );
}
