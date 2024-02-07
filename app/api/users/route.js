import { NextResponse } from "next/server";
import { handleSearchUser, handleCreatUser } from "../ldap";
export async function POST(req) {
  try {
    const body = await req.json();
    const userData = body;
    console.log(userData);
    if (!userData.email || !userData.accountName || !userData.userType) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }
    // const isDuplicateEmail = await handleSearchUser(userData.email);
    // if (isDuplicateEmail)
    //   return NextResponse.json(
    //     { message: "Email already exists" },
    //     { status: 409 }
    //   );
    const createdUser = await handleCreatUser(userData);
    console.log(createdUser);
    return NextResponse.json({ message: "User Created" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error " + error }, { status: 500 });
  }
}
