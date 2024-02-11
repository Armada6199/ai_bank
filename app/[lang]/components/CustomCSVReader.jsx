import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, IconButton, Typography } from "@mui/material";
import { handlePayrollCalculation } from "@utils/calculatePayroll";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import {
  formatFileSize,
  lightenDarkenColor,
  useCSVReader,
} from "react-papaparse";

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
  file: {
    background: "linear-gradient(to bottom, #EEE, #DDD)",
    borderRadius: 20,
    display: "flex",
    height: "100%",
    width: "100%",
    position: "relative",
    zIndex: 10,
    flexDirection: "column",
    justifyContent: "center",
  },
  info: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    paddingLeft: 10,
    paddingRight: 10,
  },
  size: {
    backgroundColor: GREY_LIGHT,
    borderRadius: 3,
    marginBottom: "0.5em",
    justifyContent: "center",
    display: "flex",
  },
  name: {
    backgroundColor: GREY_LIGHT,
    borderRadius: 3,
    fontSize: 12,
    marginBottom: "0.5em",
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
  default: {
    borderColor: GREY,
  },
  remove: {
    height: 23,
    position: "absolute",
    right: 6,
    top: 6,
    width: 23,
  },
};

export default function CSVReader({ setTableData, setFilteredTableData }) {
  const { CSVReader } = useCSVReader();
  const [zoneHover, setZoneHover] = useState(false);
  const [finishedUploading, setFinishedUploading] = useState(false);
  const { setValue, getValues } = useFormContext();

  const [removeHoverColor, setRemoveHoverColor] = useState(
    DEFAULT_REMOVE_HOVER_COLOR
  );
  return (
    <CSVReader
      onUploadAccepted={(results) => {
        // console.log("---------------------------");
        // console.log(results, "data");
        setFinishedUploading(true);
        handlePayrollCalculation(
          results.data.slice(1),
          setTableData,
          setFilteredTableData,
          setValue,
          getValues
        );
        // console.log("------------------------ss---");
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
          <div
            {...getRootProps()}
            style={{ ...styles.zone, ...(zoneHover && styles.zoneHover) }}
          >
            {acceptedFile ? (
              <>
                <div style={styles.file}>
                  <div style={styles.info}>
                    <span style={styles.size}>
                      {formatFileSize(acceptedFile.size)}
                    </span>
                    <span style={styles.name}>{acceptedFile.name}</span>
                  </div>
                  {finishedUploading ? (
                    <Box display={"flex"} my={4} justifyContent={"center"}>
                      <Typography variant="h6">
                        Beneficaries Uploaded Successfully
                      </Typography>
                    </Box>
                  ) : (
                    <div style={styles.progressBar}>
                      <ProgressBar />
                    </div>
                  )}

                  <div
                    {...getRemoveFileProps()}
                    style={styles.remove}
                    onMouseOver={(event) => {
                      event.preventDefault();
                      setRemoveHoverColor(REMOVE_HOVER_COLOR_LIGHT);
                    }}
                    onMouseOut={(event) => {
                      event.preventDefault();
                      setRemoveHoverColor(DEFAULT_REMOVE_HOVER_COLOR);
                    }}
                  >
                    <Remove color={removeHoverColor} />
                  </div>
                </div>
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
          </div>
        </>
      )}
    </CSVReader>
  );
}
