import React from "react";
import layer1 from "../Assets/jungle3.png";
import layer2 from "../Assets/jungle1.png";
import layer3 from "../Assets/jungle2.png";
import layer4 from "../Assets/jungle4.png";
import layer5 from "../Assets/jungle5.png";
import layer6 from "../Assets/man_on_mountain2.png";
import bg from "../Assets/bg1 (1).png";
import "../Fonts/RavensaraSansMedium.ttf";
import "../Fonts/RavensaraSansSemiBold.ttf";
import styles from "./styles";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

const layers = [layer1, layer2, layer3, layer4, layer5, layer6];

function ParallaxImage(isMobile) {
  return (src, index) => {
    return (
      <MouseParallaxChild
        factorX={0.03 * (index + 1)}
        factorY={0.03 * (index + 1)}
      >
        <motion.img
          animate={{
            y: [150 * index, -50],
            opacity: [0, 1],
            scale: isMobile ? 2.2 : 1.5,
          }}
          transition={{ ease: "easeInOut", type: "spring", duration: 3 }}
          src={src}
          style={{
            position: "absolute",
            bottom: 0,
            transform: "scale(1.2)",
            width: "100vw",
          }}
          alt="mountain"
        />
      </MouseParallaxChild>
    );
  };
}

function CinematicText(text) {
  const n = text.length;
  const letters = text.split("");
  const cinematic_text = letters.map((letter, i) => {
    return (
      <motion.div
        animate={{ x: [50 * (i - n / 2), 0], opacity: [0, 0.6] }}
        transition={{ ease: "backOut", duration: 2.5, delay: 1.5 }}
        style={{ display: "inline-block" }}
      >
        {letter}
      </motion.div>
    );
  });
  return cinematic_text;
}

export default function Parallax() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <MouseParallaxContainer
      globalFactorX={0.3}
      globalFactorY={0.3}
      containerStyle={{
        position: "relative",
      }}
      resetOnLeave
    >
      <MouseParallaxChild factorX={0.03} factorY={0.03}>
        <img
          src={bg}
          style={{
            transform: "scale(1.1)",
            width: isMobile ? "fit-content" : "100vw",
            height: "99.5vh",
            opacity: "100%",
          }}
          alt="mountain"
        />
      </MouseParallaxChild>

      {layers.map(ParallaxImage(isMobile))}

      <MouseParallaxChild factorX={0.03 * 10} factorY={0.03 * 10}>
        <motion.div
          animate={{ y: [-50, 0] }}
          transition={{ ease: "easeInOut", duration: 2, delay: 1 }}
          style={styles.parallax_text_block}
        >
          <motion.div
            style={{
              fontSize: isMobile ? 170 / 2 : 170,
              fontFamily: "RavensaraSansMedium",
              marginBottom: -40,
            }}
          >
            {CinematicText("AURORA")}
          </motion.div>
          <motion.div
            style={{ fontSize: isMobile ? 50 / 2 : 50, marginTop: 10 }}
          >
            {CinematicText("-de-")}
          </motion.div>
          <motion.div style={{ fontSize: isMobile ? 100 / 2 : 100 }}>
            {CinematicText("FANTASIA")}
          </motion.div>
        </motion.div>
      </MouseParallaxChild>
    </MouseParallaxContainer>
  );
}
