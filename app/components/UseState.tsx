"use client";

import { useState } from "react";

export default function UseState() {
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`Your said ${message} to ${to}`);
    }, 3000);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col bg-slate-400 w-full h-52 rounded-lg p-6"
    >
      <label>
        To : {""}
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <textarea
        className="text-red-800 rounded-lg mt-5 w-1/2 h-40 "
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="flex mt-5 justify-start" type="submit">
        Send
      </button>
    </form>
  );
}
