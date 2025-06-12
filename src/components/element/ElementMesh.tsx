'use client';

import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { AnimationAction, AnimationClip, Group, MathUtils } from "three";
import ElectronShellRenderer from "./ElectronShellRenderer";


export default function ElementMesh() {
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { damping: 1, stiffness: 20 });
  const { scene, animations } = useGLTF("/block.glb");
  const { actions } = useAnimations<AnimationClip>(animations, scene);
  const group = useRef<Group>(null);

  useFrame(() => {
    group.current?.rotateY(MathUtils.degToRad(0.2));

    Object.keys(actions).forEach((key) => {
      const action = actions[key] as AnimationAction;
      action.play().paused = true;
      action.time = spring.get();
    });
  });
  return (
    <group
      onPointerDown={() => motionVal.set(1)}
      onPointerUp={() => motionVal.set(0)}
      ref={group}
    >
      <ElectronShellRenderer />
    </group>
  );
}
