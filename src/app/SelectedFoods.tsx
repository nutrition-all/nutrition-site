import React from "react";
import { SelectedFood } from "./FoodList";

interface SelectedFoodsProps {
  selectedFoods: SelectedFood[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

const SelectedFoods: React.FC<SelectedFoodsProps> = ({
  selectedFoods,
  onUpdateQuantity,
  onRemove,
}) => {
  return (
    <div>
      {selectedFoods.map((food) => (
        <div key={food.id}>
          <span>{food.name}</span>
          <input
            type="number"
            value={food.quantity}
            onChange={(e) =>
              onUpdateQuantity(food.id, parseInt(e.target.value, 10))
            }
            min={0}
          />
          <button onClick={() => onRemove(food.id)}>Remover</button>
        </div>
      ))}
    </div>
  );
};

export default SelectedFoods;
