export const glassmorphismStyle = {
  background: "rgba( 255, 255, 255, 1 )",
  boxShadow: "0 2px 10px 0 rgba( 0, 7, 7, 0.09 )",
  backdropFilter: "blur( 6px )",
  borderRadius: "10px ",
  border: "1px solid rgba( 255, 255, 255, 0.18 )",
};
export const stepStyle = {
  "& .MuiStepConnector-line": {
    borderColor: "secondary.main",
  },
  "& .Mui-disabled": {
    fontSize: "30px",
  },

  "& .Mui-active": {
    "&.MuiStepIcon-root": {
      color: "#fff",
      border: "1px solid",
      borderColor: "primary.main",
      borderRadius: "50%",
    },
  },

  "& .Mui-completed": {
    "&.MuiStepIcon-root": {
      color: "primary.main",
    },
    "& .MuiStepConnector-line": {
      borderColor: "secondary.main",
    },
  },
};
