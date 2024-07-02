"use client";

import React from "react";
import { useState, useEffect } from "react";

export default function FetchAPI() {
  const [count, setCount] = useState(0);
  const [action, setAction] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    document.title = `You Click ${count} times`;
    console.log("useEffect");
  }, [count]);

  useEffect(() => {
    fetch(`https://reqres.in/api/${action}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, [action]);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-96">
      <p className="fixed bottom-5 left-5">{scrollPosition}</p>
      <p>You click {count} time</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      <button onClick={() => setAction("users")}>User</button>
      <button onClick={() => setAction("comments")}>Comment</button>
      <button onClick={() => alert("You just click me")}>ALERT</button>
    </div>
  );
}
