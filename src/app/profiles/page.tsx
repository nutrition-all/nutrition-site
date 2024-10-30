"use client"
import ProfileManager from "../(components)/ProfileManager";
import { NutrientProvider } from "../(contexto)/NutrientContext";

export default function ProfilesPage() {
  return (
    <NutrientProvider>
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-semibold mb-6">Gerenciar Perfis Nutricionais</h1>
    <ProfileManager
    />
  </div>
    </NutrientProvider>
  );
}