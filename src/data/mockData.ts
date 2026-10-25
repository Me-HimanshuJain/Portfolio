export const personalInfo = {
  name: "Himanshu Jain",
  shortBio: "Final-Year Computer Science Engineering student passionate about Full-Stack Development, AI, Machine Learning, and DevOps. I enjoy building scalable, AI-powered applications that solve real-world problems.",
  fullBio: "I'm a Final-Year Computer Science Engineering student passionate about Full-Stack Development, Artificial Intelligence, Machine Learning, and DevOps. I enjoy building scalable, AI-powered applications that solve real-world problems. My interests include backend architecture, cloud technologies, computer vision, and modern web development. I'm always exploring new technologies and continuously improving my software engineering skills.",
  email: "himanshu440alw@gmail.com",
  phone: "+91 7240760741",
  location: "Jaipur, Rajasthan, India",
  socials: {
    github: "https://github.com/Me-HimanshuJain",
    linkedin: "https://linkedin.com/in/himanshu-jain-0b1334346",
    instagram: "https://instagram.com/Me.Himanshu21"
  }
};

export const stats = {
  projects: "10+",
  technologies: "25+",
  yearsLearning: "3+",
  domains: "4+"
};

export const skillsData = {
  'sde-webd': ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Node.js', 'Express.js', 'FastAPI', 'PHP', 'Three.js', 'PostgreSQL', 'PostGIS', 'MongoDB', 'MySQL', 'SQLite', 'Redis', 'Docker', 'Git', 'GitHub', 'REST APIs', 'WebSocket'],
  'ai-ml': ['Python', 'PyTorch', 'TensorFlow', 'YOLOv8', 'MediaPipe', 'DeepFace', 'OpenCV', 'ONNXRuntime', 'TFLite', 'Scikit-learn', 'Kalman Filter', 'Pandas', 'NumPy', 'MobileNetV3', 'Whisper'],
  'genai': ['Ollama', 'Local LLMs', 'NVIDIA NIM', 'Whisper', 'ChromaDB', 'FAISS', 'pgvector', 'NLP', 'SentenceTransformers', 'spaCy', 'LangChain', 'OpenAI API'],
  'data-science': ['Python', 'SQL', 'Pandas', 'NumPy', 'Scikit-learn', 'PostgreSQL', 'PostGIS', 'MySQL', 'Data Analysis', 'Data Visualization', 'K-Means Clustering', 'FAISS']
};

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  affiliation: string;
  metric: string;
  summary: string;
  bullets: string[];
  tech: string[];
  github: string;
  live: string;
  roles: ('all' | 'ai-ml' | 'genai' | 'data-science' | 'sde-webd')[];
}

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "HJAI ASSISTANT PLATFORM",
    category: "GENERATIVE AI • MULTI-MODAL • LOCAL LLM",
    affiliation: "AUTONOMOUS AI RESEARCH & DESKTOP COPILOT",
    metric: "100% Local Inference · Zero Cloud Data Leakage · Sub-50ms Desktop Copilot Latency",
    summary: "A comprehensive multi-modal AI assistant suite fusing an asynchronous FastAPI backend, local Ollama LLMs, ChromaDB vector indexing, and an invisible-to-screenshare PyQt6 desktop copilot with real-time Whisper audio transcription.",
    bullets: [
      "Engineered an asynchronous FastAPI backend orchestrating Celery workers, Redis queues, and ChromaDB vector retrieval for conversational RAG and long-term memory management.",
      "Architected a stealth PyQt6 Windows desktop copilot utilizing Win32 display affinity APIs to remain invisible during screen sharing while transcribing live meeting audio via Whisper.",
      "Integrated local Ollama LLM execution pipelines eliminating third-party API dependencies and guaranteeing zero data exfiltration for sensitive user workflows.",
      "Built a reactive Next.js frontend with Tailwind CSS and TypeScript featuring multi-session chat history, document parsing, and real-time streaming completions."
    ],
    tech: ["FASTAPI", "NEXT.JS", "PYTHON", "PYQT6", "OLLAMA", "WHISPER", "CHROMADB", "CELERY", "REDIS", "POSTGRESQL", "DOCKER"],
    github: "https://github.com/Me-HimanshuJain/HJAI",
    live: "#",
    roles: ['genai', 'ai-ml', 'sde-webd']
  },
  {
    id: 2,
    title: "FACE ATTENDANCE SYSTEM",
    category: "COMPUTER VISION • DEEP LEARNING • BIOMETRICS",
    affiliation: "CAMPUS AUTOMATION & EMBEDDED EDGE VISION",
    metric: "99.86% Recognition Accuracy · ONNX Anti-Spoofing Model Integration",
    summary: "Automated, full-stack biometric attendance platform combining DeepFace, OpenCV, and a custom ONNX anti-spoofing neural network to eliminate proxy attendance with real-time video verification and administrative analytics.",
    bullets: [
      "Implemented multi-stage face recognition pipeline utilizing OpenCV Haar Cascades/MediaPipe for face alignment and DeepFace for deep facial embedding extraction.",
      "Integrated a pre-trained ONNX anti-spoofing classification network (anti_spoofing_model.onnx) running on ONNXRuntime to prevent photo, video, and mask presentation attacks.",
      "Developed a high-throughput FastAPI REST API with JWT authentication, role-based access control, automated absence tracking, and CSV/PDF report generation.",
      "Created a responsive administrative dashboard in React 19 + Vite featuring live webcam verification, student registration workflows, and real-time attendance analytics."
    ],
    tech: ["PYTHON", "FASTAPI", "DEEPFACE", "OPENCV", "ONNXRUNTIME", "TENSORFLOW", "MEDIAPIPE", "REACT 19", "SQLITE", "TAILWIND CSS"],
    github: "https://github.com/Me-HimanshuJain/Face_recognition",
    live: "#",
    roles: ['ai-ml', 'sde-webd']
  },
  {
    id: 3,
    title: "HIREBLIND – COMPLIANT BLIND RECRUITMENT PLATFORM",
    category: "NLP • REGULATORY COMPLIANCE • ETHICAL AI",
    affiliation: "EU AI ACT COMPLIANT (ARTS 5, 10, 13, 14) RECRUITMENT PIPELINE",
    metric: "100% PII Anonymization · Transparent Confidence & Explainability Scoring",
    summary: "Enterprise-grade blind hiring workflow platform engineered to minimize unconscious hiring bias through automated PII redaction, objective qualification scoring, explainability tags, and immutable audit logging.",
    bullets: [
      "Built an automated PII anonymization pipeline scrubbing names, genders, contact info, ethnic indicators, and graduation years before recruiter evaluation.",
      "Designed an algorithmic scoring engine benchmarking candidate qualifications directly against job descriptions, outputting calibrated confidence scores and explainability tags.",
      "Enforced compliance with EU AI Act High-Risk AI System standards (Articles 5, 10, 13, and 14) via tamper-evident audit trails recording all rank overrides and identity reveals.",
      "Shipped a modern React 19 and FastAPI application with role-based permissions (Admins vs. Recruiters) and one-click cloud deployment on Render."
    ],
    tech: ["FASTAPI", "PYTHON", "REACT 19", "VITE", "TAILWIND CSS", "SQLITE", "POSTGRESQL", "SQLALCHEMY", "JWT", "ETHICAL AI"],
    github: "https://github.com/Me-HimanshuJain/HireBlind",
    live: "https://hireblind.onrender.com",
    roles: ['ai-ml', 'sde-webd']
  },
  {
    id: 4,
    title: "SPECS_BLIND – SMART GOGGLES FOR VISUALLY IMPAIRED",
    category: "COMPUTER VISION • EMBEDDED AI • ASSISTIVE TECH",
    affiliation: "EDGE WEARABLE HARDWARE & PSYCHOACOUSTIC AUDIO DESIGN",
    metric: "60 FPS Async Inference · 80 Object Classes · 4-Tier Spatial Audio Feedback",
    summary: "Real-time assistive wearable vision system combining YOLOv8 edge detection, 7-state Kalman filter obstacle tracking, 4-tier psychoacoustic audio alerts, and tactile haptics to empower visually impaired navigation.",
    bullets: [
      "Architected an asynchronous threaded vision pipeline running YOLOv8n object detection across 80 COCO classes with Canny edge contour wall/barrier detection.",
      "Implemented a 7-state Kalman filter and Hungarian IoU tracking engine (SORT-inspired) to calculate relative velocities, heading vectors, and time-to-collision.",
      "Developed a 4-tier priority audio feedback queue modulating speech rate from 120 WPM (distant info) up to 200 WPM (urgent stop <0.6m) with per-category anti-spam cooldowns.",
      "Engineered multi-signature haptic vibration alert profiles (Emergency SOS, Directional Nudges, Proximity Pulses) and an adaptive power governor dynamically switching between Eco and Performance modes."
    ],
    tech: ["PYTHON", "YOLOV8", "PYTORCH", "OPENCV", "KALMAN FILTER", "HAPTICS", "PYTTSX3", "THREADING", "EMBEDDED SYSTEMS"],
    github: "https://github.com/Me-HimanshuJain/Specs_Blind",
    live: "#",
    roles: ['ai-ml', 'data-science']
  },
  {
    id: 5,
    title: "SAFENET AI – REAL-TIME CAMPUS SECURITY PLATFORM",
    category: "MULTI-MODAL AI • COMPUTER VISION • GEOSPATIAL",
    affiliation: "AUTONOMOUS THREAT PERCEPTION & ZERO-STORAGE PRIVACY",
    metric: "Multi-Modal Risk Fusion · Sub-Second Incident Dispatch · 100% Zero-Storage RAM Pipeline",
    summary: "Real-time physical security platform transforming passive CCTV monitoring into an autonomous threat perception network by fusing MediaPipe pose anomaly detection, acoustic distress decibel tracking, and mobile silent SOS signals.",
    bullets: [
      "Architected a multi-modal risk fusion engine correlating computer vision posture anomalies (falls, aggressive motion, loitering) with acoustic decibel spikes (>= -18 dB) and silent SOS triggers.",
      "Implemented real-time responder dispatch routing using Haversine geospatial proximity optimization and an automated 30-second escalation engine.",
      "Enforced Privacy-by-Design with an ephemeral, zero-storage processing pipeline where video frames and audio buffers are evaluated purely in volatile RAM and never written to disk.",
      "Developed a full Security Operations Center (SOC) console with live 4-camera RTSP grid, interactive risk heatmaps, guard mobile consoles, and WebSocket alert broadcasts."
    ],
    tech: ["REACT 19", "FASTAPI", "EXPRESS.JS", "NODE.JS", "MEDIAPIPE POSE", "OPENCV", "POSTGRESQL", "DRIZZLE ORM", "WEBSOCKET", "TAILWIND CSS"],
    github: "https://github.com/Me-HimanshuJain/SafeNet-AI",
    live: "#",
    roles: ['ai-ml', 'sde-webd']
  },
  {
    id: 6,
    title: "SHRAMIK-SETU – GIG WORKER EMPOWERMENT PLATFORM",
    category: "FULL-STACK • FINTECH • INCLUSIVE AI",
    affiliation: "INDIA INFORMAL ECONOMY & VERIFIABLE DIGITAL IDENTITY",
    metric: "Verifiable QR Digital ID · Fair 5%-8% Commission · Regional Multilingual AI Assistant",
    summary: "Full-stack inclusive web platform empowering India's informal tradespeople and daily-wage laborers with verifiable digital work credentials, transparent commission pricing, digital wallets, and multilingual AI voice guidance.",
    bullets: [
      "Created a tamper-proof Digital Worker ID system with holographic styling, scannable QR verification, certified skill tiers (Gold/Silver), and dynamic trust scoring out of 100.",
      "Pioneered transparent commission choices giving gig workers the freedom between fair 5%-8% per-transaction pay-as-you-earn models and fixed monthly subscription plans.",
      "Integrated an intelligent multilingual AI assistant powered by OpenAI API providing speech-to-text guidance in regional Indian languages for low-literacy users.",
      "Built comprehensive microloan eligibility calculators, job completion logging, and secure digital wallet management using Express.js, PostgreSQL, and Drizzle ORM."
    ],
    tech: ["REACT 18", "TYPESCRIPT", "VITE", "EXPRESS.JS", "POSTGRESQL", "DRIZZLE ORM", "TAILWIND CSS", "OPENAI API", "QR CODE"],
    github: "https://github.com/Me-HimanshuJain/Shram-App",
    live: "#",
    roles: ['sde-webd', 'genai']
  },
  {
    id: 7,
    title: "BACKROUTE BHARAT – IMPACT BACKHAUL NETWORK",
    category: "LOGISTICS OPTIMIZATION • GIS • CLIMATE TECH",
    affiliation: "NATIONAL FREIGHT CAPACITY MATCHING & CO2 AVOIDANCE ENGINE",
    metric: "ImpactMatch™ Corridor Vectoring · <=20km Max Detour · 0.162 kg CO2 Saved/Tonne-km",
    summary: "Deterministic capacity matching and logistics routing platform algorithmically discovering empty commercial truck return runs on India's arterial highway corridors (e.g., Delhi-Jaipur NH-48) to transport subsidized humanitarian cargo.",
    bullets: [
      "Developed the ImpactMatch™ deterministic optimization engine executing spatial deviation vectoring and great-circle Haversine corridor alignment under strict <=20km detour constraints.",
      "Automated compliance verification pipelines against national regulatory databases including VAHAN, Parivahan, and NGO DARPAN to guarantee cargo and carrier legitimacy.",
      "Implemented real-time dynamic cargo matching calculating payload mass (kg), volumetric displacement (m³), and certified carbon emission reductions (0.162 kg CO2 / tonne-km).",
      "Built a cloud-native architecture utilizing Next.js 16, React 19, FastAPI, PostGIS geospatial database, Redis caching, and Docker Compose with telematics API ingestion."
    ],
    tech: ["NEXT.JS 16", "REACT 19", "FASTAPI", "POSTGIS", "POSTGRESQL 15", "REDIS 7", "DOCKER", "TAILWIND CSS V4", "GEOSPATIAL ALGORITHMS"],
    github: "https://github.com/Me-HimanshuJain/BackRoute_Bharat",
    live: "#",
    roles: ['data-science', 'sde-webd', 'ai-ml']
  },
  {
    id: 8,
    title: "DIGITAL HEROES – GOLF PERFORMANCE & CHARITY DRAW PLATFORM",
    category: "WEB3 / FINTECH • 3D VISUALIZATION • GAMIFICATION",
    affiliation: "SUBSCRIPTION PLATFORM & CHARITY FUNDRAISING ENGINE",
    metric: "Next.js 14 & Three.js 3D WebGL · Stripe Automated Webhook Engine · Supabase SSR",
    summary: "Subscription-driven web platform combining golf handicap/score tracking, monthly draw-based charity prize pools, and interactive 3D WebGL visualizations, deliberately crafted with cutting-edge non-traditional aesthetics.",
    bullets: [
      "Implemented an interactive 3D WebGL user experience using Three.js, @react-three/fiber, and @react-three/drei paired with fluid Framer Motion micro-interactions.",
      "Integrated Stripe billing and webhook synchronization managing recurring monthly/annual subscription tiers, automatic ticket generation, and draw prize pools.",
      "Engineered server-side authentication, row-level security policies, and real-time database transactions with Supabase SSR and PostgreSQL.",
      "Built comprehensive user and administrative dashboards featuring Stableford score auditing, winner cryptographic verification, and charity disbursement analytics."
    ],
    tech: ["NEXT.JS 14", "REACT 18", "THREE.JS", "REACT THREE FIBER", "SUPABASE", "STRIPE API", "POSTGRESQL", "TAILWIND CSS", "FRAMER MOTION"],
    github: "https://github.com/Me-HimanshuJain/Digital_heroes",
    live: "#",
    roles: ['sde-webd']
  },
  {
    id: 9,
    title: "AMAZONHELP INTENT SYSTEM – FEW-SHOT NLP CLASSIFIER",
    category: "NLP • LLM CLASSIFICATION • VECTOR RETRIEVAL",
    affiliation: "HIVER SDE ASSIGNMENT & ENTERPRISE CUSTOMER SUPPORT AI",
    metric: "4.41/5.0 LLM Judge Score · 0.619 Hit@3 Retrieval · NVIDIA NIM Nemotron-3 Super",
    summary: "Enterprise intent classification and historical response retrieval pipeline for Amazon customer support tweets, combining few-shot classification via NVIDIA NIM LLMs and dense FAISS vector search across 8,000 threads.",
    bullets: [
      "Architected an intent taxonomy derivation pipeline using SentenceTransformers and K-Means clustering across 3,000+ real-world customer service tweets.",
      "Implemented few-shot LLM intent classification utilizing NVIDIA NIM free-tier microservices (nvidia/nemotron-3-super-120b-a12b) with automated fallback handling.",
      "Built a sub-millisecond similarity retrieval engine using FAISS indexing 8,000 customer-agent conversation threads to recommend past verified responses.",
      "Validated model generalization with automated benchmark suites, cross-domain Banking77 evaluations, and rigorous LLM-as-a-judge scoring (4.41/5.0)."
    ],
    tech: ["PYTHON", "NVIDIA NIM", "FAISS", "SENTENCE-TRANSFORMERS", "SCIKIT-LEARN", "K-MEANS", "REACT", "NLP", "PYTEST"],
    github: "https://github.com/Me-HimanshuJain/Hiver",
    live: "#",
    roles: ['genai', 'ai-ml', 'data-science']
  },
  {
    id: 10,
    title: "AI RESUME ANALYZER & ATS CHECKER",
    category: "NLP • SEMANTIC EMBEDDINGS • RECRUITMENT TECH",
    affiliation: "ASYNC DOCUMENT PARSING & RESUME OPTIMIZATION PIPELINE",
    metric: "Dual TF-IDF & SentenceTransformer Engine · pgvector Embeddings · 0-100 ATS Score",
    summary: "Full-stack career optimization platform parsing multi-format resumes, benchmarking them against job descriptions via dual lexical & semantic embeddings, and generating personalized ATS scores and missing skill insights.",
    bullets: [
      "Developed multi-format document parser using pdfplumber and python-docx coupled with spaCy custom Named Entity Recognition (NER) for skill and credential extraction.",
      "Built a hybrid matching engine fusing exact TF-IDF lexical frequency with SentenceTransformers deep contextual semantic embeddings in PostgreSQL (pgvector).",
      "Implemented an asynchronous Celery and Redis job processing queue to execute heavy NLP parsing and matching workflows without blocking API threads.",
      "Designed an ATS scoring algorithm (0-100) factoring in keyword overlap, structural hierarchy, and missing qualification analysis with OpenAI resume rewrite recommendations."
    ],
    tech: ["FASTAPI", "REACT", "VITE", "PYTHON", "SPACY", "SENTENCE-TRANSFORMERS", "POSTGRESQL", "PGVECTOR", "CELERY", "REDIS", "TAILWIND CSS"],
    github: "https://github.com/Me-HimanshuJain/AI_analyzer",
    live: "#",
    roles: ['ai-ml', 'genai', 'sde-webd']
  },
  {
    id: 11,
    title: "AI HEALTHCARE PLATFORM & TELEHEALTH ENGINE",
    category: "HEALTHCARE TECH • PREDICTIVE ML • FULL-STACK",
    affiliation: "EXPLAINABLE AI CLINICAL RISK & TELECONSULTATION",
    metric: "Logistic Regression Risk Predictor · Jitsi Auto-Consultations · Emergency Alerting",
    summary: "Full-stack clinical management ecosystem featuring appointment scheduling, automated Jitsi telehealth rooms, logistic regression disease prediction with feature explainability, and automated emergency clinician alerts.",
    bullets: [
      "Developed an explainable AI disease prediction microservice in FastAPI providing patients with transparent clinical feature contribution percentages.",
      "Integrated automated video teleconsultation room provisioning via Jitsi Meet API alongside prescription tracking and medical record file storage.",
      "Implemented an automated emergency alert pipeline triggering priority clinician dispatch notifications whenever predicted patient disease risk exceeds 80%.",
      "Built a multi-tier microservice architecture linking Node.js/Express, Python FastAPI, React Vite frontend, MongoDB, and Nginx reverse proxy within Docker Compose."
    ],
    tech: ["NODE.JS", "EXPRESS.JS", "FASTAPI", "REACT", "MONGODB", "PYTHON", "SCIKIT-LEARN", "JITSI MEET API", "DOCKER", "NGINX"],
    github: "https://github.com/Me-HimanshuJain/healthcare-app",
    live: "#",
    roles: ['data-science', 'sde-webd']
  },
  {
    id: 12,
    title: "WANDERLUST – TRAVEL & TOURISM WEB PORTAL",
    category: "WEB DEVELOPMENT • FULL-STACK • E-COMMERCE",
    affiliation: "DYNAMIC BOOKING ENGINE & TRIP PLANNING PORTAL",
    metric: "Responsive Bootstrap 5 UI · Dynamic Trip Planning · Relational Booking Engine",
    summary: "Comprehensive travel discovery and booking web application featuring curated vacation packages, interactive carousels, dynamic itinerary date validators, and relational database reservation management.",
    bullets: [
      "Built a responsive, multi-page frontend in HTML5, CSS3, JavaScript (ES6+), and Bootstrap 5 featuring dynamic holiday package galleries and destination carousels.",
      "Developed a PHP 8.x backend managing user registrations, transit inquiries (flight, train, bus), customer feedback, and secure session management.",
      "Architected a normalized MySQL database schema handling inquiry dispatching, package inventory, and customer contact data with prepared statements.",
      "Implemented client-side input sanitization, dynamic trip date range calculations, and interactive booking modal validation."
    ],
    tech: ["PHP", "MYSQL", "BOOTSTRAP 5", "JAVASCRIPT", "HTML5", "CSS3", "RESPONSIVE DESIGN"],
    github: "https://github.com/Me-HimanshuJain/WanderLust",
    live: "#",
    roles: ['sde-webd']
  },
  {
    id: 13,
    title: "BLINDASSISTAPP – SMART GOGGLE ANDROID APP",
    category: "MOBILE DEVELOPMENT • ON-DEVICE ML • ACCESSIBILITY",
    affiliation: "NATIVE ANDROID KOTLIN & EDGE TENSORFLOW LITE INFERENCE",
    metric: "150-200ms Edge Latency · USB-OTG Camera2 Pipeline · Dual Guardian Pairing Mode",
    summary: "Native Kotlin Android companion application connecting to smart glasses via USB-OTG, executing on-device TensorFlow Lite obstacle detection, and delivering real-time Android TextToSpeech navigational guidance.",
    bullets: [
      "Implemented external hardware camera streaming using Android Camera2 API and USB-OTG frame capture for hands-free obstacle monitoring.",
      "Integrated on-device machine learning inference using TensorFlow Lite (TFLite) and an embedded mobile Kalman filter tracker achieving sub-200ms end-to-end latency.",
      "Engineered dual user persona flows ('Visually Impaired User' vs. 'Guardian') with emergency contact integration and automated location broadcast capabilities.",
      "Built reactive Android UI using modern MVVM architecture, Kotlin Coroutines for asynchronous ML execution, and native Android TextToSpeech audio feedback."
    ],
    tech: ["KOTLIN", "ANDROID SDK", "CAMERA2 API", "TENSORFLOW LITE", "TFLITE", "TEXTTOSPEECH", "JAVA 17", "GRADLE", "USB-OTG"],
    github: "https://github.com/Me-HimanshuJain/android_app1",
    live: "#",
    roles: ['ai-ml', 'sde-webd']
  }
];

export const experience = [
  {
    id: 1,
    role: "AI/ML Intern",
    company: "Smarted",
    duration: "Dec 2025 - Feb 2026",
    location: "Remote",
    technologies: [
      "Python",
      "Scikit-learn",
      "TensorFlow",
      "Pandas",
      "NumPy",
      "Data Preprocessing",
      "Feature Engineering",
      "Model Optimization"
    ],
    description: [
      "Engineered machine learning pipelines for preprocessing, feature engineering, model training, and evaluation using Scikit-learn, TensorFlow, Pandas, and NumPy.",
      "Improved predictive model performance through feature selection, hyperparameter tuning, & model optimization."
    ]
  },
  {
    id: 2,
    role: "Full-Stack Development Intern",
    company: "Scrum Digitals Pvt. Ltd",
    duration: "Jun 2025 - Jul 2025",
    location: "Jaipur, India",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JavaScript",
      "Tailwind CSS",
      "Full-Stack Development"
    ],
    description: [
      "Crafted 3+ responsive full-stack web applications using React.js, Node.js, Express.js, and MongoDB.",
      "Developed 8+ REST APIs for frontend-backend communication, reducing response latency by 30%."
    ]
  },
  {
    id: 3,
    role: "Frontend, Backend, Database Intern",
    company: "Kistechnosoftware Pvt. Ltd.",
    duration: "Jun 2024",
    location: "Jaipur, India",
    technologies: [
      "PHP",
      "MySQL",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Database Management",
      "Web Testing & Debugging"
    ],
    description: [
      "Created responsive web interfaces using HTML, CSS, Bootstrap, JavaScript, PHP, and MySQL.",
      "Performed debugging, testing, and deployment support for production web applications."
    ]
  }
];

export const competitions = [
  {
    award: "Top 8 Teams",
    title: "InnoViction 2025"
  },
  {
    award: "Top 16 Teams",
    title: "IdeaThon 2026"
  },
  {
    award: "Top 30 Teams",
    title: "HackArya Verse 2.0"
  },
  {
    award: "Team Lead",
    title: "Smart India Hackathon 2025"
  },
  {
    award: "Round 2 Qualifier",
    title: "Tata Imagination Challenge 2026"
  },
  {
    award: "Silver Distinction",
    title: "NPTEL Soft Skills & Professional Communication"
  },
  {
    award: "Entrant & Participant",
    title: "Amazon ML Challenge 2026 · EY Techathon · Adobe Hackathon · GDGOC TechSprint"
  }
];

export const certifications = [
  {
    issuer: "Anthropic",
    name: "AI Fluency",
    file: "Anthropic- AI Fluency.pdf",
    url: "https://github.com/Me-HimanshuJain/Certificates/blob/main/Anthropic-%20AI%20Fluency.pdf"
  },
  {
    issuer: "Anthropic",
    name: "Claude 101",
    file: "Anthropic- Claude 101.pdf",
    url: "https://github.com/Me-HimanshuJain/Certificates/blob/main/Anthropic-%20Claude%20101.pdf"
  },
  {
    issuer: "CISCO",
    name: "Intro to Data Science",
    file: "CISCO- Intro to Data Science.pdf",
    url: "https://github.com/Me-HimanshuJain/Certificates/blob/main/CISCO-%20Intro%20to%20Data%20Science.pdf"
  },
  {
    issuer: "Elements of AI",
    name: "Introduction to AI",
    file: "Elements of AI.png",
    url: "https://github.com/Me-HimanshuJain/Certificates/blob/main/Elements%20of%20AI.png"
  },
  {
    issuer: "Google Cloud",
    name: "Prompt Design in Vertex AI Skill Badge",
    file: "Google Cloud- Prompt Design in Vertex AI Skill Badge.png",
    url: "https://github.com/Me-HimanshuJain/Certificates/blob/main/Google%20Cloud-%20Prompt%20Design%20in%20Vertex%20AI%20Skill%20Badge.png"
  },
  {
    issuer: "IBM",
    name: "AI Fundamentals: Foundations for Understanding AI",
    file: "IBM- AI Fundamentals Foundations for Understanding AI.pdf",
    url: "https://github.com/Me-HimanshuJain/Certificates/blob/main/IBM-%20AI%20Fundamentals%20Foundations%20for%20Understanding%20AI.pdf"
  },
  {
    issuer: "IBM",
    name: "Artificial Intelligence Fundamentals",
    file: "IBM- Artificial Intelligence Fundamentals.pdf",
    url: "https://github.com/Me-HimanshuJain/Certificates/blob/main/IBM-%20Artificial%20Intelligence%20Fundamentals.pdf"
  },
  {
    issuer: "IBM",
    name: "Spectrum Storage for AI & Big Data Fundamentals",
    file: "IBM- Spectrum Storage for AI and Big Data Fundamentals.pdf",
    url: "https://github.com/Me-HimanshuJain/Certificates/blob/main/IBM-%20Spectrum%20Storage%20for%20AI%20and%20Big%20Data%20Fundamentals.pdf"
  },
  {
    issuer: "IBM",
    name: "Storage for AI & Big Data Introduction",
    file: "IBM- Storage for AI and Big Data Introduction.pdf",
    url: "https://github.com/Me-HimanshuJain/Certificates/blob/main/IBM-%20Storage%20for%20AI%20and%20Big%20Data%20Introduction.pdf"
  },
  {
    issuer: "Microsoft",
    name: "AI Concepts for Developers & Technology Professionals Badge",
    file: "Microsoft- AI Concepts for Developers and Technology Prefessionals.png",
    url: "https://github.com/Me-HimanshuJain/Certificates/blob/main/Microsoft-%20AI%20Concepts%20for%20Developers%20and%20Technology%20Prefessionals.png"
  },
  {
    issuer: "Microsoft",
    name: "AI Fluency Badge",
    file: "Microsoft- AI Fluency.png",
    url: "https://github.com/Me-HimanshuJain/Certificates/blob/main/Microsoft-%20AI%20Fluency.png"
  },
  {
    issuer: "Microsoft",
    name: "Create Vision Models with Azure AI Custom Vision Badge",
    file: "Microsoft- Create Vision Models with Azure AI Custom Vision.png",
    url: "https://github.com/Me-HimanshuJain/Certificates/blob/main/Microsoft-%20Create%20Vision%20Models%20with%20Azure%20AI%20Custom%20Vision.png"
  },
  {
    issuer: "Microsoft",
    name: "Develop Computer Vision Solutions in Azure Badge",
    file: "Microsoft- Develop Computer Vision Solutions in Azure (Deprecated).png",
    url: "https://github.com/Me-HimanshuJain/Certificates/blob/main/Microsoft-%20Develop%20Computer%20Vision%20Solutions%20in%20Azure%20(Deprecated).png"
  },
  {
    issuer: "Microsoft",
    name: "Develop Computer Vision Solutions with Microsoft Foundry Badge",
    file: "Microsoft- Develop Computer Visions Solutions with Microsoft Foundry.png",
    url: "https://github.com/Me-HimanshuJain/Certificates/blob/main/Microsoft-%20Develop%20Computer%20Visions%20Solutions%20with%20Microsoft%20Foundry.png"
  },
  {
    issuer: "NVIDIA",
    name: "Getting Started with AI on Jetson Nano",
    file: "NVIDIA- Getting Started with AI on Jetson Nano.pdf",
    url: "https://github.com/Me-HimanshuJain/Certificates/blob/main/NVIDIA-%20Getting%20Started%20with%20AI%20on%20Jetson%20Nano.pdf"
  }
];

export const honours = [
  {
    id: 1,
    title: "Smart India Hackathon Winner",
    issuer: "Ministry of Education",
    date: "2023",
    description: "Won first prize for developing an AI-driven educational tool."
  },
  {
    id: 2,
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2024",
    description: "Associate level certification for cloud architecture."
  }
];

export const resumes = [
  { id: 'sde-webd', title: 'SDE / Web Dev Resume', link: '/resume-sde.pdf' },
  { id: 'ai-ml', title: 'AI / ML Resume', link: '/resume-ai.pdf' },
  { id: 'genai', title: 'Generative AI Resume', link: '/resume-genai.pdf' },
  { id: 'data-science', title: 'Data Science Resume', link: '/resume-ds.pdf' }
];
