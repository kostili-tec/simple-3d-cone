import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { CameraControls } from '@react-three/drei';

import { TriangularCone } from '../TriangularCone';
import { FormData } from '../FormData/FormData';
import { Box } from '../Box';
import { IConeData, IConeCalculatedData } from '../../types/types';

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
      <Canvas camera={{ position: [0, 0, 20] }} style={{ height: 700 }}>
        <CameraControls />
        <color attach="background" args={['#000000']} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {calculatedData.indices.length > 0 && calculatedData.vertices.length > 0 ? (
          <TriangularCone {...calculatedData} />
        ) : (
          <Box />
        )}
      </Canvas>
      <FormData
        coneData={coneData}
        setConeData={setConeData}
        setCalculatedData={setCalculatedData}
      />
    </div>
  );
};
