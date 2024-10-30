"use client"
import { NutrientProvider } from "./(contexto)/NutrientContext";
import ShowNutrients from "./nutrients/ShowNutrients";
import ProfilesPage from "./profiles/page";

const App: React.FC = () => {

  return (
    <NutrientProvider>
      <ShowNutrients/>
    </NutrientProvider>
  );
};

export default App;
