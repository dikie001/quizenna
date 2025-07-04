import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Modal, Text, TouchableOpacity, View, Pressable } from "react-native";

interface MenuProps {
  visible: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onStartQuiz?: () => void;
  onHighScores?: () => void;
  onSettings?: () => void;
  onAbout?: () => void;
}

const Menu = ({
  visible,
  setIsOpen,
  onStartQuiz,
  onHighScores,
  onSettings,
  onAbout,
}: MenuProps) => {
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleMenuAction = (action?: () => void) => {
    if (action) {
      action();
    }
    handleClose();
  };

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      {/* Backdrop */}
      <Pressable
        className="flex-1  justify-center items-center px-4"
        onPress={handleClose}
      >
        {/* Menu Container */}
        <Pressable
          className="bg-white rounded-xl w-full max-w-sm shadow-2xl overflow-hidden"
          onPress={(e) => e.stopPropagation()}
        >
          {/* Header with gradient background */}
          <View className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-10 items-center">
            <View className=" rounded-full p-4 mb-4">
              <Ionicons name="school" size={32} color="white" />
            </View>
            <Text className="text-3xl font-bold text-white mb-2">Quizenna</Text>
            <Text className="text-blue-100 text-center">
              Challenge your mind with fun quizzes!
            </Text>
          </View>

          {/* Menu Options */}
          <View className="p-6 space-y-3">
            {/* Start Quiz - Primary Action */}
            <TouchableOpacity
              className="bg-blue-600 rounded-2xl p-4 shadow-lg  flex-row items-center justify-center"
              onPress={() => handleMenuAction(onStartQuiz)}
              activeOpacity={0.8}
            >
              <Ionicons
                name="play"
                size={20}
                color="white"
                style={{ marginRight: 8 }}
              />
              <Text className="text-white text-lg font-bold">Start Quiz</Text>
            </TouchableOpacity>

            {/* Secondary Actions */}
            <TouchableOpacity
              className="bg-gray-50 border border-gray-200 rounded-2xl p-4 active:bg-gray-100 flex-row items-center"
              onPress={() => handleMenuAction(onHighScores)}
              activeOpacity={0.7}
            >
              <View className="bg-yellow-100 rounded-full p-2 mr-4">
                <Ionicons name="trophy" size={20} color="#EAB308" />
              </View>
              <View className="flex-1">
                <Text className="text-gray-800 text-lg font-semibold">
                  High Scores
                </Text>
                <Text className="text-gray-500 text-sm">
                  View your best performances
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-gray-50 border border-gray-200 rounded-2xl p-4 active:bg-gray-100 flex-row items-center"
              onPress={() => handleMenuAction(onSettings)}
              activeOpacity={0.7}
            >
              <View className="bg-blue-100 rounded-full p-2 mr-4">
                <Ionicons name="settings" size={20} color="#3B82F6" />
              </View>
              <View className="flex-1">
                <Text className="text-gray-800 text-lg font-semibold">
                  Settings
                </Text>
                <Text className="text-gray-500 text-sm">
                  Customize your experience
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-gray-50 border border-gray-200 rounded-2xl p-4 active:bg-gray-100 flex-row items-center"
              onPress={() => handleMenuAction(onAbout)}
              activeOpacity={0.7}
            >
              <View className="bg-green-100 rounded-full p-2 mr-4">
                <Ionicons name="information-circle" size={20} color="#10B981" />
              </View>
              <View className="flex-1">
                <Text className="text-gray-800 text-lg font-semibold">
                  About
                </Text>
                <Text className="text-gray-500 text-sm">
                  Learn more about Quizanna
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
            </TouchableOpacity>
          </View>

          {/* Close Button */}
          <View className="px-6 pb-6">
            <TouchableOpacity
              className="bg-gray-100 rounded-2xl p-4 active:bg-gray-200"
              onPress={handleClose}
              activeOpacity={0.7}
            >
              <Text className="text-gray-700 text-center font-semibold text-lg">
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default Menu;
