import { Tabs } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
      <Tabs.Screen
        name="Quizes"
        options={{ title: "Quizes", headerShown: false }}
      />
      <Tabs.Screen
        name="DailyChallenge"
        options={{ title: "Challenges", headerShown: false }}
      />
      <Tabs.Screen
        name="Profile"
        options={{ title: "Profile", headerShown: false }}
      />
    </Tabs>
  );
};

export default _layout;
