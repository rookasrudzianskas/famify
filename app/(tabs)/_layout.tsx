import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Tabs} from 'expo-router';
import {useColorScheme, View} from 'react-native';

import Colors from '@/constants/Colors';
import {AntDesign, FontAwesome5, Ionicons, MaterialIcons, Octicons} from "@expo/vector-icons";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => <AntDesign name="home" size={22} color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Savings',
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => <FontAwesome5 name="piggy-bank" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="add-goal"
        options={{
          title: 'Add Goal',
          tabBarLabel: () => null,
          headerTitle: () => null,
          headerShown: false,
          tabBarIcon: ({ color }) => <View className="mt-1">
            <AntDesign name="pluscircle" size={42} color={color} />
          </View>
        }}
      />
      <Tabs.Screen
        name="transactions/index"
        options={{
          title: 'Transactions',
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => <Octicons name="arrow-switch" size={22} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ color }) => <MaterialIcons name="supervised-user-circle" size={26} color={color} />,
        }}
      />
    </Tabs>
  );
}
