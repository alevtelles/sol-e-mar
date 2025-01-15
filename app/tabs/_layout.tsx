import { Tabs } from "expo-router";
import {
  HouseSimple,
  MagnifyingGlass,
  Article,
  User,
} from "phosphor-react-native";
import { View, Text } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#181a20",
          height: 80,
          paddingTop: 20,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFD400",
        tabBarInactiveTintColor: "#757575",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <HouseSimple size={32} color={color} weight="light" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <MagnifyingGlass size={32} color={color} weight="light" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="bookings"
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <Article size={32} color={color} weight="light" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <User size={32} color={color} weight="light" />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
