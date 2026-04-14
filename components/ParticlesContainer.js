import React, { useCallback } from 'react';
import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const particlesOptions = {
  fullScreen: { enable: false },
  background: { color: { value: '' } },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: { enable: false, mode: 'push' },
      onHover: { enable: true, mode: 'repulse' },
      resize: true,
    },
    modes: {
      push: { quantity: 90 },
      repulse: { distance: 200, duration: 0.4 },
    },
  },
  particles: {
    color: { value: '#e68e2e' },
    links: {
      color: '#f5d393',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: { enable: true },
    move: {
      enable: true,
      speed: 1.5,
      direction: 'none',
      random: true,
      straight: false,
      outModes: { default: 'bounce' },
    },
    number: {
      value: 40,
      density: { enable: true, area: 800 },
    },
    opacity: { value: 0.5 },
    shape: { type: 'circle' },
    size: { value: { min: 1, max: 5 } },
  },
  detectRetina: true,
};

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="w-full h-full absolute translate-z-0"
      init={particlesInit}
      options={particlesOptions}
    />
  );
};

export default ParticlesContainer;