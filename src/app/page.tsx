"use client";
import Chat from "@/components/app/Chat";
import Head from "@/components/app/Head";
import Match from "@/components/app/match";
import PointerMeta from "@/components/app/PointerMeta";
import { useState } from "react";
import Modals from "@/components/app/modal";

export default function Home() {
  const [isChatOpen, setChatOpen] = useState(true)
  return (
    <div className="w-full h-[100vh] relative">
      <Head isChatOpen={isChatOpen} setChatOpen={setChatOpen} />
      <div className="h-full grid grid-cols-1 grid-rows-[minmax(0,1fr)_auto_auto] sm:grid-cols-[auto_minmax(0,1fr)] sm:grid-rows-[minmax(0,1fr)_auto] xl:grid-cols-[auto_minmax(0,1fr)_auto]">
        <PointerMeta />
        <Match />
        {isChatOpen && <Chat />}
      </div>
      <Modals />
    </div>
  );
}
