import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Switch,
  ScrollView,
} from "react-native";
import Navbar from "../(components)/Navbar";

const Settings = () => {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [difficulty, setDifficulty] = useState("Medium");

  const difficulties = ["Easy", "Medium", "Hard"];

  return (
    <SafeAreaView className="h-screen bg-gradient-to-br from-purple-950 to-slate-950">
      <Navbar />
      <ScrollView className="flex-1 px-4 py-8">
        <View className="max-w-2xl mx-auto">
          <Text className="text-3xl font-bold text-white mb-6 text-center">
            Settings
          </Text>

          <View className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
            <Text className="text-xl font-semibold text-white mb-4">
              Game Settings
            </Text>

            <View className="flex-row justify-between items-center py-3 border-b border-white/20">
              <Text className="text-gray-200 text-lg">Sound Effects</Text>
              <Switch
                value={soundEnabled}
                onValueChange={setSoundEnabled}
                trackColor={{ false: "#374151", true: "#8B5CF6" }}
                thumbColor={soundEnabled ? "#ffffff" : "#9CA3AF"}
              />
            </View>

            <View className="flex-row justify-between items-center py-3 border-b border-white/20">
              <Text className="text-gray-200 text-lg">Notifications</Text>
              <Switch
                value={notificationsEnabled}
                onValueChange={setNotificationsEnabled}
                trackColor={{ false: "#374151", true: "#8B5CF6" }}
                thumbColor={notificationsEnabled ? "#ffffff" : "#9CA3AF"}
              />
            </View>

            <View className="py-3">
              <Text className="text-gray-200 text-lg mb-3">
                Default Difficulty
              </Text>
              <View className="flex-row space-x-2">
                {difficulties.map((level) => (
                  <TouchableOpacity
                    key={level}
                    onPress={() => setDifficulty(level)}
                    className={`px-4 py-2 rounded-lg ${
                      difficulty === level ? "bg-purple-600" : "bg-white/20"
                    }`}
                  >
                    <Text className="text-white text-center">{level}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>

          <View className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
            <Text className="text-xl font-semibold text-white mb-4">
              Appearance
            </Text>

            <View className="flex-row justify-between items-center py-3">
              <Text className="text-gray-200 text-lg">Dark Mode</Text>
              <Switch
                value={darkMode}
                onValueChange={setDarkMode}
                trackColor={{ false: "#374151", true: "#8B5CF6" }}
                thumbColor={darkMode ? "#ffffff" : "#9CA3AF"}
              />
            </View>
          </View>

          <View className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
            <Text className="text-xl font-semibold text-white mb-4">
              Data & Storage
            </Text>

            <TouchableOpacity className="py-3 border-b border-white/20">
              <Text className="text-gray-200 text-lg">Clear Quiz History</Text>
              <Text className="text-gray-400 text-sm">
                Remove all saved scores
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="py-3">
              <Text className="text-gray-200 text-lg">Reset All Settings</Text>
              <Text className="text-gray-400 text-sm">
                Restore default preferences
              </Text>
            </TouchableOpacity>
          </View>

          <View className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <Text className="text-xl font-semibold text-white mb-4">About</Text>

            <View className="py-2">
              <Text className="text-gray-200">Version: 1.0.0</Text>
            </View>
            <View className="py-2">
              <Text className="text-gray-200">Made with React Native</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
