'use client';

// import { useAnimations, useGLTF } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";


export default function ElementMesh() {
  const { scene } = useGLTF("/assets/block.glb");
  // const { actions } = useAnimations(animations, scene);
  return (
    <group>
      <primitive object={scene}/>
    </group>
  );
}