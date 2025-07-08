import React from "react";
import { SafeAreaView, View, Text, ScrollView } from "react-native";
import BackButton from "../(components)/BackButton";
import Navbar from "../(components)/Navbar";

const About = () => {
  return (
    <SafeAreaView className="h-screen bg-gradient-to-br from-purple-950 to-slate-950">
      <Navbar />
      <ScrollView className="flex-1 px-4 py-8">
        <View className="max-w-2xl mx-auto">
          <Text className="text-xl font-bold text-white mb-6 text-center">
            About Quiz App
          </Text>

          <View className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
            <Text className="text-xl font-semibold text-white mb-3">
              What This App Does
            </Text>
            <Text className="text-softWhite leading-relaxed">
              A simple quiz application where you can test your knowledge across
              various topics. Answer questions, track your progress, and see how
              you stack up.
            </Text>
          </View>

          <View className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
            <Text className="text-xl font-semibold text-white mb-3">
              How It Works
            </Text>
            <Text className="text-gray-200 leading-relaxed mb-2">
              • Choose from available quiz categories
            </Text>
            <Text className="text-gray-200 leading-relaxed mb-2">
              • Answer multiple choice questions
            </Text>
            <Text className="text-gray-200 leading-relaxed mb-2">
              • Get instant feedback on your answers
            </Text>
            <Text className="text-gray-200 leading-relaxed">
              • View your scores and progress
            </Text>
          </View>

          <View className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
            <Text className="text-xl font-semibold text-white mb-3">
              Built With
            </Text>
            <Text className="text-gray-200 leading-relaxed">
              React Native • Made as a learning project • Work in progress with
              room for improvement
            </Text>
          </View>

          <View className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <Text className="text-xl font-semibold text-white mb-3">
              Feedback
            </Text>
            <Text className="text-gray-200 leading-relaxed">
              Found a bug or have suggestions? This is a learning project and
              feedback helps make it better.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;
