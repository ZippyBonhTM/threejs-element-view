'use client';

import ElementModal from "@/components/shared/ElementModal";
import dynamic from "next/dynamic";

const ElementScene = dynamic(() => import("@/components/element/ElementScene"), {
  ssr: false
});


export default function Home() {
  return (
    <main>
      <ElementScene />
      <ElementModal />
    </main>
  );
}
