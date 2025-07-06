import React from "react";
import { SafeAreaView, View } from "react-native";
import BackButton from "../(components)/BackButton";
import Navbar from "../(components)/Navbar";

const DailyChallenge = () => {
  return (
    <SafeAreaView className="h-screen bg-gradient-to-br from-purple-950 to-slate-950">
      <Navbar />
      <View className="px-4 py-8"></View>
    </SafeAreaView>
  );
};

export default DailyChallenge;
