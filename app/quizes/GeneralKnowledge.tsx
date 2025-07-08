import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Navbar from "../(components)/Navbar";

const GeneralKnowledge = () => {
  return (
    <SafeAreaView className="h-screen bg-gradient-to-br from-purple-950 to-slate-950">
     <Navbar/>
      <View className="px-4 py-8"></View>
    </SafeAreaView>
  );
};

export default GeneralKnowledge;
