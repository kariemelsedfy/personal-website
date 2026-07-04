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
    title: 'video-persona-gen',
    badge: 'AI · In progress',
    blurb:
      'Audio-visual avatar generation — learning audio-driven motion from self-recorded footage and rendering talking-head video with a LivePortrait-style backbone. Lip sync, expression modeling, and head-motion generation.',
    tags: ['Python', 'PyTorch', 'LivePortrait', 'Computer Vision'],
    links: [{ label: 'Code', href: 'https://github.com/kariemelsedfy/video-persona-gen', kind: 'github' }],
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
