import "./style/ParallaxProps.css";
import { useRef } from "react";
import { motion, useMotionValue, useTransform, useAnimationFrame } from "framer-motion";
import { wrap } from "@motionone/utils";
import React from "react";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    moveBy += directionFactor.current * moveBy;

    baseX.set(baseX.get() + moveBy);
  });

  React.useEffect(() => {
    const updateX = () => {
      const moveBy = directionFactor.current * baseVelocity * (1 / 60); // Assuming 60fps
      baseX.set(baseX.get() + moveBy);
    };

    const interval = setInterval(updateX, 1000 / 60); // 60fps
    return () => clearInterval(interval);
  }, [baseVelocity, baseX]);

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

export { ParallaxText };
