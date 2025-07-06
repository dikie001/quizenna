import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Navbar from "../(components)/Navbar";

const RandomQuiz = () => {
  // State to store quiz questions loaded from storage
  const [questions, setQuestions] = useState([]);

  // Load questions when component mounts
  useEffect(() => {
    loadQuestions();
  }, []);

  // Function to load quiz questions from AsyncStorage
  const loadQuestions = async () => {
    try {
      const savedData = await AsyncStorage.getItem("random-quiz-questions");
      if (savedData) {
        setQuestions(JSON.parse(savedData)); // Parse and set questions
      }
    } catch (error) {
      console.error("Error loading questions:", error);
    }
  };

  return (
    <SafeAreaView className="h-screen bg-gradient-to-br from-purple-950 to-slate-950">
      <Navbar />
      <ScrollView className="px-4 py-4 flex-1">
        {/* Map through each question to display */}
        {questions.map((question, index) => (
          <View key={index} className="bg-white/10 p-4 mb-4 rounded-lg">
            {/* Display question category and difficulty */}
            <Text className="text-blue-300 text-sm mb-2">
              {question.category} • {question.difficulty}
            </Text>

            {/* Display the question text with HTML entities decoded */}
            <Text
              className="text-white text-lg mb-4"
              style={{ lineHeight: 24 }}
            >
              {question.question
                .replace(/&quot;/g, '"')
                .replace(/&#039;/g, "'")}
            </Text>

            {/* Display all answer options with A, B, C, D labels */}
            <View className="space-y-2">
              {/* Combine correct and incorrect answers */}
              {[question.correct_answer, ...question.incorrect_answers].map(
                (answer, answerIndex) => (
                  <View
                    key={answerIndex}
                    className="p-3 rounded-lg bg-white/5 border border-white/20"
                  >
                    <Text className="text-white">
                      {String.fromCharCode(65 + answerIndex)}.{" "}
                      {answer.replace(/&quot;/g, '"').replace(/&#039;/g, "'")}
                    </Text>
                  </View>
                )
              )}
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default RandomQuiz;
