// import { Ionicons } from "@expo/vector-icons";
// import React from "react";
// import {
//   ActivityIndicator,
//   SafeAreaView,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import { useQuizLogic } from "./QuizLogic";

// const QuizUi = () => {
//   const {
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
//   } = useQuizLogic();

//   const { currentQuestion, isCorrect } = validateAnswer() || {};

//   if (loading) {
//     return (
//       <SafeAreaView className="h-screen bg-gradient-to-br from-purple-950 via-blue-950 to-slate-950 justify-center items-center">
//         <View className="items-center">
//           <ActivityIndicator size="large" color="#8b5cf6" />
//           <Text className="text-white text-lg mt-4 font-medium">
//             🧠 Loading Brain Teasers...
//           </Text>
//         </View>
//       </SafeAreaView>
//     );
//   }
//   if (!questions.length) {
//     return (
//       <SafeAreaView className="h-screen bg-gradient-to-br from-purple-950 via-blue-950 to-slate-950">
//         <View className="flex-1 justify-center items-center px-6">
//           <Text className="text-6xl mb-4">🤔</Text>
//           <Text className="text-white text-xl text-center mb-6">
//             Oops! No questions found
//           </Text>
//           <TouchableOpacity
//             onPress={fetchNewQuestions}
//             className="flex  flex-row gap-1  justify-center items-center bg-gradient-to-r from-purple-600 to-blue-600 py-4 px-5 rounded-2xl shadow-xl"
//           >
//             <Ionicons name="reload" size={20} className="text-white " />
//             <Text className="text-white font-bold text-lg"> Reload Quiz</Text>
//           </TouchableOpacity>
//         </View>
//       </SafeAreaView>
//     );
//   }
//   return (
//     <SafeAreaView className="h-screen bg-gradient-to-br from-purple-950 via-blue-950 to-slate-950">

//       <View className="flex-1 px-4 py-4">
//         {/* Stats Header */}
//         <View className="flex-row justify-between items-center mb-4">
//           <View className="bg-white/10 backdrop-blur-sm rounded-full px-5 py-3">
//             <Text className="text-purple-300 font-semibold text-base">
//               Score: {score}
//             </Text>
//           </View>
//           <View className="bg-white/10 backdrop-blur-sm rounded-full px-5 py-3">
//             <Text className="text-yellow-300 font-semibold text-base">
//               🔥 {streak}
//             </Text>
//           </View>
//         </View>

//         {/* Question Card */}
//         <View className="bg-white/10 backdrop-blur-md rounded-3xl p-6 mb-4 shadow-2xl">
//           <View className="flex-row items-center justify-between mb-4">
//             <Text className="text-purple-300 text-sm font-medium">
//               {currentQuestion?.category}
//             </Text>
//             <Text className="text-purple-400 text-sm font-bold">
//               {currentQuestion?.difficulty.toUpperCase()}
//             </Text>
//           </View>

//           <Text className="text-white text-xl font-semibold leading-6 mb-4">
//             {currentQuestion?.question
//               .replace(/&quot;/g, '"')
//               .replace(/&#039;/g, "'")
//               .replace(/&amp;/g, "&")}
//           </Text>

//           {/* Answer Options */}
//           <View className="space-y-3">
//             {currentQuestion?.allAnswers.map(
//               (answer: any, answerIndex: number) => {
//                 const isSelected = selectedAnswer === answerIndex;
//                 const isCorrectAnswer =
//                   answer === currentQuestion?.correct_answer;

//                 let buttonStyle = "p-4 rounded-2xl border-2 ";
//                 let textStyle = "text-white text-base font-medium";

//                 if (showResult && isSelected && isCorrect) {
//                   buttonStyle += "bg-green-500/20 border-green-400";
//                   textStyle = "text-green-300 text-base font-bold";
//                 } else if (showResult && isSelected && !isCorrect) {
//                   buttonStyle += "bg-red-500/20 border-red-400";
//                   textStyle = "text-red-300 text-base font-bold";
//                 } else if (showResult && isCorrectAnswer) {
//                   buttonStyle += "bg-green-500/20 border-green-400";
//                   textStyle = "text-green-300 text-base font-bold";
//                 } else {
//                   buttonStyle +=
//                     "bg-white/5 border-white/20 active:bg-white/10";
//                 }

//                 return (
//                   <TouchableOpacity
//                     key={answerIndex}
//                     onPress={() =>
//                       !showResult && handleAnswerSelect(answer, answerIndex)
//                     }
//                     className={buttonStyle}
//                     disabled={showResult}
//                   >
//                     <Text className={textStyle}>
//                       {String.fromCharCode(65 + answerIndex)}.{" "}
//                       {answer
//                         .replace(/&quot;/g, '"')
//                         .replace(/&#039;/g, "'")
//                         .replace(/&amp;/g, "&")}
//                     </Text>
//                   </TouchableOpacity>
//                 );
//               }
//             )}
//           </View>
//         </View>

//         {/* Result Feedback */}
//         {showResult && (
//           <View className="items-center">
//             <Text
//               className={`text-xl font-bold ${isCorrect ? "text-green-400" : "text-red-400"}`}
//             >
//               {isCorrect ? "correct!" : "nope!"}
//             </Text>
//             {streak > 2 && isCorrect && (
//               <Text className="text-yellow-300 text-sm mt-1">
//                 🔥 {streak} in a row!
//               </Text>
//             )}
//           </View>
//         )}
//       </View>
//     </SafeAreaView>
//   );
// };

// export default QuizUi;
