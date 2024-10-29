import React, { useState } from "react";
import { Food } from "./FoodList";

interface FoodSelectProps {
  foods: Food[];
  onAdd: (food: Food) => void;
}

const FoodSelect: React.FC<FoodSelectProps> = ({ foods, onAdd }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFood, setSelectedFood] = useState<Food | null>(null);

  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (food: Food) => {
    setSelectedFood(food);
    setIsOpen(false);
    setSearchTerm("");
    onAdd(food);
  };

  return (
    <div className="relative w-full max-w-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 text-left bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between items-center"
      >
        {selectedFood ? selectedFood.name : "Selecione um alimento"}
        <span className="ml-2 text-gray-500">
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="absolute w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          <input
            type="text"
            placeholder="Buscar alimento..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ul className="max-h-60 overflow-y-auto">
            {filteredFoods.map((food) => (
              <li
                key={food.id}
                onClick={() => handleSelect(food)}
                className="px-4 py-2 cursor-pointer hover:bg-blue-100"
              >
                {food.name}
              </li>
            ))}
            {filteredFoods.length === 0 && (
              <li className="px-4 py-2 text-gray-500">Nenhum alimento encontrado</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FoodSelect;
