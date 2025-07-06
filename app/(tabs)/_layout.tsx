import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const TabIcon = ({ focused, name, icon }:any) => (
  
  <View className="items-center justify-center py-1">
    <View
      className={`${focused ? "bg-slate-700 " : "bg-transparent"} rounded-full px-4 py-3 min-h-[50] flex-row items-center justify-center transition-all duration-300`}
    >
      <Ionicons
        name={icon}
        size={focused ? 18 : 22}
        color={focused ? "white" : "#94a3b8"}
      />
      {focused && (
        <Text className="text-white font-bold ml-2 text-sm">{name}</Text>
      )}
    </View>
  </View>
);

const tabs = [
  { name: "index", title: "Home", icon: "home" },
  { name: "Quizes", title: "Quizes", icon: "school" },
  { name: "DailyChallenge", title: "Challenge", icon: "bulb" },
  { name: "Profile", title: "Profile", icon: "person" },
];

export default function TabLayout() {
  return (
    <Tabs 
      screenOptions={{
        tabBarItemStyle: {
          height: 60,
          backgroundColor: "transparent",
          paddingVertical: 8,
        },
        tabBarStyle: {
          backgroundColor:"#2B124C",
          height: 52,
          borderRadius: 25,
          marginHorizontal: 16,
          marginBottom: 20,
          marginTop:20,
          position: "absolute",
          borderTopWidth: 0,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 8,
          elevation: 10,
        },
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      {tabs.map(({ name, title, icon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} name={title} icon={icon} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
