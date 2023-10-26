import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export const ParticlesBackground = () => {
  const options = {
    fullScreen: {
      zIndex: -1,
    },
    background: {
      color: "#0d121c",
    },
    particles: {
      number: {
        value: 35,
        color: "#0f172a",
      },
      links: {
        distance: 150,
        enable: true,
        color: "#334155",
      },
      move: {
        enable: true,
      },
      size: {
        value: 1,
      },
      shape: {
        type: "circle",
      },
    },
  };

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Particles
      // style={{ zIndex: "-999" }}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
    />
  );
};
