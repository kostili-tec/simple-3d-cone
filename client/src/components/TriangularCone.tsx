import { FC, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import { IConeCalculatedData as TriangularConeProps } from '../types/types';

interface ConeViewerProps {
  height: number;
  radius: number;
  segments: number;
}

export const TriangularCone: FC<TriangularConeProps> = ({ indices, vertices }) => {
  const meshRef = useRef<THREE.Mesh>();

  /*   useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  }); */

  // Создаем геометрию и материал
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices), 3));
  geometry.setIndex(indices);

  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

  console.log('vertices', vertices);
  console.log('indices', indices);

  return (
    <mesh geometry={geometry} material={material} ref={meshRef}>
      <meshBasicMaterial attach="material" color={0xa52a2a} wireframe={true} />
    </mesh>
  );
};
