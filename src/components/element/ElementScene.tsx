'use client';

import { Center } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import ElementMesh from "./ElementMesh";
import { ElementType } from "@/types/Element";

export default function Scene({ element }: { element: ElementType; }) {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} camera={{ position: [0, 5, 0], fov: 75 }} style={{ height: '100vh', width: '100vw' }}>
      <directionalLight position={[1, 1, 3]} intensity={2} />
      <Suspense fallback={null}>
        <Center>
          <ElementMesh
            element={element}
          />
        </Center>
      </Suspense>
    </Canvas>
  );
}
