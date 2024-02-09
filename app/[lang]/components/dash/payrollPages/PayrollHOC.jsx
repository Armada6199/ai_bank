import React from "react";
import PaymentAgreements from "./PaymentAgreements";
import PayrollDetails from "./payrollDetails";

function PayrollHOC({ activeStep }) {
  switch (activeStep) {
    case 0:
      return <PaymentAgreements />;
    case 1:
      return <PayrollDetails />;
  }
}

export default PayrollHOC;
