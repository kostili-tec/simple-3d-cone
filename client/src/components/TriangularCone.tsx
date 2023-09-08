import { FC, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

import { IConeCalculatedData as TriangularConeProps } from '../types/types';

export const TriangularCone: FC<TriangularConeProps> = ({ indices, vertices }) => {
  const meshRef = useRef<THREE.Mesh>();
  const [geometry, setGeometry] = useState<THREE.BufferGeometry | null>(null);

  useEffect(() => {
    const newGeometry = new THREE.BufferGeometry();
    newGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices), 3));
    newGeometry.setIndex(indices);
    setGeometry(newGeometry);
  }, [indices, vertices]);

  return (
    <mesh geometry={geometry} ref={meshRef}>
      <meshBasicMaterial attach="material" color={0xa52a2a} wireframe={true} />
    </mesh>
  );
};
