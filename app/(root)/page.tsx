import React from "react";
import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import Image from "next/image";
import { userInfo } from "node:os";
import { dummyCards } from "@/constants";

const Page = () => {
  return (
    <main className={"wrapper page"}>
      <Header title={"All videos"} subHeader={"public library"} />
      <section className={"video-grid"}>
        {dummyCards.map((card) => (
          <VideoCard key={card.id} {...card} />
        ))}
      </section>
    </main>
  );
};

export default Page;
