import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import Navbar from "../(components)/Navbar";
import { FetchData } from "../utils/FetchData";

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
