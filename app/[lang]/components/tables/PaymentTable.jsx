import * as React from "react";
import MUIDataTable from "mui-datatables";
import "./paymentTable.css";
import { Grid } from "@mui/material";
import PayrollsToolBar from "./PayrollsToolBar";

const columns = [
  "Payment Referance ",
  "Employee Name",
  "Account #",
  "Amount",
  "Address",
  "Payment Info",
  "Payment Status",
];

const data = [
  [
    "Y058975284123689",
    "Fadeel awad",
    "89284123689",
    "1.00",
    "Prepaid Test Fx Riyadh",
    "Salary",
    "Valid Transaction",
  ],
  [
    "Y058975284123689",
    "Fadeel awad",
    "89284123689",
    "1.00",
    "Prepaid Test Fx Riyadh",
    "Salary",
    "Valid Transaction",
  ],
  [
    "Y058975284123689",
    "Fadeel awad",
    "89284123689",
    "1.00",
    "Prepaid Test Fx Riyadh",
    "Salary",
    "Valid Transaction",
  ],
  [
    "Y058975284123689",
    "Fadeel awad",
    "89284123689",
    "1.00",
    "Prepaid Test Fx Riyadh",
    "Salary",
    "Valid Transaction",
  ],
  [
    "Y058975284123689",
    "Fadeel awad",
    "89284123689",
    "1.00",
    "Prepaid Test Fx Riyadh",
    "Salary",
    "Valid Transaction",
  ],
  [
    "Y058975284123689",
    "Fadeel awad",
    "89284123689",
    "1.00",
    "Prepaid Test Fx Riyadh",
    "Salary",
    "Valid Transaction",
  ],
];

const options = {
  filterType: false,
  elevation: 0,
  pagination: false,
  rowsPerPage: 5,
  border: "1px solid #111",
  search: false,
  sort: false,
  viewColumns: false,
  selectableRowsHeader: false,
  responsive: "vertical",
  selectableRows: "none",
  rowHover: false,
  customToolbar: () => {
    return <PayrollsToolBar />;
  },
  customFooter: () => <></>,
};

export default function PaymentTable() {
  return (
    <Grid container item id={"summaryTable"}>
      <MUIDataTable data={data} columns={columns} options={options} />
    </Grid>
  );
}
