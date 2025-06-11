import { useRef } from 'react';
import { Sphere, Torus } from '@react-three/drei';
import { Mesh } from 'three';
import convertElectronConfig from "@/utils/convertElectronConfig"; // Adjust path to your function's file

interface ElectronShellProps {
  electronConfig: string;
}

function ElectronShellRenderer({ electronConfig }: ElectronShellProps) {
  // Type electronRefs as an array of Mesh objects
  const electronRefs = useRef<Mesh[]>([]);

  // Use the imported convertElectronConfig function
  const shells = convertElectronConfig(electronConfig);

  return (
    <>
      {/* Nucleus (red sphere) */}
      <Sphere args={[0.5, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial color="red" />
      </Sphere>
      {/* Render orbits and electrons for each shell */}
      {shells.map((electronCount, shellIndex) => {
        const radius = 2 + shellIndex; // Increase radius for each shell
        return (
          <group key={shellIndex}>
            {/* Orbit (green torus) */}
            <Torus args={[radius, 0.05, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
              <meshBasicMaterial color="green" />
            </Torus>
            {/* Electrons (blue spheres) */}
            {Array.from({ length: electronCount }).map((_, electronIndex) => {
              const angle = (electronIndex / electronCount) * 2 * Math.PI; // Distribute electrons evenly
              const x = radius * Math.cos(angle);
              const z = radius * Math.sin(angle);
              return (
                <Sphere
                  key={electronIndex}
                  ref={(el) => {
                    // Assign to array without returning a value
                    if (el) {
                      electronRefs.current[shellIndex * electronCount + electronIndex] = el;
                    }
                  }}
                  args={[0.1, 16, 16]}
                  position={[x, 0, z]}
                >
                  <meshBasicMaterial color="blue" />
                </Sphere>
              );
            })}
          </group>
        );
      })}
    </>
  );
}

export default ElectronShellRenderer;