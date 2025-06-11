'use client';

import dynamic from "next/dynamic";

const ElementScene = dynamic(() => import("@/components/element/ElementScene"), {
  ssr: false
});


export default function Home() {
  return (
    <main>
      <ElementScene />
    </main>
  );
}
