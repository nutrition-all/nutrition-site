import React from "react";
import { NutrientRanges } from "../(types)/TNutrient";
import { Box, Typography, LinearProgress } from "@mui/material";



interface NutrientBarProps {
  name: string;
  value: number;
  min: number;
  max: number;
}
const NutrientBar: React.FC<NutrientBarProps> = ({ name, value, min, max }) => {
  const percentage = Math.min(100, ((value - 0) / (max - 0)) * 100);
  const minPosition = ((min - 0) / (max - 0)) * 100;

  const getColor = () => {
    if (value === 0) return "error.main";
    if (value < min) return "warning.main";
    if (value > max) return "error.main";
    return "success.main";
  };

  return (
    <Box>
      <Typography variant="subtitle2" gutterBottom>
        {name}: {value.toFixed(2)}g
      </Typography>
      <Box position="relative">
        <LinearProgress
          variant="determinate"
          value={percentage}
          sx={{
            height: 10,
            borderRadius: 5,
            backgroundColor: "grey.300",
            "& .MuiLinearProgress-bar": {
              bgcolor: getColor(),
            },
          }}
        />
        <Box
          position="absolute"
          top={0}
          left={`${minPosition}%`}
          height="100%"
          width="2px"
          bgcolor="blue.500"
          sx={{ transform: "translateX(-50%)" }}
        />
      </Box>

      <Box display="flex" justifyContent="space-between" mt={1}>
        <Typography variant="caption">0</Typography>
        <Typography variant="caption">{min.toFixed(2)}g</Typography>
        <Typography variant="caption">{max.toFixed(2)}g</Typography>
      </Box>
    </Box>
  );
};

export default NutrientBar;
