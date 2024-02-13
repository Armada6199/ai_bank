import { Grid } from "@mui/material";
import "/styles/styles.css";
import PayrollHeader from "../dash/payroll/components/Header";

import CustomCSVReader from "../CustomCSVReader";
function BulkUpload(props) {
  const { closeBulkModal } = props;
  return (
    <Grid container alignItems={"flex-start"} gap={8} justifyContent={"center"}>
      <PayrollHeader
        closeModal={closeBulkModal}
        title={"Upload Beneficiaries"}
      />
      <Grid container item justifyContent={"center"} p={4}>
        <Grid item xs={6}>
          <CustomCSVReader />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default BulkUpload;
