import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import './styles/index.scss';
import { TriangularCone } from './components/TriangularCone';

const App = () => {
  return (
    <div className="app">
      <Canvas camera={{ position: [50, 50, 50], fov: 90 }} style={{ height: 700 }}>
        <color attach="background" args={['#000000']} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <TriangularCone height={30} radius={10} segments={5} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default App;