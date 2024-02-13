import styled from "@emotion/styled";
import { StepConnector, Typography, stepConnectorClasses } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

export const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 35,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#162645",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#96C11F",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
    margin: "0 20px 0 20px",
  },
}));

export const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  border: "1px solid",
  borderColor: "primary.main",
  zIndex: 1,
  color: "darkgray",
  width: 70,
  height: 70,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundColor: "#96C11F",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    color: "#fff",
  }),
  ...(ownerState.completed && {
    backgroundColor: "#96C11F",
    color: "#fff",
  }),
}));

export function ColorlibStepIcon(props) {
  const { active, completed, className } = props;
  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {completed ? (
        <DoneIcon />
      ) : (
        <Typography variant="h5">{props.icon}</Typography>
      )}
    </ColorlibStepIconRoot>
  );
}
