export type Experience = {
  company: string
  role: string
  period: string
  location: string
  bullets: string[]
  tags: string[]
}

export const experience: Experience[] = [
  {
    company: 'Dropbox',
    role: 'Software Engineer Intern',
    period: 'May 2026 — Present',
    location: 'Remote — San Francisco, CA',
    bullets: [
      'Building conversion features on the Teams Formation team — reworking onboarding UI and upgrade flows that move business-domain users on free plans onto paid Team plans.',
      'Shipping full-stack changes across a React/TypeScript frontend and Python backend services, using internal gRPC tooling and A/B experimentation to ship and measure targeted experiences.',
    ],
    tags: ['React', 'TypeScript', 'Python', 'gRPC', 'A/B Testing'],
  },
  {
    company: 'Ungated Research · Bowdoin College',
    role: 'Software Engineer',
    period: 'Mar 2026 — Present',
    location: 'Brunswick, ME',
    bullets: [
      'Co-maintain a multithreaded Python ETL pipeline (SQLAlchemy, MariaDB, AWS S3) ingesting economics papers from 11+ journals, enriched with Gemini summaries, tags, and translations.',
      'Engineered error-detection and automated-repair diagnostics, and ran Crossref API polling across 10 years of publications to surface 6,080 new articles for ingestion.',
    ],
    tags: ['Python', 'SQLAlchemy', 'MariaDB', 'AWS S3', 'Gemini'],
  },
  {
    company: 'Bowdoin CS Department',
    role: 'Independent Study Researcher',
    period: 'Sep 2025 — Dec 2025',
    location: 'Brunswick, ME',
    bullets: [
      'Researched transferring detection-trained YOLO encoders to semantic segmentation without retraining the backbone — dense stride-1 inference, frozen-encoder decoders, and U-Net-style skip connections.',
      'Lifted mean IoU from 0.600 to 0.684 on the CUB dataset and wrote the results up as an IEEE-format paper, advised by Prof. Jeova Farias.',
    ],
    tags: ['PyTorch', 'Computer Vision', 'YOLO', 'Research'],
  },
  {
    company: 'Palmera Systems Co.',
    role: 'Software Engineer Intern',
    period: 'Jun 2025 — Aug 2025',
    location: 'Cairo, Egypt',
    bullets: [
      'Architected the face-recognition and anti-spoofing feature for the smartIN app (8K daily users) — dataset curation and model fine-tuning with DeepFace/OpenCV, reaching 96% detection accuracy.',
      'Built Angular front-ends and .NET Core + PostgreSQL services matching live captures against the database in under 2s, cutting authentication latency by 50%.',
    ],
    tags: ['DeepFace', 'OpenCV', 'Angular', '.NET Core', 'PostgreSQL'],
  },
  {
    company: 'Bowdoin CS Department',
    role: 'Teaching Assistant',
    period: 'Jan 2025 — May 2026',
    location: 'Brunswick, ME',
    bullets: [
      'Held weekly office hours across three semesters for 82 students in Data Structures I & II and Artificial Intelligence.',
      'Coached debugging, optimization, and algorithmic problem-solving with targeted feedback on coding assignments.',
    ],
    tags: ['Algorithms', 'Data Structures', 'AI', 'Teaching'],
  },
  {
    company: 'IT Digital Corps · Bowdoin College',
    role: 'Student Technical Support Representative',
    period: 'Sep 2024 — May 2025',
    location: 'Brunswick, ME',
    bullets: [
      'Resolved 300+ support tickets for students, faculty, and staff — Okta Verify/MFA authentication issues, OS-level errors, and configuration conflicts across Windows and macOS.',
    ],
    tags: ['Okta', 'MFA', 'Windows', 'macOS'],
  },
]
