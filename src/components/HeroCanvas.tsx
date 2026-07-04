import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`

const fragmentShader = /* glsl */ `
  precision highp float;

  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uAspect;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    mat2 rot = mat2(0.8, 0.6, -0.6, 0.8);
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p = rot * p * 2.0 + vec2(100.0);
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    vec2 p = vec2(uv.x * uAspect, uv.y);
    float t = uTime * 0.05;

    // Domain-warped fbm for a slowly flowing nebula
    vec2 q = vec2(fbm(p * 1.4 + t), fbm(p * 1.4 - t * 0.7 + 3.1));
    vec2 r = vec2(
      fbm(p * 1.4 + q * 1.6 + vec2(1.7, 9.2) + t * 0.8),
      fbm(p * 1.4 + q * 1.6 + vec2(8.3, 2.8) - t * 0.6)
    );
    float f = fbm(p * 1.4 + r * 1.8);

    vec3 base = vec3(0.039, 0.039, 0.059);
    vec3 indigo = vec3(0.388, 0.400, 0.945);
    vec3 violet = vec3(0.545, 0.361, 0.965);
    vec3 cyan = vec3(0.133, 0.827, 0.933);

    vec3 col = base;
    col = mix(col, indigo, smoothstep(0.25, 0.95, f) * 0.42);
    col = mix(col, violet, smoothstep(0.35, 0.95, q.y) * 0.30);
    col = mix(col, cyan, smoothstep(0.55, 0.98, r.x) * 0.25);

    // Mouse-following glow
    vec2 m = vec2(uMouse.x * uAspect, uMouse.y);
    float d = distance(p, m);
    float glow = exp(-d * d * 5.0);
    col += cyan * glow * 0.16 + violet * glow * 0.12;

    // Vignette
    vec2 c = uv - 0.5;
    col *= 1.0 - dot(c, c) * 0.85;

    // Dither to avoid banding
    col += (hash(uv * 1234.0 + uTime) - 0.5) * 0.014;

    gl_FragColor = vec4(col, 1.0);
  }
`

function GradientPlane() {
  const target = useRef(new THREE.Vector2(0.5, 0.5))
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uAspect: { value: 1 },
    }),
    [],
  )

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      target.current.set(e.clientX / window.innerWidth, 1 - e.clientY / window.innerHeight)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  useFrame((state) => {
    uniforms.uTime.value = state.clock.elapsedTime
    uniforms.uAspect.value = state.size.width / state.size.height
    uniforms.uMouse.value.lerp(target.current, 0.06)
  })

  return (
    <mesh frustumCulled={false}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        depthWrite={false}
        depthTest={false}
      />
    </mesh>
  )
}

/**
 * Fullscreen animated shader background for the hero.
 * Pauses rendering entirely when scrolled out of view.
 */
export default function HeroCanvas() {
  const wrap = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const el = wrap.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0,
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={wrap} className="absolute inset-0" aria-hidden="true">
      <Canvas
        dpr={[1, 1.75]}
        gl={{ antialias: false, powerPreference: 'high-performance' }}
        frameloop={visible ? 'always' : 'never'}
      >
        <GradientPlane />
      </Canvas>
    </div>
  )
}
