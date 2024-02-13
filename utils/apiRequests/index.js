import axios from "axios";

export async function filterPayrolls(
  agreements,
  setFilteredPayrolls,
  agreement
) {
  try {
    if (agreement.toLowerCase() == "all") {
      setFilteredPayrolls(handleExtractPayrolls(agreements));
    } else {
      const newAgreement = agreements.filter((e) => e.agreementId == agreement);
      const payrolls = handleExtractPayrolls(newAgreement);
      console.log("calleds");
      setFilteredPayrolls(payrolls);
    }
  } catch (error) {
    console.log(error);
  }
}
export const handleGetAllAgreements = async (
  setPayrollData,
  setFilteredPayrolls,
  setAgreements
) => {
  try {
    const result = await axios.get(`/api/agreements`);
    setAgreements(result.data.agreements);
    const payrolls = handleExtractPayrolls(result.data.agreements);
    setPayrollData(payrolls);
    setFilteredPayrolls(payrolls);
  } catch (error) {
    console.log(error);
  }
};
export function handleExtractPayrolls(agreements) {
  try {
    const payrolls = [];
    agreements.map((e) => {
      e.payrolls.map((payroll) => payrolls.push(payroll));
    });
    return payrolls;
  } catch (error) {
    console.log(error);
  }
}
export function handleFilterStatus(status, agreements, setFilteredPayrolls) {
  try {
    if (status.toLowerCase() == "all requests") {
      setFilteredPayrolls(handleExtractPayrolls(agreements));
    } else {
      const payrolls = handleExtractPayrolls(agreements);
      const filteredPayrolls = payrolls.filter(
        (e) => e.status.toLowerCase() === status.toLowerCase()
      );
      //   console.log("calleds", filteredPayrolls);
      setFilteredPayrolls(filteredPayrolls);
    }
  } catch (error) {
    console.log(error);
  }
}
export async function handleFetchAccounts(setAccounts) {
  try {
    const result = await axios.get("/api/accounts");
    setAccounts(result.data.accounts);
  } catch (error) {
    console.log(error);
  }
}
