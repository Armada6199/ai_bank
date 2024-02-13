import { NextResponse } from "next/server";
import { getAllAccounts } from "../../models/accounts";
export async function GET() {
  try {
    const { accounts, error } = await getAllAccounts();
    if (error) throw new Error(error);
    return NextResponse.json({ accounts: accounts }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error " + error }, { status: 500 });
  }
}
