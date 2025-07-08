import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Navbar from "../(components)/Navbar";
import { useAsyncStorage } from "../hooks/useAsyncStorage";

const DailyChallenge = () => {
  const {storedValue: questions, loading}=useAsyncStorage("random-quiz-questions")
  return (
    <SafeAreaView className="h-screen bg-gradient-to-br from-purple-950 to-slate-950 ">
      <Navbar />
      <View className="px-4 py-4">
        <TouchableOpacity className="bg-blue-600 mt-5 w-30 py-2 px-4 rounded">
          <Text className="text-white text-md"> Fetch data</Text>{" "}
        </TouchableOpacity>
        <Text className="text-white">{loading}</Text>
      </View>
    </SafeAreaView>
  );
};

export default DailyChallenge;
