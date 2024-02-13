export function handlePayrollCalculation(
  csvData,
  setBeneficaries,
  setFilteredBenficaries,
  setValue,
  getValues
) {
  try {
    let totalPayroll = 0;
    csvData.map((e) => (totalPayroll += Number.parseInt(e[3])));
    setValue("totalPayrollRecords", csvData.length);
    setValue("totalPayrollAmount", totalPayroll);
    setBeneficaries(csvData.slice(1));
    setFilteredBenficaries(csvData.slice(1));
  } catch (error) {
    console.log(error);
  }
}
