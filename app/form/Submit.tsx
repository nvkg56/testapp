"use client";
import { useFormStatus } from "react-dom";

export default function Submit() {
  const { pending, data } = useFormStatus();
  console.log(`Data returned to SubmitForm: ${data?.get("name")}`);
  return (
    <div>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <button type="submit" name="submit" disabled={pending}>
        {pending ? "Submitting" : "Submit"}
      </button>
      <p>Data submitted: {data?.get("name")?.toString()}</p>
    </div>
  );
}
