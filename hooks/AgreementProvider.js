"use client";

import {
  handleFetchAccounts,
  handleGetAllAgreements,
} from "../utils/apiRequests";

const { createContext, useState, useEffect } = require("react");

export const agreementContext = createContext();
const AgreementProvider = ({ children, lang }) => {
  const [payrollData, setPayrollData] = useState([]);
  const [filteredPayrolls, setFilteredPayrolls] = useState(payrollData);
  const [agreements, setAgreements] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [beneficaries, setBeneficaries] = useState([]);
  const [filterdBenficaries, setFilteredBenficaries] = useState(beneficaries);
  useEffect(() => {
    handleFetchAccounts(setAccounts);
    handleGetAllAgreements(setPayrollData, setFilteredPayrolls, setAgreements);
  }, []);
  return (
    <agreementContext.Provider
      value={{
        payrollData,
        setPayrollData,
        filteredPayrolls,
        setFilteredPayrolls,
        agreements,
        setAgreements,
        accounts,
        beneficaries,
        setBeneficaries,
        filterdBenficaries,
        setFilteredBenficaries,
      }}
    >
      {children}
    </agreementContext.Provider>
  );
};
export default AgreementProvider;
