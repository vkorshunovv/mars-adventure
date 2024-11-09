"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const MarsScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      innerWidth / innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current?.appendChild(renderer.domElement);

    camera.position.z = 3;

    const marsGeometry = new THREE.SphereGeometry(1.5, 36, 16);
    const marsMaterial = new THREE.MeshBasicMaterial({
      color: 0xff45003,
      wireframe: true,
    });
    const mars = new THREE.Mesh(marsGeometry, marsMaterial);

    scene.add(mars);

    // const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    // directionalLight.position.z = 3;
    // scene.add(directionalLight);

    const animate = () => {
      requestAnimationFrame(animate);
      mars.rotation.y += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }}></div>;
};

export default MarsScene;
