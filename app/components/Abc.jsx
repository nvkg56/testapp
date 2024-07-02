"use client";
import React from "react";

export default function Abc() {
  const tab = ["Post", "Get", "Put", "Delete"];
  return (
    <div>
      {tab.map((item, index) => {
        return (
          <button className="bg-blue-400 mx-1 px-2 rounded " key={index}>
            {item}
          </button>
        );
      })}
    </div>
  );
}
