import React from "react";
import PaymentAgreements from "./PaymentAgreements";
import PayrollDetails from "./payrollDetails";
import PayrollSummary from "./PayrollSummary";

function PayrollHOC({ activeStep }) {
  switch (activeStep) {
    case 0:
      return <PaymentAgreements />;
    case 1:
      return <PayrollDetails />;
      case 2: return <PayrollSummary/>
  }
}

export default PayrollHOC;
