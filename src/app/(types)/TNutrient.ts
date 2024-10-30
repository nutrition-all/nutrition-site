import { SelectedFood } from "./TFood";

export type NutrientRange = {
    min: number;
    max: number;
};
  
  export type NutrientRanges = {
    [K in keyof Omit<SelectedFood, "id" | "name" | "quantity">]: NutrientRange;
};

export type NutritionTotals = Record<keyof Omit<SelectedFood, "id" | "name">, number>;