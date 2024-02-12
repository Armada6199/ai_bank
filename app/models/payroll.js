import mongoose, { Schema } from "mongoose";
mongoose.connect(process.env.MONGODB_URI);
mongoose.promise = global.Promise;
const payrollSchema = new Schema(
  {
    requestId: Number,
    payrollAmount: Number,
    fundingAccount: Number,
    processPayrollOn: Date,
    status: String,
  },
  {
    timestamps: true,
  }
);
const Payroll =
  mongoose.models.Payroll || mongoose.model("Payroll", payrollSchema);

export async function getAllPayrolls(agreenmentId) {
  try {
    console.log(Payroll);
    if (agreenmentId) {
      const results = await Payroll.find({ agreenmentId: agreenmentId });
      return { payrolls: results, error: null };
    } else {
      const results = await Payroll.find({});
      return { payrolls: results, error: null };
    }
  } catch (error) {
    console.log(error);
    return { error: "Failed To Fetch Payrolls" };
  }
}
