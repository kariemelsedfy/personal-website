export type ProjectLink = {
  label: string
  href: string
  kind: 'github' | 'live' | 'video' | 'paper'
}

export type Project = {
  title: string
  badge?: string
  blurb: string
  bullets?: string[]
  metrics?: { value: string; label: string }[]
  image?: { src: string; alt: string; caption?: string }
  video?: { src: string; webm?: string; poster: string; label: string; caption?: string }
  tags: string[]
  links: ProjectLink[]
}

export const flagship: Project = {
  title: 'Proteus — Virtual Try-On',
  badge: 'Flagship · Akamai/Linode Hackathon',
  blurb:
    'Event-driven, GPU-accelerated virtual try-on. Upload a photo of yourself and an outfit — a diffusion model renders you wearing it in seconds.',
  bullets: [
    'Queue-based pipeline: Redis job queue + pub/sub feeding a Python/PyTorch GPU worker running CatVTON on Linode Kubernetes Engine, autoscaled by KEDA on queue depth.',
    'Real-time UX: a gateway WebSocket routes per-user job-done events for automatic frontend refresh; presigned S3 URLs let the browser upload directly to storage.',
  ],
  tags: ['React', 'Node.js', 'Redis', 'PostgreSQL', 'PyTorch', 'Kubernetes', 'KEDA', 'WebSocket', 'S3'],
  links: [
    { label: 'Live demo', href: 'https://proteus-frontend-psi.vercel.app/', kind: 'live' },
    { label: 'Demo video', href: 'https://youtu.be/D6bWGE5YtJ0', kind: 'video' },
    { label: 'Frontend', href: 'https://github.com/AhmedAlSunbati712/proteus-frontend', kind: 'github' },
    { label: 'Backend', href: 'https://github.com/AhmedAlSunbati712/proteus-backend', kind: 'github' },
  ],
}

export const pipeline = ['Upload', 'Redis Queue', 'GPU Worker · CatVTON', 'S3 Storage', 'WebSocket Push']

export const personaMotion: Project = {
  title: 'Persona-Motion — Audio-Driven Talking-Head Synthesis',
  badge: 'Flagship · AI Generative Modeling',
  blurb:
    'Generates talking-head video of a person from speech audio by learning their facial-motion dynamics — not their pixels. A generative model maps wav2vec2 speech features to 205-d motion coefficients per frame, rendered to video by a frozen LivePortrait animator.',
  bullets: [
    'Reframed motion prediction as rectified flow matching with classifier-free guidance — fixing the mean-collapse "frozen face" failure of MSE regression with a 14.7M-param BiGRU velocity-field model.',
    'Built the full audiovisual pipeline (face tracking, GPU motion extraction, wav2vec2 alignment) and a from-scratch contrastive SyncNet evaluator; trained end-to-end on a Slurm GPU cluster.',
  ],
  metrics: [
    { value: '0.09 → 0.56', label: 'lip-sync confidence (ground truth 0.77)' },
    { value: '~6×', label: 'sync gain vs. MSE regression baseline' },
    { value: '14.7M', label: 'flow-model parameters' },
  ],
  image: {
    src: `${import.meta.env.BASE_URL}persona-motion-demo.gif`,
    alt: 'Side-by-side comparison of ground-truth footage and talking-head video generated from audio',
    caption: 'Left: ground truth · Right: generated from audio (flow matching + CFG)',
  },
  tags: ['Python', 'PyTorch', 'Flow Matching', 'CFG', 'wav2vec2', 'LivePortrait', 'Slurm HPC'],
  links: [{ label: 'Code', href: 'https://github.com/kariemelsedfy/video-persona-gen', kind: 'github' }],
}

export const glint: Project = {
  title: 'GLINT — World Sprint',
  badge: '{Tech: Europe} AI Gaming Hack · Sep 2026',
  blurb:
    'A reverse-geography treasure speedrun that runs in the browser. You get pictures of objects, never the city: work out where each one belongs, spin a cartoon 3D globe, fly there and find the treasure on foot before the clock runs out.',
  bullets: [
    'The pitch: knowing the world makes you faster. I built it solo in about 8 hours for a one-day AI game hackathon. A wrong city costs +5 s and each hint +10–35 s. Item placement is seeded, so every retry of a trial is identical and your time can only improve by playing better.',
    'Three.js through React Three Fiber, using a single Canvas with one camera authority. Five low-poly cities (Paris, Giza, Rome, San Francisco, Berlin) are pure data, so collision, the in-city map and the hint zones can never disagree. A Zustand store owns every rule, and movement is frame-rate independent.',
    'Built by 11 Devin agents working in parallel: a lead integrator plus workers for gameplay, the globe, each city, the UI, content and QA. Each worker owned its own paths and worked against shared TypeScript contracts, and the lead merged their PRs one at a time. Playwright bots use A* pathfinding to walk every trial end to end.',
  ],
  metrics: [
    { value: '5', label: 'low-poly 3D cities' },
    { value: '11', label: 'parallel AI agents' },
    { value: '0', label: 'network calls: a 1.1 MB static build' },
  ],
  video: {
    src: `${import.meta.env.BASE_URL}glint-demo.mp4`,
    webm: `${import.meta.env.BASE_URL}glint-demo.webm`,
    poster: `${import.meta.env.BASE_URL}glint-poster.jpg`,
    label: 'GLINT gameplay: pick an expedition, read the clues, fly to Paris and Giza on the globe, collect both treasures and get a gold medal',
    caption: 'Real gameplay: Icons expedition, Paris → Giza (walking shown at 2× speed)',
  },
  tags: ['TypeScript', 'React', 'Three.js', 'React Three Fiber', 'Zustand', 'Vite', 'Playwright', 'Devin'],
  links: [
    { label: 'Play on itch.io', href: 'https://karimelsedfy.itch.io/glint-world-sprint', kind: 'live' },
    { label: 'Code', href: 'https://github.com/kariemelsedfy/glint-world-sprint', kind: 'github' },
  ],
}

export const featured: Project[] = [
  {
    title: 'YOLO Encoder Transfer: Detection → Segmentation',
    badge: 'Research · IEEE-format paper',
    blurb:
      'Independent-study research: can a frozen, detection-trained YOLO encoder power semantic segmentation? Dense stride-1 inference and U-Net-style skip connections say yes.',
    metrics: [
      { value: '0.88', label: 'detection mAP@0.5' },
      { value: '0.684', label: 'mean IoU with skips' },
      { value: '+14%', label: 'IoU vs. no-skip decoder' },
    ],
    tags: ['PyTorch', 'YOLOv1', 'U-Net', 'CUB-200'],
    links: [
      { label: 'Read the paper', href: `${import.meta.env.BASE_URL}yolo-encoder-transfer.pdf`, kind: 'paper' },
      { label: 'Code', href: 'https://github.com/kariemelsedfy/Independent-Study', kind: 'github' },
    ],
  },
  {
    title: 'The MyAnimeList Populator',
    blurb:
      'Tinder-style swiping for anime: swipe through recommendations and your MyAnimeList updates itself through the official OAuth2 API. Angular SPA + Dockerized Node/Express/PostgreSQL on Cloud Run.',
    tags: ['Angular', 'Node.js', 'Express', 'PostgreSQL', 'Docker', 'Cloud Run'],
    links: [
      { label: 'Live app', href: 'https://themyanimelistpopulator.web.app', kind: 'live' },
      { label: 'Code', href: 'https://github.com/kariemelsedfy/The-MyAnimeList-Populator', kind: 'github' },
    ],
  },
  {
    title: 'WriteUp',
    badge: 'Hack@Brown 2025',
    blurb:
      'Gamified writing practice: leveled, LeetCode-style prompts, OpenAI-generated challenges, and progress tracking with points and badges. Built from scratch in 48 hours by a team of 3.',
    tags: ['Flask', 'React', 'MongoDB', 'OpenAI API'],
    links: [{ label: 'Code', href: 'https://github.com/kariemelsedfy/WriteUp', kind: 'github' }],
  },
  {
    title: 'Bowdoin CXD Job Scraper',
    blurb:
      'Job-tracking platform for Bowdoin Career Exploration & Development — FastAPI + PostgreSQL with concurrent workers using Claude on AWS Bedrock to resolve official career URLs for a curated employer list.',
    tags: ['FastAPI', 'PostgreSQL', 'Claude · Bedrock', 'Docker'],
    links: [
      {
        label: 'Code',
        href: 'https://github.com/kariemelsedfy/Bowdoin-Career-Exploration-and-Development-Job-Scraper',
        kind: 'github',
      },
    ],
  },
]

export const more = [
  {
    name: 'faceRecognitionAPI',
    desc: 'FastAPI microservice for face registration + real-time verification with DeepFace/OpenCV',
    lang: 'Python',
    href: 'https://github.com/kariemelsedfy/faceRecognitionAPI',
  },
  {
    name: 'Multi-Face-Detection',
    desc: 'Real-time multi-face detection and matching in the browser with FaceAPI.js',
    lang: 'Angular · TypeScript',
    href: 'https://github.com/kariemelsedfy/Multi-Face-Detection-Using-FaceAPI-JS',
  },
  {
    name: 'FreePark',
    desc: 'iOS app for tracking free parking',
    lang: 'Swift',
    href: 'https://github.com/kariemelsedfy/FreePark',
  },
  {
    name: 'Who_Will_Win_the_World_Cup',
    desc: 'ML model predicting the World Cup winner from squad stats',
    lang: 'Python',
    href: 'https://github.com/kariemelsedfy/Who_Will_Win_the_World_Cup',
  },
  {
    name: 'Transfer-Matrix-Method',
    desc: 'Photonic-crystals research code — Pioneer research program (2022)',
    lang: 'Python',
    href: 'https://github.com/kariemelsedfy/Transfer-Matrix-Method',
  },
]
