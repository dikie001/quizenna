import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Navbar from "../(components)/Navbar";

export default function QuizzyHomepage() {
  const [open, setIsOpen] = useState<boolean>(false);
  return (
    <SafeAreaView
      className={`inset-0  flex-1 relative bg-gradient-to-r from-purple-950 to-slate-950`}
    >
      {" "}
      <Navbar />
      <ScrollView className={` flex-1 px-4 py-8 `}>
        {/* Header */}

        {/* Welcome Card */}
        <View className="shadow-xl  bg-gradient-to-tr from-purple-950 to-slate-950 rounded-2xl p-6 mb-6">
          <Text className="text-white text-xl font-bold mb-2">
            Ready to Quiz?
          </Text>
          <Text className="text-blue-100 text-sm mb-4">
            Test your knowledge across different topics
          </Text>
          <TouchableOpacity className="  shadow-xl shadow-black/60  rounded-xl py-3 px-6 self-start">
            <Link href={"/quizes/GeneralKnowledge"} className="text-white font-bold">
              Start Playing
            </Link>
          </TouchableOpacity>
        </View>

 

        {/* Daily Challenge */}
        <View className=" shadow-xl mb-5 shadow-black/60 bg-gradient-to-tl from-purple-950 to-slate-950 rounded-xl p-4 mt-2">
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-white font-bold text-lg">
                Daily Challenge
              </Text>
              <Text className="text-slate-400 text-sm">
                Complete today's quiz
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                router.push("/(tabs)/DailyChallenge");
              }}
              className="shadow-xl shadow-black bg-gradient-to-br from-purple-900 to-slate-900 rounded-full p-3"
            >
              <Ionicons name="play" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories */}
        <Text className="text-white text-lg font-bold mb-4">Categories</Text>
        <View className="flex-row flex-wrap justify-between mb-12">
          <TouchableOpacity
            onPress={() => router.push("/quizes/Art")}
            className="shadow-xl shadow-black  bg-gradient-to-br from-purple-950 to-slate-950 rounded-xl p-4 w-[48%] mb-4"
          >
            <Ionicons name="school" size={24} color="#3b82f6" />
            <Text className="text-white font-semibold mt-2">
              Art
            </Text>
            <Text className="text-slate-400 text-xs">
          Art history, famous artists, etc
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/quizes/ScienceAndNature")}
            className="shadow-xl shadow-black  bg-gradient-to-l from-purple-950 to-slate-950 rounded-xl p-4 w-[48%] mb-4"
          >
            <Ionicons name="leaf" size={24} color="#10b981" />
            <Text className="text-white font-semibold mt-2">
              Science & Nature
            </Text>
            <Text className="text-slate-400 text-xs">Animals, plants,etc</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/quizes/EnglishLanguage")}
            className="shadow-xl shadow-black  bg-gradient-to-tl from-purple-950 to-slate-950 rounded-xl p-4 w-[48%] mb-4"
          >
            <Ionicons name="library" size={24} color="#f59e0b" />
            <Text className="text-white font-semibold mt-2">
              English lang...
            </Text>
            <Text className="text-slate-400 text-xs">Grammar, vocab etc</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/quizes/Technology")}
            className="shadow-xl shadow-black bg-gradient-to-r from-purple-950 to-slate-950 rounded-xl p-4 w-[48%] mb-4"
          >
            <FontAwesome5 name="laptop-code" size={24} color="violet" />
            <Text className="text-white font-semibold mt-2">
              Technology & IT
            </Text>
            <Text className="text-slate-400 text-xs">Modern tech</Text>
          </TouchableOpacity>
        
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
