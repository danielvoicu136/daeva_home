
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";

export default function VantaBackground() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x3d009b,
          midtoneColor: 0x780000,
          lowlightColor: 0x000000,
          baseColor: 0x000000,
          blurFactor: 0.7,
          zoom: 1,
          speed: 3,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  // Cover the entire scrollable area
  return (
  <div
      ref={vantaRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ minHeight: "100vh", minWidth: "100vw" }}
    />
  );
}    