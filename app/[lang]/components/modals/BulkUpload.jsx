"use client";
import { Grid } from "@mui/material";
import "/styles/styles.css";
import PayrollHeader from "../dash/payroll/components/Header";

import CustomCSVReader from "../CustomCSVReader";
function BulkUpload(props) {
  const { closeBulkModal, setFilteredTableData, setTableData } = props;

  return (
    <Grid container alignItems={"flex-start"} gap={8} justifyContent={"center"}>
      <PayrollHeader
        closeBulkModal={closeBulkModal}
        title={"Upload Beneficiaries"}
      />
      <Grid container item justifyContent={"center"} p={4}>
        <Grid item xs={6}>
          <CustomCSVReader
            setFilteredTableData={setFilteredTableData}
            setTableData={setTableData}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default BulkUpload;
