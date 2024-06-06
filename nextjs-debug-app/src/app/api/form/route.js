
import { NextResponse } from "next/server";

const formDataStore = [
  {
    firstName: "abideen",
    lastName: "ali ",
    email: "abideenali926+testing@gmail.com",
    mobileNo: "03122143926",
    id:1
  },
  
  {
    firstName: "sughra",
    lastName: "batool ",
    email: "abideenali926+testing@gmail.com",
    mobileNo: "03122143926",
    id:2
  },
  {
    firstName: "zain",
    lastName: "ali ",
    email: "abideenali926+testing@gmail.com",
    mobileNo: "03122143926",
    id:3
  },
];

export async function POST(req) {
  try {
    const formData = await req.json();
    console.log("Received form data:", formData);
    formDataStore.push(formData);
    console.log("Updated form data store:", formDataStore);

    return NextResponse.json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error processing form data:", error);
    return NextResponse.json(
      { message: "Error submitting form" },
      { status: 500 },
    );
  }
}

export async function GET() {
  console.log("Fetching stored form data:", formDataStore);
  return NextResponse.json(formDataStore);
}
