import { Canvas } from '@react-three/fiber';

import './styles/index.scss';
import { Box } from './components/Box';
import { ConeMesh } from './components/Cone';
import { OrbitControls } from '@react-three/drei';

const App = () => {
  return (
    <div className="app">
      <Canvas style={{ height: 500 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {/* <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} /> */}
        <ConeMesh />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default App;
