import React, { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

const CODE_LINES = [
  { x: -0.48, y:  0.60, w: 1.30, c: "#915eff" },
  { x:  0.05, y:  0.42, w: 0.80, c: "#00d4ff" },
  { x: -0.38, y:  0.24, w: 1.70, c: "#38ef7d" },
  { x: -0.18, y:  0.06, w: 1.00, c: "#915eff" },
  { x: -0.48, y: -0.12, w: 1.90, c: "#aaa6c3" },
  { x:  0.10, y: -0.30, w: 1.20, c: "#00d4ff" },
  { x: -0.28, y: -0.48, w: 1.50, c: "#38ef7d" },
  { x: -0.48, y: -0.66, w: 0.70, c: "#915eff" },
];

const DeskScene = ({ mouseRef }) => {
  const groupRef = useRef();
  const rgbL1    = useRef();
  const rgbL2    = useRef();
  const fan1Mat  = useRef();
  const fan2Mat  = useRef();
  const fan3Mat  = useRef();
  const kbMat    = useRef();
  const msMat    = useRef();

  const tx = useRef(0), ty = useRef(0);
  const cx = useRef(0), cy = useRef(0);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Mouse parallax
    const m = mouseRef.current;
    if (m) { tx.current = m.y * 0.09; ty.current = m.x * 0.13; }
    cx.current += (tx.current - cx.current) * 0.04;
    cy.current += (ty.current - cy.current) * 0.04;
    if (groupRef.current) {
      groupRef.current.rotation.x = cx.current;
      groupRef.current.rotation.y = cy.current;
    }

    // RGB colour cycle
    const sin = (off) => Math.sin(t * 0.7 + off) * 0.5 + 0.5;
    const [r1,g1,b1] = [sin(0), sin(2), sin(4)];
    const [r2,g2,b2] = [sin(2), sin(4), sin(0)];
    const [r3,g3,b3] = [sin(4), sin(0), sin(2)];

    if (rgbL1.current) rgbL1.current.color.setRGB(r1, g1, b1);
    if (rgbL2.current) rgbL2.current.color.setRGB(r2, g2, b2);
    if (fan1Mat.current) fan1Mat.current.emissive.setRGB(r1, g1, b1);
    if (fan2Mat.current) fan2Mat.current.emissive.setRGB(r2, g2, b2);
    if (fan3Mat.current) fan3Mat.current.emissive.setRGB(r3, g3, b3);
    if (kbMat.current)   kbMat.current.emissive.setRGB(r2 * 0.4 + 0.2, g2 * 0.1, b2 * 0.6 + 0.3);
    if (msMat.current)   msMat.current.emissive.setRGB(r3 * 0.1, g3 * 0.5, b3 * 0.8 + 0.2);
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <pointLight position={[2, 5, 4]} intensity={0.9} color="#ffffff" />
      <pointLight ref={rgbL1} position={[-3, 2, 2]} intensity={0.8} distance={6} />
      <pointLight ref={rgbL2} position={[ 3, 1, 2]} intensity={0.8} distance={6} />

      {/* Float handles idle bobbing */}
      <Float speed={1.4} rotationIntensity={0} floatIntensity={0.35}>
        <group position={[0, -1.0, 0]}>

          {/* ── DESK ── */}
          <mesh receiveShadow>
            <boxGeometry args={[6.4, 0.09, 2.8]} />
            <meshStandardMaterial color="#1a0e05" roughness={0.4} metalness={0.05} />
          </mesh>

          {/* ── MONITOR BACK ── */}
          <mesh position={[0, 1.65, -0.85]} castShadow>
            <boxGeometry args={[3.3, 1.95, 0.09]} />
            <meshStandardMaterial color="#0e0e0e" roughness={0.4} metalness={0.85} />
          </mesh>

          {/* SCREEN */}
          <mesh position={[0, 1.65, -0.79]}>
            <boxGeometry args={[3.0, 1.68, 0.01]} />
            <meshStandardMaterial color="#050518" emissive="#120830" emissiveIntensity={0.9} roughness={0} />
          </mesh>

          {/* Code lines */}
          {CODE_LINES.map((l, i) => (
            <mesh key={i} position={[l.x, 1.65 + l.y, -0.78]}>
              <boxGeometry args={[l.w, 0.055, 0.001]} />
              <meshStandardMaterial color="#000" emissive={l.c} emissiveIntensity={2} />
            </mesh>
          ))}

          {/* Screen glow */}
          <pointLight position={[0, 1.65, -0.55]} intensity={0.5} color="#7b5cf5" distance={2.5} />

          {/* Monitor stand */}
          <mesh position={[0, 0.82, -0.88]}>
            <boxGeometry args={[0.14, 1.3, 0.12]} />
            <meshStandardMaterial color="#1a1a1a" roughness={0.4} metalness={0.9} />
          </mesh>
          <mesh position={[0, 0.065, -0.88]}>
            <boxGeometry args={[1.1, 0.045, 0.55]} />
            <meshStandardMaterial color="#141414" roughness={0.35} metalness={0.9} />
          </mesh>

          {/* ── KEYBOARD ── */}
          <mesh position={[0, 0.065, 0.32]} castShadow>
            <boxGeometry args={[2.5, 0.065, 0.82]} />
            <meshStandardMaterial color="#0a0a0a" roughness={0.65} metalness={0.35} />
          </mesh>
          {/* Key rows */}
          {[-0.26, 0, 0.26].map((z, i) => (
            <mesh key={i} position={[0, 0.099, 0.32 + z]}>
              <boxGeometry args={[2.35, 0.012, 0.19]} />
              <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
            </mesh>
          ))}
          {/* RGB strip */}
          <mesh position={[0, 0.033, 0.70]}>
            <boxGeometry args={[2.5, 0.008, 0.04]} />
            <meshStandardMaterial ref={kbMat} color="#000" emissiveIntensity={2.5} />
          </mesh>

          {/* ── MOUSE ── */}
          <mesh position={[1.7, 0.065, 0.32]} castShadow>
            <boxGeometry args={[0.30, 0.065, 0.48]} />
            <meshStandardMaterial color="#0d0d0d" roughness={0.45} metalness={0.55} />
          </mesh>
          <mesh position={[1.7, 0.10, 0.52]}>
            <boxGeometry args={[0.28, 0.008, 0.035]} />
            <meshStandardMaterial ref={msMat} color="#000" emissiveIntensity={2.5} />
          </mesh>
          {/* Scroll wheel */}
          <mesh position={[1.7, 0.10, 0.26]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.028, 0.028, 0.09, 10]} />
            <meshStandardMaterial color="#333" roughness={0.7} />
          </mesh>

          {/* ── PC TOWER ── */}
          <mesh position={[-2.4, 0.88, -0.55]} castShadow>
            <boxGeometry args={[0.82, 1.76, 1.25]} />
            <meshStandardMaterial color="#0c0c0c" roughness={0.35} metalness={0.85} />
          </mesh>
          {/* Glass panel */}
          <mesh position={[-1.985, 0.88, -0.55]}>
            <boxGeometry args={[0.015, 1.68, 1.15]} />
            <meshStandardMaterial color="#6688cc" transparent opacity={0.18} roughness={0} metalness={0.95} />
          </mesh>

          {/* Fan 1 */}
          <mesh position={[-1.99, 1.30, -0.55]}>
            <torusGeometry args={[0.20, 0.025, 8, 24]} />
            <meshStandardMaterial ref={fan1Mat} color="#050505" emissiveIntensity={2.2} />
          </mesh>

          {/* Fan 2 */}
          <mesh position={[-1.99, 0.88, -0.55]}>
            <torusGeometry args={[0.20, 0.025, 8, 24]} />
            <meshStandardMaterial ref={fan2Mat} color="#050505" emissiveIntensity={2.2} />
          </mesh>

          {/* Fan 3 */}
          <mesh position={[-1.99, 0.46, -0.55]}>
            <torusGeometry args={[0.20, 0.025, 8, 24]} />
            <meshStandardMaterial ref={fan3Mat} color="#050505" emissiveIntensity={2.2} />
          </mesh>

          {/* Power LED */}
          <mesh position={[-1.99, 1.62, -0.55]}>
            <cylinderGeometry args={[0.05, 0.05, 0.02, 12]} />
            <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={3} />
          </mesh>

          {/* Desk legs */}
          {[[-2.8, -1.2], [-2.8, 1.2], [2.8, -1.2], [2.8, 1.2]].map(([x, z], i) => (
            <mesh key={i} position={[x, -0.54, z]}>
              <boxGeometry args={[0.1, 1.0, 0.1]} />
              <meshStandardMaterial color="#1a0e05" roughness={0.4} />
            </mesh>
          ))}
        </group>
      </Float>
    </group>
  );
};

const ComputersCanvas = () => {
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth)  * 2 - 1,
        y: -((e.clientY / window.innerHeight) * 2 - 1),
      };
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <Canvas
      frameloop="always"
      camera={{ position: [0, 1.6, 9.5], fov: 30 }}
      gl={{ antialias: true, alpha: true, premultipliedAlpha: false }}
      onCreated={({ gl, scene }) => {
        gl.setClearColor(0x000000, 0);
        scene.background = null;
      }}
      style={{ width: "100%", height: "100%", background: "transparent" }}
    >
      <DeskScene mouseRef={mouseRef} />
    </Canvas>
  );
};

export default ComputersCanvas;
