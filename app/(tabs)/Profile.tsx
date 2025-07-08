import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import BackButton from '../(components)/BackButton';
import Navbar from '../(components)/Navbar';
import { TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

const Profile = () => {
  return (
    <SafeAreaView className="h-screen bg-gradient-to-br from-purple-950 to-slate-950">
      <Navbar />
      <View className="px-4 py-8">
        <View className=" flex flex-col justify-center items-center bg-gradient-to-r from-purple-800 to-slate-800 py-8 px-4 rounded-xl ring-1 mt-4 mx-4 shadow-xl shadow-black">
          <Text className="text-white text-xl text-center font-semibold tracking-wide">
            🚧 Still Under Development 🚧
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/")}
            className="bg-blue-600 px-4 py-3  mt-4 rounded-lg"
          >
            <Text className="text-white font-medium ">Go to home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Profile