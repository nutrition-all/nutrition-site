"use client"
import { Box, Container, Typography } from "@mui/material";
import ProfileManager from "../(components)/ProfileManager";
import { NutrientProvider } from "../(contexto)/NutrientContext";

export default function ProfilesPage() {
  return (
    <NutrientProvider>
        <Container>
          <Box my={4}>
            <Typography variant="h4" align="center" gutterBottom>
              Sistema de Nutrição
            </Typography>
          <div className="container mx-auto p-4">
            <h1 className="text-2xl font-semibold mb-6">Gerenciar Perfis Nutricionais</h1>
            <ProfileManager
            />
          </div>
         </Box>
         </Container>
        </NutrientProvider>
  );
}
