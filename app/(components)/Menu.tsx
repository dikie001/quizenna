import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Modal, Pressable, Text, TouchableOpacity, View } from "react-native";

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
        className="flex-1 backdrop-blur-sm  justify-center items-center  w-full px-4"
        onPress={handleClose}
      >
        {/* Menu Container */}
        <Pressable
          className="ring-1 bg-gradient-to-tr from-purple-950 to-slate-950  rounded-xl w-full max-w-sm shadow-2xl overflow-hidden"
          onPress={(e) => e.stopPropagation()}
        >
          {/* Header with gradient background */}
          <View className="ring-1 bg-gradient-to-r from-purple-950 to-slate-950 px-8 py-2 items-center">
            <View className=" rounded-full p-4 "></View>
            <Text className="text-3xl font-bold text-white mb-2">Quizenna</Text>
          </View>

          {/* Menu Options */}
          <View className="p-6 space-y-3">
            {/* Start Quiz - Primary Action */}
            <TouchableOpacity
              className=" bg-gradient-to-tl shadow-black/60 from-purple-950 to-slate-950 rounded-2xl p-4 shadow-lg  flex-row items-center justify-center"
            //   onPress={() => handleMenuAction(onStartQuiz)}
            onPress={()=>{
                router.push("/quizes/RandomQuiz");
                setIsOpen(false)
            }}
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
              className="ring outline-none   rounded-2xl p-4 flex-row items-center"
              onPress={() => handleMenuAction(onHighScores)}
              activeOpacity={0.7}
            >
              <View className="p-2 mr-4">
                <Ionicons name="trophy" size={20} color="#EAB308" />
              </View>
              <View className="flex-1">
                <TouchableOpacity
                  onPress={() => {
                    router.push("/(screens)/Scores");
                    setIsOpen(false);
                  }}
                  className="text-primary-light text-lg font-semibold"
                >
                  High Scores
                </TouchableOpacity>
                <Text className="text-gray-400 text-sm">
                  View your best performances
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
            </TouchableOpacity>

            <TouchableOpacity
              className=" ring rounded-2xl p-4  flex-row items-center"
              onPress={() => handleMenuAction(onSettings)}
              activeOpacity={0.7}
            >
              <View className=" rounded-full p-2 mr-4">
                <Ionicons name="settings" size={20} color="#3B82F6" />
              </View>
              <View className="flex-1">
                <TouchableOpacity
                  onPress={() => {
                    router.push("/(screens)/Settings");
                    setIsOpen(false);
                  }}
                  className="text-primary-light text-lg font-semibold"
                >
                  Settings
                </TouchableOpacity>
                <Text className="text-gray-400 text-sm">
                  Customize your experience
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
            </TouchableOpacity>

            <TouchableOpacity
              className="ring  rounded-2xl p-4  flex-row items-center"
          
            >
              <View className=" p-2 mr-4">
                <Ionicons name="information-circle" size={20} color="#10B981" />
              </View>
              <View className="flex-1">
                <TouchableOpacity
                  onPress={() => {
                    router.push("/(screens)/About");
                    setIsOpen(false);
                  }}
                  className="text-primary-light text-lg font-semibold"
                >
                  About
                </TouchableOpacity>
                <Text className="text-gray-400 text-sm">
                  Learn more about Quizanna
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
            </TouchableOpacity>
          </View>

          {/* Close Button */}
          <View className="px-6 pb-6">
            <TouchableOpacity
              className="ring ring-red-500 rounded-2xl p-4 "
              onPress={handleClose}
              activeOpacity={0.7}
            >
              <Text className="text-primary-light text-center font-semibold text-lg">
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
