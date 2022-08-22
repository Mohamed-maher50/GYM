import { Box } from "@mui/material";
import React, { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";
function Home() {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  console.log(bodyPart);

  return (
    <div>
      <Box>
        <HeroBanner />
        <SearchExercises
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
        <Exercises
          exercises={exercises}
          setExercises={setExercises}
          bodyPart={bodyPart}
        />
      </Box>
    </div>
  );
}

export default Home;
