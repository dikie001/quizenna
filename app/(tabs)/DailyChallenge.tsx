import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Navbar from "../(components)/Navbar";

const DailyChallenge = () => {
  return (
    <SafeAreaView className="h-screen bg-gradient-to-br from-purple-950 to-slate-950 ">
      <Navbar />{" "}
      <View className="px-4 py-8 ">
        <Text className="text-xl font-bold text-white">
          DailyChallenge Page
        </Text>{" "}
      </View>
    </SafeAreaView>
  );
};

export default DailyChallenge;
