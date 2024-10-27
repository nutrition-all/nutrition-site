// pages/food/[id].tsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Food } from "../FoodList";

const FoodDetailPage: React.FC = () => {
  const [food, setFood] = useState<Food | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const fetchFoodDetail = async () => {
      if (id) {
        const response = await fetch(`/data/taco_data_combined.json`);
        const data = await response.json();
        const foodItem = data.find(
          (item: any) => item.id === parseInt(id as string, 10)
        );
        setFood(foodItem);
      }
    };

    fetchFoodDetail();
  }, [id]);

  if (!food) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>{food.name}</h1>
      <p>Energia: {food.calories} kcal</p>
      <p>Proteína: {food.protein} g</p>
      <p>Lipídeos: {food.fat} g</p>
      <p>Carboidratos: {food.carbs} g</p>
      <p>Fibras: {food.fiber} g</p>
      <p>Cálcio: {food.calcium} mg</p>
      <p>Ferro: {food.iron} mg</p>
      <p>Saturados: {food.saturatedFat} g</p>
      <p>Monoinsaturados: {food.monounsaturatedFat} g</p>
      <p>Poliinsaturados: {food.polyunsaturatedFat} g</p>
      <p>Triptofano: {food.tryptophan} g</p>
      {/* Adicione todos os outros detalhes conforme necessário */}
    </div>
  );
};

export default FoodDetailPage;
