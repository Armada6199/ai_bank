import { NextResponse } from "next/server";
import { getAllPayrolls } from "../../models/payroll";
export async function GET() {
  try {
    const params = req.nextUrl.searchParams;
    const agreenmentQuery = params.get("agreenmentId");
    const { payrolls, error } = await getAllPayrolls(agreenmentQuery);
    if (error) throw new Error(error);
    return NextResponse.json({ payrolls: payrolls }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error " + error }, { status: 500 });
  }
}
