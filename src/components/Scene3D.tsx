'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html } from '@react-three/drei';
import { Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import LoadingSpinner from './LoadingSpinner';
import { getScreenSize } from '@/utils/screens';

function Model() {
  const [modelProps, setModelProps] = useState({
    scale: 1,
    position: [0, -1.5, 0],
    rotation: [0, -0.4, 0],
  });

  useEffect(() => {
    const updateModelProps = () => {
      const screenSize = getScreenSize();
      switch (screenSize) {
        case 'mobile':
          setModelProps({
            scale: 1,
            position: [0, -1.5, -1],
            rotation: [0, -0.4, 0],
          });
          break;
        case 'tablet':
          setModelProps({
            scale: 1,
            position: [0, -1.5, -1],
            rotation: [0, -0.4, 0],
          });
          break;
        case 'desktop':
          setModelProps({
            scale: 1,
            position: [0, -1.5, -1],
            rotation: [0, -0.4, 0],
          });
          break;
      }
    };

    updateModelProps();
    window.addEventListener('resize', updateModelProps);
    return () => window.removeEventListener('resize', updateModelProps);
  }, []);

  const computer = useGLTF('/models/dog.glb');

  return (
    <primitive
      object={computer.scene}
      scale={modelProps.scale}
      position={modelProps.position as [number, number, number]}
      rotation={modelProps.rotation as [number, number, number]}
    />
  );
}

export default function Scene3D() {
  const [cameraPosition, setCameraPosition] = useState<[number, number, number]>([0, 2, 8]);
  const [containerHeight, setContainerHeight] = useState('60vh');
  const [rotationSpeed, setRotationSpeed] = useState(75);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const updateLayout = () => {
      const screenSize = getScreenSize();
      switch (screenSize) {
        case 'mobile':
          setCameraPosition([0, 3, 8]);
          setContainerHeight('45vh');
          break;
        case 'tablet':
          setCameraPosition([0, 3, 8]);
          setContainerHeight('50vh');
          break;
        case 'desktop':
          setCameraPosition([0, 3, 8]);
          setContainerHeight('60vh');
          break;
      }
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setRotationSpeed(2);
    }, 1000);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative"
      style={{ height: containerHeight }}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <LoadingSpinner size="lg" />
        </div>
      )}
      <Canvas
        camera={{ position: cameraPosition, fov: 65 }}
        className="pointer-events-none"
        onCreated={() => setIsLoading(false)}
      >
        <ambientLight intensity={0.6} />
        <hemisphereLight intensity={1} groundColor="#000000" />
        <directionalLight
          position={[10, 10, 0]}
          intensity={0}
          castShadow
        />
        <Suspense fallback={
          <Html center>
            <LoadingSpinner size="lg" />
          </Html>
        }>
          <Model />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={rotationSpeed}
        />
      </Canvas>
    </motion.div>
  );
}
