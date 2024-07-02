"use client";
import { GetStatus } from "../actions/actions";
import Submit from "./Submit";
import { useRef } from "react";

export default function SubmitForm() {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <div>
      <form
        ref={ref}
        action={async (formData) => {
          await GetStatus(formData);
          if (ref.current) {
            ref.current.reset();
          }
        }}
      >
        <Submit />
      </form>
    </div>
  );
}
