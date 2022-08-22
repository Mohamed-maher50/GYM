import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import BodyParts from "./BodyParts";
import ExerciseCard from "./ExerciseCard";
import LeftArrowImg from "../assets/icons/left-arrow.png";
import RightArrowImg from "../assets/icons/right-arrow.png";
import BodyPart from "./BodyParts";
function HorizontalScrollbar({ data, bodyPart, setBodyPart, bodyParts }) {
  const RightArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={RightArrowImg} alt="left-arrow" />
      </Typography>
    );
  };
  const LeftArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <img src={LeftArrowImg} alt="left-arrow" />
      </Typography>
    );
  };
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {bodyParts ? (
            <BodyPart
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
}

export default HorizontalScrollbar;
