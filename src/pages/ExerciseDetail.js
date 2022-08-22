import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

import { useParams } from "react-router-dom";
function ExerciseDetail() {
  const [exerciseDetail, setExerciseDetail] = useState("");
  const [exerciseVideos, setExerciseVideos] = useState("");
  const { id } = useParams();
  const [targetMuscleExercises, setTargetMuscleExersices] = useState([]);
  const [equipmentMuscleExersices, setEquipmentMuscleExersices] = useState([]);
  useEffect(() => {
    const fetchExercisesData = async () => {
      const youtube_url_search =
        "https://youtube-search-and-download.p.rapidapi.com/search";

      const exerciseDbUrl =
        "https://exercisedb.p.rapidapi.com/exercises/exercise/";
      const exerciseDetail = await fetchData(
        `${exerciseDbUrl}${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetail);
      const exerciseVideosData = await fetchData(
        `${youtube_url_search}?query=${exerciseDetail.name}`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideosData);
      const targetMuscleExercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/target/${exerciseDetail.target}`,
        exerciseOptions
      );
      setTargetMuscleExersices(targetMuscleExercisesData);
      const equipmentExercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/equipment/${exerciseDetail.equipment}`,
        exerciseOptions
      );
      setEquipmentMuscleExersices(equipmentExercisesData);
    };
    fetchExercisesData();
  }, [id]);
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentMuscleExersices={equipmentMuscleExersices}
      />
    </Box>
  );
}

export default ExerciseDetail;
