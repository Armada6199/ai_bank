import React from "react";
import PaymentAgreements from "../pages/PaymentAgreements";
import PayrollDetails from "../pages/payrollDetails";
import PayrollSummary from "../pages/PayrollSummary";

function PayrollHOC({ activeStep }) {
  switch (activeStep) {
    case 0:
      return <PaymentAgreements />;
    case 1:
      return <PayrollDetails />;
    case 2:
      return <PayrollSummary />;
  }
}

export default PayrollHOC;
