import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { handlePayrollCalculation } from "/utils/calculatePayroll";
import { useContext, useState } from "react";
import { useFormContext } from "react-hook-form";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  formatFileSize,
  lightenDarkenColor,
  useCSVReader,
} from "react-papaparse";
import { agreementContext } from "@/hooks/AgreementProvider";

const GREY = "#CCC";
const GREY_LIGHT = "rgba(255, 255, 255, 0.4)";
const DEFAULT_REMOVE_HOVER_COLOR = "#A01919";
const REMOVE_HOVER_COLOR_LIGHT = lightenDarkenColor(
  DEFAULT_REMOVE_HOVER_COLOR,
  40
);
const GREY_DIM = "#686868";

const styles = {
  zone: {
    alignItems: "center",
    border: `2px dashed #96C11F`,
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    minHeight: "250px",
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
  progressBar: {
    bottom: 14,
    position: "absolute",
    width: "90%",
    paddingLeft: 10,
    paddingRight: 10,
  },
  zoneHover: {
    borderColor: GREY_DIM,
  },
};

export default function CSVReader() {
  const { CSVReader } = useCSVReader();
  const [zoneHover, setZoneHover] = useState(false);
  const [finishedUploading, setFinishedUploading] = useState(false);
  const { setValue, getValues } = useFormContext();
  const { setFilteredBenficaries, setBeneficaries } =
    useContext(agreementContext);

  return (
    <CSVReader
      onUploadAccepted={(results) => {
        setFinishedUploading(true);
        handlePayrollCalculation(
          results.data.slice(1, results.data.length - 1),
          setBeneficaries,
          setFilteredBenficaries,
          setValue,
          getValues
        );
        setZoneHover(false);
      }}
      onDragOver={(event) => {
        event.preventDefault();
        setZoneHover(true);
      }}
      onDragLeave={(event) => {
        event.preventDefault();
        setZoneHover(false);
      }}
    >
      {({
        getRootProps,
        acceptedFile,
        ProgressBar,
        getRemoveFileProps,
        Remove,
      }) => (
        <>
          <Box
            {...getRootProps()}
            sx={{ position: "relative" }}
            style={{ ...styles.zone }}
          >
            {acceptedFile ? (
              <>
                {finishedUploading ? (
                  <Grid
                    container
                    item
                    gap={4}
                    position={"relative"}
                    width={"100%"}
                    height={"100%"}
                    borderRadius={"20px"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Grid item>
                      <Typography variant="h6">{acceptedFile.name}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h6">
                        {formatFileSize(acceptedFile.size)}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} textAlign={"center"}>
                      <Typography variant="h6">
                        Beneficaries Uploaded Successfully
                      </Typography>
                    </Grid>
                  </Grid>
                ) : (
                  <div style={styles.progressBar}>
                    <ProgressBar />
                  </div>
                )}

                <Box
                  position={"absolute"}
                  top={10}
                  right={10}
                  {...getRemoveFileProps()}
                  onMouseOver={(event) => {
                    event.preventDefault();
                  }}
                  onMouseOut={(event) => {
                    event.preventDefault();
                  }}
                >
                  <DeleteIcon
                    onClick={() => {
                      setBeneficaries([]);
                      setFilteredBenficaries([]);
                      console.log("first");
                    }}
                    sx={{ color: "#EB5757", fontSize: 24, cursor: "pointer" }}
                  />
                </Box>
              </>
            ) : (
              <Box display="flex" flexDirection="column" alignItems="center">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <CloudUploadIcon
                    sx={{ fontSize: 120, color: "primary.main" }}
                  />
                </IconButton>
                <Typography variant="h6">
                  Upload Bulk of Beneficaries
                </Typography>
                <Typography variant="body1" fontWeight={500}>
                  Use CSV File
                </Typography>
              </Box>
            )}
          </Box>
        </>
      )}
    </CSVReader>
  );
}
