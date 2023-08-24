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
import * as amplitude from '@amplitude/analytics-react-native';
import 'react-native-reanimated';
import 'react-native-gesture-handler';

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import {SupabaseProvider} from "@/src/context/SupabaseProvider";
import NotificationProvider from "@/src/context/NotificationProvider.native";

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
  const [onboardingComplete, setOnboardingComplete] = useState(false);

  amplitude.init(`${process.env.EXPO_PUBLIC_AMPLITUDE_API_KEY_ACCESS_TOKEN}`);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, []);

  const updateOnboarding = () => {
    setOnboardingComplete(!onboardingComplete);
  }

  return (
    <RootSiblingParent>
      <NotificationProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            {onboardingComplete ? (
              <OnboardFlow
                fullscreenModal={true}
                onDone={updateOnboarding}
                onBack={() => amplitude.track('Onboarding - Back')}
                pages={[
                  {
                    title: 'Welcome to my app',
                    subtitle: 'Connect your bank account now and start saving money.',
                    imageUri: 'https://illlustrations.co/static/15d8c30e1f77fd78c3b83b9fca9c3a92/day81-ice-cream.png'
                  },
                  {
                    title: 'Buy cool stuff',
                    subtitle: 'Remember that ice cream you wanted to buy?',
                    imageUri: 'https://illlustrations.co/static/15d8c30e1f77fd78c3b83b9fca9c3a92/day81-ice-cream.png'
                  },
                  {
                    title: 'The right tools',
                    subtitle: 'Our app can do anything. Literally anything. We are that good.',
                    imageUri: 'https://illlustrations.co/static/a547d1bc532ad86a13dd8f47d754f0a1/day77-pocket-knief.png'
                  }
                ]}
                type='fullscreen'
              />
            ) : (
              <SupabaseProvider>
                <>
                  {session && session.user ? (
                    <Stack>
                      <Stack.Screen
                        name="(tabs)"
                        options={{ headerShown: false }}
                      />
                      <Stack.Screen
                        name="modal"
                        options={{ presentation: 'modal', title: 'Add Transaction' }}
                      />
                      <Stack.Screen
                        name="account"
                        options={{ headerShown: false }}
                      />
                      <Stack.Screen
                        name="goal/[goalId]"
                        options={{ title: 'Goal Explanation' }}
                      />
                      <Stack.Screen
                        name="create-group"
                        options={{ headerShown: false }}
                      />
                      <Stack.Screen
                        name="group/[groupId]"
                        options={{ headerShown: false }}
                      />
                    </Stack>
                  ) : (
                    <Auth />
                  )}
                </>
              </SupabaseProvider>
            )}
          </ThemeProvider>
        </QueryClientProvider>
      </NotificationProvider>
    </RootSiblingParent>
  );
}
