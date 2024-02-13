import mongoose, { Schema } from "mongoose";
mongoose.connect(process.env.MONGODB_URI);
mongoose.promise = global.Promise;
const accountSchema = new Schema(
  {
    agreementId: String,
    agreementDetails: String,
  },
  {
    timestamps: true,
  }
);
const Account =
  mongoose.models.Account || mongoose.model("Account", accountSchema);
export async function getAllAccounts() {
  try {
    const results = await Account.find({});
    return { accounts: results, error: null };
  } catch (error) {
    console.log(error);
    return { error: "Failed To Fetch Accounts" };
  }
}
