import { FC, useEffect, useState } from 'react';
import { BufferAttribute, BufferGeometry } from 'three';

import { IConeCalculatedData as TriangularConeProps } from '../types/types';

export const TriangularCone: FC<TriangularConeProps> = ({ indices, vertices }) => {
  const [geometry, setGeometry] = useState<THREE.BufferGeometry | null>(null);

  useEffect(() => {
    const newGeometry = new BufferGeometry();
    newGeometry.setAttribute('position', new BufferAttribute(new Float32Array(vertices), 3));
    newGeometry.setIndex(indices);
    setGeometry(newGeometry);
  }, [indices, vertices]);

  return (
    <mesh geometry={geometry}>
      <meshBasicMaterial attach="material" color={0xa52a2a} wireframe={true} />
    </mesh>
  );
};
