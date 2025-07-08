// // useQuizLogic.ts
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useEffect, useState } from "react";
// import { FetchData } from "../app/utils/FetchData";

// const STORAGE_KEY = "random-quiz-questions";

// type QuizTypes = {
//   type: string;
//   difficulty: string;
//   question: string;
//   category: string;
//   correct_answer: string;
//   incorrect_answers: string[];
//   allAnswers: string[];
// };

// type categoryProps = {
//   category: number;
// };

// export const useQuizLogic = (category: categoryProps) => {
//   const [questions, setQuestions] = useState<QuizTypes[]>([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
//   const [showResult, setShowResult] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [score, setScore] = useState(0);
//   const [streak, setStreak] = useState(0);
//   const [fetchedQuestions, setFetchedQuestions] = useState<QuizTypes[]>();
//   const [fetchLoading, setFetchLoading] = useState(false);

//   useEffect(() => {
//     loadQuestions();
//   }, []);

//   const shuffleAnswers = (question: any) => {
//     const allAnswers = [question.correct_answer, ...question.incorrect_answers];
//     return {
//       ...question,
//       allAnswers: allAnswers.sort(() => Math.random() - 0.5),
//     };
//   };

//   const loadQuestions = async () => {
//     setLoading(true);
//     try {
//       const savedData = await AsyncStorage.getItem(STORAGE_KEY);
//       if (savedData) {
//         const parsed = JSON.parse(savedData);
//         if (parsed.length === 0) {
//           await fetchNewQuestions();
//           return;
//         }
//         const processed = parsed.map(shuffleAnswers);
//         setQuestions(processed);
//       } else {
//         await fetchNewQuestions();
//       }
//     } catch (error) {
//       console.error("Error loading questions:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchNewQuestions = async () => {
//     setFetchLoading(true);
//     try {
//       const newData: any = await FetchData(category);
//       const processed = newData.map(shuffleAnswers);
//       setFetchedQuestions(processed);
//       await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
//     } catch (err) {
//       console.log("Fetch error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const deleteCurrentQuestion = async () => {
//     const updated = questions.filter((_, i) => i !== currentIndex);
//     setQuestions(updated);
//     await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
//   };

//   const handleAnswerSelect = (answer: string, index: number) => {
//     setSelectedAnswer(index);
//     setShowResult(true);
//     const isCorrect = answer === questions[currentIndex]?.correct_answer;

//     if (isCorrect) {
//       setScore((prev) => prev + 1);
//       setStreak((prev) => prev + 1);
//     } else {
//       setStreak(0);
//     }

//     setTimeout(() => {
//       setSelectedAnswer(null);
//       setShowResult(false);
//       setCurrentIndex((prev) => prev + 1);
//       deleteCurrentQuestion();
//     }, 2000);
//   };

//   const validateAnswer = () => {
//     const current = questions[currentIndex];
//     if (!current) return null;

//     const isCorrect =
//       selectedAnswer !== null &&
//       current.allAnswers[selectedAnswer] === current.correct_answer;

//     return { currentQuestion: current, isCorrect };
//   };

//   return {
//     questions,
//     currentIndex,
//     selectedAnswer,
//     showResult,
//     loading,
//     fetchLoading,

//     score,
//     streak,
//     handleAnswerSelect,
//     validateAnswer,
//     loadQuestions,
//     fetchNewQuestions,
//   };
// };
