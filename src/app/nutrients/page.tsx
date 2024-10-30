"use client"
import { Box, Container } from "@mui/material";
import { NutrientProvider } from "../(contexto)/NutrientContext";
import ShowNutrients from "../(components)/ShowNutrients";

const App: React.FC = () => {
  return (
    <NutrientProvider>
      <Container sx={{ paddingTop: "100px", paddingBottom: "40px", maxWidth: "xl" }}>
        <Box>
          <ShowNutrients />
        </Box>
      </Container>
    </NutrientProvider>
  );
};


export default App;
