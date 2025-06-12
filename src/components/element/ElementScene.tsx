'use client';

import { Center } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import ElementMesh from "./ElementMesh";

export default function Scene() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} camera={{ position: [0, 5, 0], fov: 75 }} style={{ height: '100vh', width: '100vw' }}>
      <directionalLight position={[1, 1, 3]} intensity={2} />
      <Suspense fallback={null}>
        <Center>
          <ElementMesh />
        </Center>
      </Suspense>
    </Canvas>
  );
}
