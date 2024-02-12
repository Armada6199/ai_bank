import { NextResponse } from "next/server";
import { getAllAgreenments } from "../../models/agreenments";
export async function GET() {
  try {
    const { agreenments, error } = await getAllAgreenments();
    if (error) throw new Error(error);
    return NextResponse.json({ agreenments: agreenments }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error " + error }, { status: 500 });
  }
}
