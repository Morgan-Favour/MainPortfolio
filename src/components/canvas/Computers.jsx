import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import Loader from '../Loader';

const Computers = () => {
  const computer = useGLTF('/desktop_pc/scene.gltf');
  if (!computer || !computer.scene) return null;

  return (
    <group>
      <ambientLight intensity={0.5} />
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive 
        object={computer.scene}
        scale={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  );
};

const ComputersCanvas = () => {
  return (
    <div className="w-full h-full min-h-screen">
      <Canvas
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Suspense fallback={<Loader />}>
          <Computers />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
