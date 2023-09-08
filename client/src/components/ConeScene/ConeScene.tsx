import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { TriangularCone } from '../TriangularCone';
import { FormData } from '../FormData/FormData';
import { IConeData, IConeCalculatedData } from '../../types/types';
import { Box } from '../Box';

export const ConeScene = () => {
  const [coneData, setConeData] = useState<IConeData>({
    height: 10,
    radius: 5,
    segments: 8,
  });

  const [calculatedData, setCalculatedData] = useState<IConeCalculatedData>({
    indices: [],
    vertices: [],
  });

  return (
    <div>
      <Canvas camera={{ position: [50, 50, 50], fov: 90 }} style={{ height: 700 }}>
        <color attach="background" args={['#000000']} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {calculatedData.indices.length > 0 && calculatedData.vertices.length > 0 ? (
          <TriangularCone {...calculatedData} />
        ) : (
          <Box />
        )}
        <OrbitControls />
      </Canvas>
      <FormData
        coneData={coneData}
        setConeData={setConeData}
        calculatedData={calculatedData}
        setCalculatedData={setCalculatedData}
      />
    </div>
  );
};
