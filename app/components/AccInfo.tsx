"use client";

import React from "react";
import { useState } from "react";

const initData = {
  name: "",
  city: "",
};
export default function AccInfo() {
  const [formData, setFormData] = useState(initData);
  console.log(formData);

  return (
    <div className="m-3">
      <h1 className="m-3 text-center text-4xl text-orange-600">
        UseState Hook
      </h1>
      <div>
        <input
          onChange={(Event) => {
            setFormData({
              ...formData,
              name: Event.target.value,
            });
          }}
          className="bg-slate-500"
          type="text"
          name="name"
          placeholder="Enter Name"
        />
        <select
          onChange={(Event) => {
            setFormData({
              ...formData,
              city: Event.target.value,
            });
          }}
          className="bg-slate-500"
          name="city"
        >
          <option value={""} id="">
            Select City
          </option>

          <option value={"SaiGon"} id="SaiGon">
            SaiGon
          </option>

          <option value={"Danang"} id="Danang">
            Danang
          </option>
        </select>
      </div>
      <div>
        <p>Name : {formData.name}</p>
        <p>City : {formData.city}</p>
      </div>
    </div>
  );
}
