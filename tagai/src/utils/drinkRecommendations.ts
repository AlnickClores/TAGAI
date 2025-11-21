import drinksData from "../data/drinks.json";

export interface DrinkPreferences {
  drinkType: string;
  mood: string[];
  flavor: string[];
  alcohol: string;
  budget: string;
}

export interface Drink {
  name: string;
  image?: string;
  alcoholLevel: string;
  recipe?: string[];
  instructions?: string[];
  flavorProfile: string[];
  mood: string[];
  price: string;
  category?: string;
}

function matchesMood(drinkMood: string[], userMood: string[]): boolean {
  return drinkMood.some((mood) =>
    userMood.some((userM) => userM.toLowerCase() === mood.toLowerCase())
  );
}

function matchesFlavor(drinkFlavor: string[], userFlavor: string[]): boolean {
  return drinkFlavor.some((flavor) =>
    userFlavor.some((userF) => userF.toLowerCase() === flavor.toLowerCase())
  );
}

function matchesAlcohol(drinkAlcohol: string, userAlcohol: string): boolean {
  const alcoholMap: { [key: string]: number } = {
    light: 1,
    moderate: 2,
    medium: 2,
    strong: 3,
    "very strong": 4,
  };

  const drinkLevel = alcoholMap[drinkAlcohol.toLowerCase()] || 2;
  const userLevel = alcoholMap[userAlcohol.toLowerCase()] || 2;

  return drinkLevel <= userLevel + 1;
}

function matchesBudget(drinkPrice: string, userBudget: string): boolean {
  const priceMatch = drinkPrice.match(/₱(\d+)(?:-₱(\d+))?/);
  if (!priceMatch) return true;

  const drinkMin = parseInt(priceMatch[1]);
  const drinkMax = priceMatch[2] ? parseInt(priceMatch[2]) : drinkMin;

  let userMin: number, userMax: number;
  if (userBudget === "₱500+") {
    userMin = 500;
    userMax = 10000;
  } else {
    const budgetMatch = userBudget.match(/₱(\d+)\s*-\s*₱(\d+)/);
    if (!budgetMatch) return true;
    userMin = parseInt(budgetMatch[1]);
    userMax = parseInt(budgetMatch[2]);
  }

  return drinkMin <= userMax && drinkMax >= userMin;
}

export function getRecommendations(preferences: DrinkPreferences): Drink[] {
  const { drinkType, mood, flavor, alcohol, budget } = preferences;

  const drinks: Drink[] =
    drinkType.toLowerCase() === "mixes"
      ? drinksData.drinks.mixes
      : drinksData.drinks.readyToDrink;

  const filteredDrinks = drinks.filter((drink) => {
    const moodMatch = matchesMood(drink.mood, mood);
    const flavorMatch = matchesFlavor(drink.flavorProfile, flavor);
    const alcoholMatch = matchesAlcohol(drink.alcoholLevel, alcohol);
    const budgetMatch = matchesBudget(drink.price, budget);

    return moodMatch && flavorMatch && alcoholMatch && budgetMatch;
  });

  if (filteredDrinks.length < 3) {
    const relaxedDrinks = drinks.filter((drink) => {
      const moodMatch = matchesMood(drink.mood, mood);
      const alcoholMatch = matchesAlcohol(drink.alcoholLevel, alcohol);
      const budgetMatch = matchesBudget(drink.price, budget);

      return moodMatch && alcoholMatch && budgetMatch;
    });

    if (relaxedDrinks.length >= 3) {
      return shuffleArray(relaxedDrinks).slice(0, 3);
    }

    const veryRelaxedDrinks = drinks.filter((drink) => {
      const alcoholMatch = matchesAlcohol(drink.alcoholLevel, alcohol);
      const budgetMatch = matchesBudget(drink.price, budget);

      return alcoholMatch && budgetMatch;
    });

    return shuffleArray(veryRelaxedDrinks).slice(0, 3);
  }

  return shuffleArray(filteredDrinks).slice(0, 3);
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
