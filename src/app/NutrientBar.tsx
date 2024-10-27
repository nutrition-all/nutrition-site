import React from "react";
import { Food } from "./FoodList";

type NutrientRange = {
  min: number;
  max: number;
};

type NutrientRanges = {
  [K in keyof Omit<Food, "id" | "name">]: NutrientRange;
};

export const nutrientRanges: NutrientRanges = {
  calories: { min: 1500, max: 2500 },
  protein: { min: 50, max: 100 },
  carbs: { min: 225, max: 325 },
  fat: { min: 44, max: 78 },
  cholesterol: { min: 0, max: 300 },
  fiber: { min: 25, max: 38 },
  ashes: { min: 0, max: 10 },
  calcium: { min: 800, max: 1300 },
  magnesium: { min: 310, max: 420 },
  manganese: { min: 1.8, max: 2.3 },
  phosphorus: { min: 700, max: 1250 },
  iron: { min: 8, max: 18 },
  sodium: { min: 1500, max: 2300 },
  potassium: { min: 3500, max: 4700 },
  copper: { min: 0.9, max: 1.3 },
  zinc: { min: 8, max: 11 },
  retinol: { min: 700, max: 900 },
  re: { min: 700, max: 900 },
  rae: { min: 700, max: 900 },
  thiamine: { min: 1.1, max: 1.2 },
  riboflavin: { min: 1.1, max: 1.3 },
  pyridoxine: { min: 1.3, max: 2.0 },
  niacin: { min: 14, max: 16 },
  vitaminC: { min: 75, max: 90 },
  saturatedFat: { min: 0, max: 20 },
  monounsaturatedFat: { min: 0, max: 20 },
  polyunsaturatedFat: { min: 0, max: 20 },
  fat12_0: { min: 0, max: 1 },
  fat14_0: { min: 0, max: 1 },
  fat16_0: { min: 0, max: 1 },
  fat18_0: { min: 0, max: 1 },
  fat20_0: { min: 0, max: 1 },
  fat22_0: { min: 0, max: 1 },
  fat24_0: { min: 0, max: 1 },
  fat14_1: { min: 0, max: 1 },
  fat16_1: { min: 0, max: 1 },
  fat18_1: { min: 0, max: 1 },
  fat20_1: { min: 0, max: 1 },
  fat18_2n6: { min: 0, max: 1 },
  fat18_3n3: { min: 0, max: 1 },
  fat20_4: { min: 0, max: 1 },
  fat20_5: { min: 0, max: 1 },
  fat22_5: { min: 0, max: 1 },
  fat22_6: { min: 0, max: 1 },
  fat18_1t: { min: 0, max: 1 },
  fat18_2t: { min: 0, max: 1 },
  tryptophan: { min: 0, max: 1 },
  threonine: { min: 0, max: 1 },
  isoleucine: { min: 0, max: 1 },
  leucine: { min: 0, max: 1 },
  lysine: { min: 0, max: 1 },
  methionine: { min: 0, max: 1 },
  cystine: { min: 0, max: 1 },
  phenylalanine: { min: 0, max: 1 },
  tyrosine: { min: 0, max: 1 },
  valine: { min: 0, max: 1 },
  arginine: { min: 0, max: 1 },
  histidine: { min: 0, max: 1 },
  alanine: { min: 0, max: 1 },
  asparticAcid: { min: 0, max: 1 },
  glutamicAcid: { min: 0, max: 1 },
  glycine: { min: 0, max: 1 },
  proline: { min: 0, max: 1 },
  serine: { min: 0, max: 1 },
};

interface NutrientBarProps {
  name: string;
  value: number;
  min: number;
  max: number;
}
const NutrientBar: React.FC<NutrientBarProps> = ({ name, value, min, max }) => {
  const clampedValue = Math.max(0, Math.min(value, max));
  const percentage = ((clampedValue - 0) / (max - 0)) * 100;

  const actualPosition = ((value - 0) / (max - 0)) * 100;
  const valueBeyondMax = value > max;

  let barColor = "green";
  if (value === 0) {
    barColor = "red";
  } else if (value < min) {
    barColor = "orange";
  } else if (valueBeyondMax) {
    barColor = "red";
  }

  return (
    <div className="nutrient-bar">
      <span>{name}</span>
      <div className="bar-container">
        <div
          className="bar"
          style={{
            width: `${Math.min(percentage, 100)}%`,
            backgroundColor: barColor,
          }}
        />
        {valueBeyondMax && (
          <div
            className="bar-excess"
            style={{
              width: `${Math.max(0, actualPosition - 100)}%`,
              backgroundColor: "red",
            }}
          />
        )}
        <div
          className="marker"
          style={{ left: `${(min / max) * 100}%`, backgroundColor: "blue" }}
        />
        <div
          className="marker"
          style={{
            left: `${Math.min(actualPosition, 100)}%`,
            backgroundColor: "black",
          }}
        />
      </div>
      <div className="bar-values">
        <span className="bar-zero">0</span>
        <span className="bar-min" style={{ left: `${(min / max) * 100}%` }}>
          {min.toFixed(2)}
        </span>
        <span className="bar-max">{max.toFixed(2)}</span>
      </div>
      <div
        className="bar-current"
        style={{
          left: `${Math.min(actualPosition, 100)}%`,
          color: valueBeyondMax ? "red" : "black",
        }}
      >
        {value.toFixed(2)}
      </div>
    </div>
  );
};

export default NutrientBar;
