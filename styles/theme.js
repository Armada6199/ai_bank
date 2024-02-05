import { createTheme } from "@mui/material";
import { DM_Sans } from "next/font/google";
const dmFont = DM_Sans({
  weight: ["100", "200", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});
const theme = (dir) =>
  createTheme({
    direction: dir,
    components: {
      // MuiButton: {
      //   styleOverrides: {
      //     root: {
      //       height: "45px",
      //       ":hover": {
      //         borderColor: "#dd752d",
      //       },
      //     },
      //   },
      // },
    },
    typography: {
      fontFamily: [dmFont.style.fontFamily, "sans-serif"].join(","),
      typography: {
        allVariants: {
          color: "#162645",
        },
      },
    },
    palette: {
      primary: {
        main: "#96C11F",
      },
      secondary: {
        main: "#162645",
      },
      background: {
        default: "#F3F3F3",
      },
    },
  });

export default theme;
