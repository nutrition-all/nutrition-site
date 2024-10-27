import React from "react";
import { Food } from "./FoodList";

interface FoodSelectProps {
  foods: Food[];
  onAdd: (food: Food) => void;
}

const FoodSelect: React.FC<FoodSelectProps> = ({ foods, onAdd }) => {
  return (
    <div>
      <select
        onChange={(e) => {
          const selectedId = parseInt(e.target.value, 10);
          const selectedFood = foods.find((f) => f.id === selectedId);
          if (selectedFood) {
            onAdd(selectedFood);
          }
        }}
      >
        <option value="">Selecione um alimento</option>
        {foods.map((food) => (
          <option key={food.id} value={food.id}>
            {food.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FoodSelect;
