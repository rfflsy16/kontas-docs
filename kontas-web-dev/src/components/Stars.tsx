"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const Stars = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Simpan ref di variable
    const container = containerRef.current;

    // Setup Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true, // Biar lebih smooth
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio); // Biar lebih sharp
    container.appendChild(renderer.domElement);

    // Bikin stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.1,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending, // Biar ada glow effect
    });

    // Bikin 6000 bintang random
    const starsVertices = [];
    for (let i = 0; i < 6000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = -Math.random() * 2000;
      starsVertices.push(x, y, z);
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starsVertices, 3)
    );
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    camera.position.z = 5;

    // Handle mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate stars slowly
      stars.rotation.x += 0.0001;
      stars.rotation.y += 0.0001;

      // Move stars based on mouse position
      const targetX = mousePosition.current.x * 0.001;
      const targetY = mousePosition.current.y * 0.001;

      stars.rotation.x += (targetY - stars.rotation.x) * 0.05;
      stars.rotation.y += (targetX - stars.rotation.y) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-transparent"
      style={{ pointerEvents: "none" }} // Biar bisa klik elements di atasnya
    />
  );
};

export default Stars;
