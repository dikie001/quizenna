import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="quizes/DailyChallenge"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="quizes/EnglishLanguage"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="quizes/GeneralKnowledge"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="quizes/ScienceAndNature"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="quizes/Technology" options={{ headerShown: false }} />

      <Stack.Screen name="quizes/RandomQuiz" options={{ headerShown: false }} />
      <Stack.Screen name="(screens)" options={{ headerShown: false }} />
    </Stack>
  );
}
