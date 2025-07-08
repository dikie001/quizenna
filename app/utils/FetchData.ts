const URL = "https://opentdb.com/api.php?";
import AsyncStorage from "@react-native-async-storage/async-storage";

type QueryParams = {
  amount: number;
  category: number;
  difficulty: string;
  type: string;
};
const query: QueryParams = {
  amount: 50, 
  category: 9,
  difficulty: "easy",
  type: "multiple",
};

const fullQuery = (params: QueryParams): string => {
  return Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
};

export const FetchData = async () => {
  try {
    const res = await fetch(`${URL}${fullQuery(query)}`);

    const data = await res.json();
    const questions = JSON.stringify(data.results);
    AsyncStorage.setItem("random-quiz-questions", questions);
    console.log("saved...");
    console.log("Fetched data", questions);
  } catch (err) {
    console.log("Run into an error:", err);
  }
};
