// "use client";

import MyLogo from "@/app/ui/MyLogo";
// import UseState from "@/app/components/UseState";
import Effect from "@/app/components/Effect";
// import Toggle from "@/app/components/Toggle";
import Abc from "@/app/components/Abc";
// import SubmitForm from "@/app/form/SubmitForm";
import HookForm from "@/app/form/HookForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 justify-stretch bg-blue-500 rounded-lg p-4 md:h-52">
        <MyLogo />
      </div>
      <div className="flex mt-5">
        {/* <Abc /> */}
        {/* <Effect /> */}
        {/* <SubmitForm /> */}
        <HookForm />
      </div>
    </main>
  );
}
