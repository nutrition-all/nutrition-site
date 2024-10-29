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
    <div className="p-4 bg-gray-50 rounded-lg shadow-md max-w-full">
      {selectedFoods.length > 0 ? (
        selectedFoods.map((food, index) => (
          <div
            key={food.id}
            className={`flex items-center py-4 ${
              index < selectedFoods.length - 1 ? "border-b border-gray-200" : ""
            }`}
          >
            <span className="flex-1 font-medium text-gray-700">{food.name}</span>
            <div className="flex items-center gap-2 flex-1">
              <input
                type="range"
                value={food.quantity}
                min={0}
                max={500}
                step={10}
                onChange={(e) =>
                  onUpdateQuantity(food.id, parseInt(e.target.value, 10))
                }
                className="w-full"
              />
              <div className="flex items-center space-x-1 text-gray-700 font-medium">
                <input
                  type="number"
                  value={food.quantity}
                  onChange={(e) =>
                    onUpdateQuantity(food.id, parseInt(e.target.value, 10))
                  }
                  min={0}
                  className="w-16 p-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span>g</span>
              </div>
            </div>
            <button
              onClick={() => onRemove(food.id)}
              className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Remover
            </button>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 py-4">
          Nenhum alimento selecionado.
        </p>
      )}
    </div>
  );
};

export default SelectedFoods;
