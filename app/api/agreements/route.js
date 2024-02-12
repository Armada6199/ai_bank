import { NextResponse } from "next/server";
import { getAllAgreements } from "../../models/agreement";
export async function GET() {
  try {
    const { agreements, error } = await getAllAgreements();
    if (error) throw new Error(error);
    return NextResponse.json({ agreements: agreements }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error " + error }, { status: 500 });
  }
}
