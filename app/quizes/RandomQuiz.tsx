import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FetchData } from "../(components)/FetchData";
import Navbar from "../(components)/Navbar";

type QuizTypes = {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  allAnswers: string[];
};

const RandomQuiz = () => {
  const [questions, setQuestions] = useState<QuizTypes[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string>("");

  const STORAGE_KEY = "random-quiz-questions";

  useEffect(() => {
    const init = async () => {
      await loadQuestions();
    };
    init();
  }, []);

  const loadQuestions = async () => {
    setLoading(true);
    try {
      const savedData: any = await AsyncStorage.getItem(STORAGE_KEY);

      if (savedData) {
        const parsed = JSON.parse(savedData);

        const processed = parsed.map((q: any) => shuffleAnswers(q));
        setQuestions(processed);
        if (parsed.length === 0) {
          console.log("Nothing in the storage...");
          await fetchNew();
        }
      } else {
        fetchNew();
      }
    } catch (error) {
      console.error("Error loading questions:", error);
    } finally {
      setLoading(false);
    }
  };

  const shuffleAnswers = (question: any) => {
    const allAnswers = [question.correct_answer, ...question.incorrect_answers];
    const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);
    return { ...question, allAnswers: shuffledAnswers };
  };

  // Handle selected answer,navigation and validation
  const handleAnswerSelect = (answer: any, answerIndex: any) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    if (currentIndex < questions.length) {
      setTimeout(() => {
        console.log(
          "current-index: ",
          currentIndex,
          "questions-length: ",
          questions.length
        );
        setSelectedAnswer(null);
        setShowResult(false);
        DeleteQuestion();
        setCurrentIndex((prev) => prev + 1);
        console.log("newIndex", currentIndex);
      }, 2500);
    } else if (
      currentIndex >= questions.length ||
      !currentIndex ||
      questions.length === 0 ||
      !questions
    ) {
      console.log("empty object!");
      fetchNew();
      console.log("Data updated!");
    }
  };

  // retry fetch
  const RetryFetch = async () => {
    setLoading(true);
    await FetchData();
    const newData = await AsyncStorage.getItem(STORAGE_KEY);
    if (newData) {
      loadQuestions();
    }
  };

  // Fetch new Questions
  const fetchNew = async () => {
    setLoading(true);
    try {
      console.log("fetching data from api...");
      const newData: any = await FetchData();
      if (newData) {
        setLoading(false);
      } else {
        setMessage("Network Error! Connect to internet");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Delete answred questions
  const DeleteQuestion = async () => {
    const newQuestions: any = questions.filter(
      (_, index) => index !== currentIndex
    );
    setQuestions(newQuestions);

    try {
      await AsyncStorage.setItem(
        "random-quiz-questions",
        JSON.stringify(newQuestions)
      );
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return (
      <SafeAreaView className="h-screen bg-gradient-to-br from-purple-950 to-slate-950 justify-center items-center">
        <ActivityIndicator size="large" color="#a855f7" />
        <Text className="text-primary-light text-md mt-4 font-medium">
          Loading quizes...
        </Text>
      </SafeAreaView>
    );
  }

  if (!questions.length || !questions) {
    return (
      <SafeAreaView className="h-screen bg-gradient-to-br from-purple-950 to-slate-950">
        <Navbar />
        <View className="flex-1 justify-center items-center px-4">
          <Text className="text-white text-lg text-center">{message}</Text>
          <TouchableOpacity
            onPress={RetryFetch}
            className="text-white bg-violet-700 py-2 px-6 mt-2 rounded-md shadow-xl animate-pulse"
          >
            <Text className="text-white font-semibold text-lg">Retry</Text>
          </TouchableOpacity>{" "}
        </View>
      </SafeAreaView>
    );
  }

  const currentQuestion = questions[currentIndex];
  if (!currentQuestion) return null;

  const isCorrect =
    selectedAnswer !== null &&
    currentQuestion.allAnswers[selectedAnswer] ===
      currentQuestion.correct_answer;

  return (
    <SafeAreaView className="h-screen bg-gradient-to-br from-purple-950 to-slate-950">
      <Navbar />

      <View className="flex-1 px-6 py-8">
        {/* Question card */}
        <View className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
          <Text className="text-purple-300 text-sm mb-3">
            {currentQuestion?.category || null} •{" "}
            {currentQuestion?.difficulty || null}
          </Text>

          <Text className="text-white text-xl leading-7 mb-6">
            {currentQuestion?.question
              .replace(/&quot;/g, '"')
              .replace(/&#039;/g, "'")}
          </Text>

          {/* Answer options */}
          <View className="space-y-3">
            {currentQuestion?.allAnswers.map((answer, answerIndex) => {
              const isSelected = selectedAnswer === answerIndex;
              const isCorrectAnswer = answer === currentQuestion.correct_answer;

              let buttonStyle =
                "p-4 rounded-xl bg-white/5 border border-white/20";

              if (showResult && isSelected && isCorrect) {
                buttonStyle += " bg-green-500/20 border-green-500/50";
              } else if (showResult && isSelected && !isCorrect) {
                buttonStyle += " bg-red-500/20 border-red-500/50";
              } else if (showResult && isCorrectAnswer) {
                buttonStyle += " bg-green-500/20  border-green-500/50";
              }

              return (
                <TouchableOpacity
                  key={answerIndex}
                  onPress={() =>
                    !showResult && handleAnswerSelect(answer, answerIndex)
                  }
                  className={buttonStyle}
                  disabled={showResult}
                >
                  <Text className="text-white text-base">
                    {String.fromCharCode(65 + answerIndex)}.{" "}
                    {answer.replace(/&quot;/g, '"').replace(/&#039;/g, "'")}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Result and navigation */}
        {showResult && (
          <View className="items-center">
            <Text
              className={`text-lg mb-4 ${isCorrect ? "text-green-400" : "text-red-400"}`}
            >
              {isCorrect ? "✓ Correct!" : "✗ Incorrect!"}
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default RandomQuiz;
