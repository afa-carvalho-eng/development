import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const WavesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#282c34", // Dark background
        },
        particles: {
          number: {
            value: 80, // Number of particles
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff", // White particles (waves)
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.2,
              sync: false,
            },
          },
          size: {
            value: 5,
            random: true,
          },
          move: {
            enable: true,
            speed: 2, // Speed of wave movement
            direction: "top",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              repulse: {
                distance: 100, // Mouse interaction effect
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
            },
          },
        },
      }}
    />
  );
};

export default WavesBackground;
