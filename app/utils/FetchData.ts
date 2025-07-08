const URL = "https://opentdb.com/api.php?";
const STORAGE_KEY = "random-quiz-questions";
import AsyncStorage from "@react-native-async-storage/async-storage";

type QueryParams = {
  amount: number;
  difficulty: string;
  type: string;
};

type categoryProps={
  category: number
}
const query: QueryParams = {
  amount: 50,
  difficulty: "easy",
  type: "multiple",
};

const fullQuery = (params: QueryParams): string => {
  return Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
};
export const FetchData = async ({ category }: categoryProps) => {
  try {
    console.log("Fetching data from API...");
    const res = await fetch(`${URL}${fullQuery(query)}&category=${category}`);

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

