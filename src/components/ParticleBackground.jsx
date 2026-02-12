import React, { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { useTheme } from '../contexts/ThemeContext'

const ParticleBackground = () => {
  const [init, setInit] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesConfig = {
    fullScreen: {
      enable: true,
      zIndex: 0
    },
    fpsLimit: 120,
    smooth: true,
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          height: 800,
          width: 800
        }
      },
      color: {
        value: theme === 'dark' ? '#8b5cf6' : '#7c3aed'
      },
      shape: {
        type: 'circle'
      },
      opacity: {
        value: theme === 'dark' ? 0.5 : 0.5,
        random: true,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: theme === 'dark' ? 0.2 : 0.2,
          sync: false
        }
      },
      size: {
        value: 4,
        random: true,
        animation: {
          enable: true,
          speed: 3,
          minimumValue: 1,
          sync: false
        }
      },
      links: {
        enable: true,
        distance: 150,
        color: theme === 'dark' ? '#8b5cf6' : '#7c3aed',
        opacity: theme === 'dark' ? 0.3 : 0.3,
        width: 1.5,
        triangles: {
          enable: false
        }
      },
      move: {
        enable: true,
        speed: 1.5,
        direction: 'none',
        random: true,
        straight: false,
        outModes: {
          default: 'bounce'
        },
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        },
        bounce: false
      }
    },
    interactivity: {
      detectsOn: 'window',
      events: {
        onHover: {
          enable: true,
          mode: ['repulse'],
          parallax: {
            enable: false,
            force: 60,
            smooth: 10
          }
        },
        onClick: {
          enable: false
        },
        resize: {
          enable: true,
          delay: 0.5
        }
      },
      modes: {
        repulse: {
          distance: 180,
          duration: 0.3,
          factor: 3,
          speed: 1,
          maxSpeed: 50,
          easing: 'ease-out-quad',
          divs: {
            distance: 180,
            duration: 0.3,
            selectors: []
          }
        }
      }
    },
    detectRetina: true,
    background: {
      color: theme === 'dark' ? '#0f0f0f' : '#ffffff'
    },
    responsive: [
      {
        maxWidth: 768,
        options: {
          particles: {
            number: {
              value: 50
            },
            move: {
              speed: 1
            }
          },
          interactivity: {
            modes: {
              repulse: {
                distance: 150
              }
            }
          }
        }
      }
    ]
  }

  if (!init) {
    return null
  }

  return (
    <Particles
      id="tsparticles"
      options={particlesConfig}
      className="absolute inset-0"
    />
  )
}

export default ParticleBackground
