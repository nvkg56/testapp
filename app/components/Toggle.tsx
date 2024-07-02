"use client";

import React from "react";
import { useState } from "react";
import AccInfo from "@/app/components/AccInfo";

export default function Toggle() {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      {toggle && <AccInfo />}
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
    </div>
  );
}
