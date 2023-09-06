import { Cone, Cylinder } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';

export const ConeMesh = () => {
  // useFrame((state, delta) => (meshRef.current.rotation.x += delta));
  const meshRef = useRef<THREE.Mesh>(null!);
  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <coneGeometry args={[1, 4, 8]} />
      <meshBasicMaterial wireframe={true} color={0xa52a2a} />
      {/* <Cone args={[2, 4, 3]}>
        <meshBasicMaterial attach='metarial' color={0xa52a2a}/>
      </Cone> */}
    </mesh>
  );
};
