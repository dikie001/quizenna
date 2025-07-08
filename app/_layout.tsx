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
        name="quizes/Mathematics"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="quizes/Art"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="quizes/ScienceAndNature"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="quizes/Technology" options={{ headerShown: false }} />
      <Stack.Screen name="quizes/GeneralKnowledge" options={{ headerShown: false }} />
      <Stack.Screen name="(screens)/About" options={{ headerShown: false }} />
      <Stack.Screen name="(screens)/Scores" options={{ headerShown: false }} />
      <Stack.Screen
        name="(screens)/Settings"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
