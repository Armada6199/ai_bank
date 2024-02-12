import mongoose, { Schema } from "mongoose";
mongoose.connect(process.env.MONGODB_URI);
mongoose.promise = global.Promise;
const agreenmentSchema = new Schema(
  {
    agreenmentId: Number,
    agreementDetails: String,
  },
  {
    timestamps: true,
  }
);
const Agreenments =
  mongoose.models.Agreenment || mongoose.model("Agreenment", agreenmentSchema);
export async function getAllAgreenments() {
  try {
    const results = await Agreenments.find({});
    return { agreenments: results, error: null };
  } catch (error) {
    console.log(error);
    return { error: "Failed To Fetch Agreenments" };
  }
}
