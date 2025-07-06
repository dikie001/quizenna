import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Menu from "./Menu";

const Navbar = () => {
  const [open, setIsOpen] = useState<boolean>(false);
  return (
    <SafeAreaView className="bg  z-50 top-0 sticky  shadow-xl rounded-3xl">
      <View className="flex-row justify-between items-center mb-1 mt-4 px-4 pr-8 ">
        <View>
          <Text className="text-3xl font-bold text-white">Quizenna</Text>
        </View>

        {open && <Menu open={open} setIsOpen={setIsOpen} />}
        <TouchableOpacity
          onPress={() => setIsOpen(!open)}
          className="w-10 h-10 shadow-xl  items-center justify-center"
        >
          <Ionicons name={"menu"} size={30} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Navbar;
