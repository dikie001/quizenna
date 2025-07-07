import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { FetchData } from "../(components)/FetchData";
import Navbar from "../(components)/Navbar";

const Scores = () => {
  return (
    <SafeAreaView className="h-screen bg-gradient-to-br from-purple-950 to-slate-950">
      <Navbar />
      <TouchableOpacity
        onPress={() => FetchData()}
        className="bg-blue-800/50 w-20 shadow-xl py-2 px-5 rounded-lg "
      >
        <Text className="text-white font-medium">fetch</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Scores;
