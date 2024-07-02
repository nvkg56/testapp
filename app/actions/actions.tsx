"use server";

export async function GetStatus(formData: FormData) {
  await new Promise((res) => setTimeout(res, 2000));
  console.log("FormStatus from Server Component");
  console.log(`You submitted: ${formData.get("name")}`);
}
