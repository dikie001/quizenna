import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Navbar from "../(components)/Navbar";

const URL = "https://opentdb.com/api.php?";
const STORAGE_KEY = "random-quiz-questions";

// Fetch data from API stuff
type QueryParams = {
  amount: number;
  difficulty: string;
  category: number;
  type: string;
};

const query: QueryParams = {
  amount: 50,
  difficulty: "easy",
  category: 9,
  type: "multiple",
};

const fullQuery = (params: QueryParams): string => {
  return Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
};

// Fetch data from API function
const FetchData = async () => {
  try {
    console.log("Fetching data from API...");
    const res = await fetch(`${URL}${fullQuery(query)}`);

    const data = await res.json();
    if (data) {
      console.log("data fetched from API...");
    } else {
      console.log("data not fetched from API...");
    }
    const questions = JSON.stringify(data.results);
    AsyncStorage.setItem(STORAGE_KEY, questions);
  } catch (err) {
    console.error("Error fetching from API:", err);
  }
};

// types
type QuizTypes = {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  allAnswers: string[];
};

// main function
const RandomQuiz = () => {
  const [questions, setQuestions] = useState<QuizTypes[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    loadQuestions();
  }, []);

  // on first render or reload load questions from asyncstorage
  const loadQuestions = async () => {
    if (!loading) setLoading(true);

    try {
      const savedData = await AsyncStorage.getItem(STORAGE_KEY);

      if (savedData) {
        const parsed = JSON.parse(savedData);
        if (parsed.length === 0) {
          await fetchNew();
          return;
        }
        const processed = parsed.map((q: any) => shuffleAnswers(q));
        setQuestions(processed);
      } else {
        await fetchNew();
      }
    } catch (error) {
      console.error("Error loading questions:", error);
    } finally {
      setLoading(false);
    }
  };

  // combine & shuffle answers
  const shuffleAnswers = (question: any) => {
    const allAnswers = [question.correct_answer, ...question.incorrect_answers];
    const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);
    return { ...question, allAnswers: shuffledAnswers };
  };

  // validate answer
  const handleAnswerSelect = (answer: string, answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);

    const isCorrect = answer === questions[currentIndex].correct_answer;

    if (isCorrect) {
      setScore((prev) => prev + 1);
      setStreak((prev) => prev + 1);
    } else {
      setStreak(0);
    }

    setTimeout(() => {
      setSelectedAnswer(null);
      setShowResult(false);
      setCurrentIndex((prev) => prev + 1);
      deleteQuestion();
    }, 2000);
  };

  useEffect(() => {
    loadQuestions();
  }, [loading]);

  // fetch new data from API
  const fetchNew = async () => {
    setLoading(true);
    try {
      const newData: any = await FetchData();
      if (newData) {
        const processed = newData.map((q: any) => shuffleAnswers(q));
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
        loadQuestions()
        console.log('done fetching bro..')
      }
    } catch (err) {
      console.log("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Delete question when answered
  const deleteQuestion = async () => {
    const newQuestions = questions.filter((_, index) => index !== currentIndex);
    setQuestions(newQuestions);

    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newQuestions));
    } catch (err) {
      console.log("Storage error:", err);
    }
  };

  if (loading) {
    return (
      <SafeAreaView className="h-screen bg-gradient-to-br from-purple-950 via-blue-950 to-slate-950 justify-center items-center">
        <View className="items-center">
          <ActivityIndicator size="large" color="#8b5cf6" />
          <Text className="text-white text-lg mt-4 font-medium">
            🧠 Loading Brain Teasers...
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  if (!questions.length) {
    return (
      <SafeAreaView className="h-screen bg-gradient-to-br from-purple-950 via-blue-950 to-slate-950">
        <Navbar />
        <View className="flex-1 justify-center items-center px-6">
          <Text className="text-6xl mb-4">🤔</Text>
          <Text className="text-white text-xl text-center mb-6">
            Oops! No questions found
          </Text>
          <TouchableOpacity
            onPress={fetchNew}
            className="flex  flex-row gap-1  justify-center items-center bg-gradient-to-r from-purple-600 to-blue-600 py-4 px-5 rounded-2xl shadow-xl"
          >
            <Ionicons name="reload" size={20} className="text-white " />
            <Text className="text-white font-bold text-lg"> Reload Quiz</Text>
          </TouchableOpacity>
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
    <SafeAreaView className="h-screen bg-gradient-to-br from-purple-950 via-blue-950 to-slate-950">
      <Navbar />

      <View className="flex-1 px-4 py-4">
        {/* Stats Header */}
        <View className="flex-row justify-between items-center mb-4">
          <View className="bg-white/10 backdrop-blur-sm rounded-full px-5 py-3">
            <Text className="text-purple-300 font-semibold text-base">
              Score: {score}
            </Text>
          </View>
          <View className="bg-white/10 backdrop-blur-sm rounded-full px-5 py-3">
            <Text className="text-yellow-300 font-semibold text-base">
              🔥 {streak}
            </Text>
          </View>
        </View>

        {/* Question Card */}
        <View className="bg-white/10 backdrop-blur-md rounded-3xl p-6 mb-4 shadow-2xl">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-purple-300 text-sm font-medium">
              {currentQuestion.category}
            </Text>
            <Text className="text-purple-400 text-sm font-bold">
              {currentQuestion.difficulty.toUpperCase()}
            </Text>
          </View>

          <Text className="text-white text-xl font-semibold leading-6 mb-4">
            {currentQuestion.question
              .replace(/&quot;/g, '"')
              .replace(/&#039;/g, "'")
              .replace(/&amp;/g, "&")}
          </Text>

          {/* Answer Options */}
          <View className="space-y-3">
            {currentQuestion.allAnswers.map((answer, answerIndex) => {
              const isSelected = selectedAnswer === answerIndex;
              const isCorrectAnswer = answer === currentQuestion.correct_answer;

              let buttonStyle = "p-4 rounded-2xl border-2 ";
              let textStyle = "text-white text-base font-medium";

              if (showResult && isSelected && isCorrect) {
                buttonStyle += "bg-green-500/20 border-green-400";
                textStyle = "text-green-300 text-base font-bold";
              } else if (showResult && isSelected && !isCorrect) {
                buttonStyle += "bg-red-500/20 border-red-400";
                textStyle = "text-red-300 text-base font-bold";
              } else if (showResult && isCorrectAnswer) {
                buttonStyle += "bg-green-500/20 border-green-400";
                textStyle = "text-green-300 text-base font-bold";
              } else {
                buttonStyle += "bg-white/5 border-white/20 active:bg-white/10";
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
                  <Text className={textStyle}>
                    {String.fromCharCode(65 + answerIndex)}.{" "}
                    {answer
                      .replace(/&quot;/g, '"')
                      .replace(/&#039;/g, "'")
                      .replace(/&amp;/g, "&")}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Result Feedback */}
        {showResult && (
          <View className="items-center">
            <Text
              className={`text-xl font-bold ${isCorrect ? "text-green-400" : "text-red-400"}`}
            >
              {isCorrect ? "correct!" : "nope!"}
            </Text>
            {streak > 2 && isCorrect && (
              <Text className="text-yellow-300 text-sm mt-1">
                🔥 {streak} in a row!
              </Text>
            )}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default RandomQuiz;
