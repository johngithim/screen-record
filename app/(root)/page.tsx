import React from "react";
import Header from "@/components/Header";

const Page = () => {
  return (
    <main className={"wrapper page"}>
      <Header title={"All videos"} subHeader={"public library"} />
      <h1 className={"font-karla"}>Welcome</h1>
    </main>
  );
};

export default Page;
