import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import icon from "../assets/icons/gym.png";
function BodyParts({ item, setBodyPart, bodyPart }) {
  return (
    <Stack
      type="button"
      alignItems={"center"}
      justifyContent={"center"}
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({
          top: 1800,
          left: 100,
          behavior: "smooth",
        });
      }}
    >
      <img
        src={icon}
        alt={""}
        style={{ width: "40px", height: "40px" }}
        loading="lazy"
      />
      <Typography fontSize="24px" fontWeight="bold" color="#3A1212">
        {item}
      </Typography>
    </Stack>
  );
}

export default BodyParts;
