import mongoose, { Schema } from "mongoose";
import Payroll from "./payroll";
mongoose.connect(process.env.MONGODB_URI);
mongoose.promise = global.Promise;
const agreementSchema = new Schema(
  {
    agreementId: String,
    agreementDetails: String,
    payrolls: [{ type: Schema.Types.ObjectId, ref: "Payroll" }],
  },
  {
    timestamps: true,
  }
);
const Agreement =
  mongoose.models.Agreement || mongoose.model("Agreement", agreementSchema);
export async function getAllAgreements() {
  try {
    const results = await Agreement.find({}).populate("payrolls");
    return { agreements: results, error: null };
  } catch (error) {
    console.log(error);
    return { error: "Failed To Fetch Agreement" };
  }
}
// const payrolls = [
//   [
//     {
//       requestId: 1,
//       payrollAmount: 5000,
//       fundingAccount: 123456789,
//       processPayrollOn: "2024-02-12T12:00:00.000Z",
//       status: "Pending",
//     },
//     {
//       requestId: 2,
//       payrollAmount: 7000,
//       fundingAccount: 987654321,
//       processPayrollOn: "2024-02-13T14:30:00.000Z",
//       status: "Approved",
//     },
//     {
//       requestId: 3,
//       payrollAmount: 6000,
//       fundingAccount: 456789012,
//       processPayrollOn: "2024-02-14T10:15:00.000Z",
//       status: "Pending",
//     },
//     {
//       requestId: 4,
//       payrollAmount: 8000,
//       fundingAccount: 789012345,
//       processPayrollOn: "2024-02-15T18:45:00.000Z",
//       status: "Approved",
//     },
//     {
//       requestId: 5,
//       payrollAmount: 5500,
//       fundingAccount: 567890123,
//       processPayrollOn: "2024-02-16T09:30:00.000Z",
//       status: "Pending",
//     },
//   ],
//   [
//     {
//       requestId: 6,
//       payrollAmount: 7200,
//       fundingAccount: 234567890,
//       processPayrollOn: "2024-02-17T15:00:00.000Z",
//       status: "Approved",
//     },
//     {
//       requestId: 7,
//       payrollAmount: 4800,
//       fundingAccount: 890123456,
//       processPayrollOn: "2024-02-18T11:45:00.000Z",
//       status: "Pending",
//     },
//     {
//       requestId: 8,
//       payrollAmount: 6700,
//       fundingAccount: 345678901,
//       processPayrollOn: "2024-02-19T17:15:00.000Z",
//       status: "Approved",
//     },
//     {
//       requestId: 9,
//       payrollAmount: 5900,
//       fundingAccount: 678901234,
//       processPayrollOn: "2024-02-20T08:00:00.000Z",
//       status: "Pending",
//     },
//     {
//       requestId: 10,
//       payrollAmount: 7400,
//       fundingAccount: 123456789,
//       processPayrollOn: "2024-02-21T13:30:00.000Z",
//       status: "Approved",
//     },
//   ],
//   [
//     {
//       requestId: 11,
//       payrollAmount: 6200,
//       fundingAccount: 987654321,
//       processPayrollOn: "2024-02-22T09:15:00.000Z",
//       status: "Pending",
//     },
//     {
//       requestId: 12,
//       payrollAmount: 7800,
//       fundingAccount: 456789012,
//       processPayrollOn: "2024-02-23T16:45:00.000Z",
//       status: "Approved",
//     },
//     {
//       requestId: 13,
//       payrollAmount: 5600,
//       fundingAccount: 789012345,
//       processPayrollOn: "2024-02-24T10:30:00.000Z",
//       status: "Pending",
//     },
//     {
//       requestId: 14,
//       payrollAmount: 7300,
//       fundingAccount: 567890123,
//       processPayrollOn: "2024-02-25T14:00:00.000Z",
//       status: "Approved",
//     },
//     {
//       requestId: 15,
//       payrollAmount: 5000,
//       fundingAccount: 234567890,
//       processPayrollOn: "2024-02-26T12:45:00.000Z",
//       status: "Pending",
//     },
//     {
//       requestId: 16,
//       payrollAmount: 6900,
//       fundingAccount: 890123456,
//       processPayrollOn: "2024-02-27T18:15:00.000Z",
//       status: "Approved",
//     },
//     {
//       requestId: 17,
//       payrollAmount: 6000,
//       fundingAccount: 345678901,
//       processPayrollOn: "2024-02-28T11:00:00.000Z",
//       status: "Pending",
//     },
//     {
//       requestId: 18,
//       payrollAmount: 7900,
//       fundingAccount: 678901234,
//       processPayrollOn: "2024-02-29T16:30:00.000Z",
//       status: "Approved",
//     },
//     {
//       requestId: 19,
//       payrollAmount: 6100,
//       fundingAccount: 123456789,
//       processPayrollOn: "2024-03-01T10:15:00.000Z",
//       status: "Pending",
//     },
//     {
//       requestId: 20,
//       payrollAmount: 7700,
//       fundingAccount: 987654321,
//       processPayrollOn: "2024-03-02T17:00:00.000Z",
//       status: "Approved",
//     },
//   ],
// ];
// async function createAgreement() {
//   [
//     {
//       agreementId: "A123",
//       agreementDetails: "Agreement details for A123",
//     },
//     {
//       agreementId: "A234",
//       agreementDetails: "Agreement details for A234",
//     },
//     {
//       agreementId: "A345",
//       agreementDetails: "Agreement details for A345",
//     },
//   ].map(async (e, index) => {
//     const createdAgreement = await Agreement.create(e);
//     payrolls[index].map(async (e) => {
//       const createdPayroll = await Payroll.create(e);
//       createdAgreement.payrolls.push(createdPayroll);
//       console.log(e);
//       await createdAgreement.save();
//     });
//   });

//   try {
//   } catch (error) {
//     console.log(error);
//   }
// }
// createAgreement();
// async function createPayroll() {
//   try {
//     const created = Payroll.create();
//   } catch (error) {
//     console.log(error);
//   }
// }
