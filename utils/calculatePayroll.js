export function handlePayrollCalculation(
  csvData,
  setTableData,
  setFilteredTableData,
  setValue,
  getValues
) {
  try {
    const initialValue = 0;
    const totalAmount = csvData.reduce(
      (accumulator, currentValue) =>
        Number.parseInt(accumulator)     + Number.parseInt(currentValue[3]),
      initialValue
    );
    csvData.map(e=>console.log(e[3]))
    setValue("totalPayrollRecords", csvData.length);
    setValue("totalPayrollAmount", totalAmount);
    setTableData(csvData.slice(1));
    setFilteredTableData(csvData.slice(1));
  } catch (error) {
    console.log(error);
  }
}
