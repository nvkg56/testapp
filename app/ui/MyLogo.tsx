import React from "react";
import { PowerIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";

export default function MyLogo() {
  return (
    <div
      className={`${lusitana.className} antialiased flex flex-row items-center mx-6`}
    >
      <PowerIcon className="h-12 w-12" />
      <p className="text-3xl mx-6 md:text-4xl">Kengon Home</p>
    </div>
  );
}
