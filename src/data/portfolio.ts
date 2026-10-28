/**
 * Central portfolio data — generated from Chitti B's resume & specifications.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Accurately represents Vempada Pola Venkata Kanaka Durga Chitti B with AWS Cloud skills.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const profile = {
  fullName: 'Vempada Pola Venkata Kanaka Durga Chitti B',
  displayName: 'Chitti B Vempada',
  firstName: 'CHITTI B',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A CHITTI B ORIGINAL',
  role: 'Full Stack & ServiceNow Developer',
  tagline: ['Full Stack Developer', 'React.js & Spring Boot', 'Cloud & DevOps (AWS)', 'Certified ServiceNow Developer'],
  intro:
    'Full Stack & Certified ServiceNow Developer with hands-on experience shipping production web applications in React.js, Spring Boot, and Java. Reduced page-load latency by up to 40% on live platforms, architecting enterprise ServiceNow solutions (ITSM, CSM, Flow Designer, GlideRecord), relational database architectures, and deploying across cloud environments like AWS, Railway, and Vercel.',
  location: 'Vijayawada, Andhra Pradesh',
  phone: '+91 7396548360',
  email: 'vchittireddy03@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/vchittibabu',
    github: 'https://github.com/ChittiReddy29',
  },
  resumePdf: '/assets/Chitti_Babu_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Chitti B Vempada',
  },
  interests: ['ServiceNow Enterprise Architecture & Flow Designer', 'AWS Cloud & DevOps', 'Distributed Microservices'],
};

export const education = [
  {
    school: 'Andhra University',
    place: 'Vizag, India',
    degree: 'Bachelor of Technology — Electronics & Communication Engineering',
    period: '2020 – 2024',
    score: 'GPA 7.6 / 10.0',
  },
  {
    school: 'Sri Chaitanya Junior College',
    place: 'Andhra Pradesh, India',
    degree: 'Intermediate — MPC',
    period: '2018 – 2020',
    score: 'GPA 8.36 / 10.0',
  },
  {
    school: 'PV High School',
    place: 'Andhra Pradesh, India',
    degree: 'Secondary School Certificate (SSC)',
    period: '2018',
    score: 'GPA 8.3 / 10.0',
  },
];

export const experience = [
  {
    company: 'Sandspace Technology Pvt Ltd',
    role: 'Full Stack Developer',
    place: 'Vijayawada, India',
    period: 'Mar 2026 – Present',
    points: [
      'Architect and maintain 2 production client platforms, pairing React.js front-end layers with Java-based microservices to power full-stack delivery.',
      'Build the client-facing course discovery and enrollment interface for TEGA (tegaedu.com); apply React lazy loading and memoization alongside secure API integrations to reduce page-load latency by up to 40% and stabilize data flow under production load.',
      'Develop the Sahasra Exports & Imports enterprise web portal, featuring 3 integrated modules – dynamic product catalogs, client inquiry forms, and third-party logistics tracking – via REST API integration.',
      'Design relational database schemas across both production applications and optimize MySQL queries, streamlining data retrieval and reducing redundant query overhead.',
      'Collaborate with a cross-functional team of 6-10 in Agile sprints to translate business requirements into technical specifications, conduct peer code reviews, and ship iterative production releases.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'tega-platform',
    title: 'TEGA – Educational Platform',
    year: '2026',
    genre: 'Full Stack • EdTech • Performance',
    logline: 'Client-facing educational platform (tegaedu.com) with dynamic course discovery and 40% lower page-load latency.',
    stack: ['React.js', 'Spring Boot', 'Java', 'REST APIs', 'Atomic UI', 'Responsive Design'],
    build: [
      'Architected and delivered the client-facing course discovery and enrollment interface for TEGA (tegaedu.com), connecting React.js with robust Java Spring Boot microservices.',
      'Authored a custom, reusable UI component library built on atomic design principles, ensuring seamless cross-browser accessibility and accelerating future feature delivery.',
      'Applied React lazy loading and memoization alongside secure API integrations to reduce page-load latency by up to 40% and stabilize data flow under production traffic.',
    ],
    features: [
      'Dynamic gallery systems & modular course structures',
      'Streamlined student registration pipeline',
      'Custom reusable UI component library based on atomic design',
      'React lazy loading, memoization & performance tuning',
      'Cross-browser accessibility and production API integrations',
    ],
    metrics: [
      { value: '40%', label: 'lower page-load latency' },
      { value: '2', label: 'production client platforms' },
      { value: '100%', label: 'cross-browser accessibility' },
      { value: '6–10', label: 'cross-functional team size' },
      { value: 'Production', label: 'deployed at tegaedu.com' },
    ],
    github: 'https://github.com/ChittiReddy29',
    palette: crimson,
    motif: 'flow',
  },
  {
    id: 'sahasra-portal',
    title: 'Sahasra Exports & Imports Portal',
    year: '2026',
    genre: 'Enterprise • Logistics • Spring Boot',
    logline: 'Enterprise portal with 3 integrated modules: dynamic catalogs, real-time client inquiries, and freight tracking.',
    stack: ['React.js', 'Java', 'Spring Boot', 'MySQL', 'REST APIs', 'Performance Optimization'],
    build: [
      'Delivered a high-performance business web application supporting full catalog displays, real-time client inquiry processing, and dynamic freight calculations.',
      'Engineered 3 integrated modules – dynamic product catalogs, client inquiry forms, and third-party logistics tracking – via REST API integration.',
      'Designed relational database schemas and optimized MySQL queries, eliminating redundant query overhead and streamlining record retrieval.',
      'Implemented lazy-loading splits and data-caching mechanisms to optimize performance across low-bandwidth network environments.',
    ],
    features: [
      'Dynamic product catalogs with lazy loading',
      'Real-time client inquiry submission & status tracking',
      'Third-party logistics tracking & dynamic freight calculations',
      'Relational MySQL schema optimization & query indexing',
      'Low-bandwidth network data caching',
    ],
    metrics: [
      { value: '3', label: 'integrated enterprise modules' },
      { value: '0', label: 'redundant query overhead' },
      { value: 'Real-time', label: 'freight calculations & tracking' },
      { value: 'Optimized', label: 'for low-bandwidth networks' },
      { value: 'Enterprise', label: 'production business portal' },
    ],
    github: 'https://github.com/ChittiReddy29',
    palette: amber,
    motif: 'tenants',
  },
  {
    id: 'aws-cloud-devops',
    title: 'AWS Cloud & DevOps Platform',
    year: '2026',
    genre: 'AWS • Cloud • Docker • CI/CD',
    logline: 'Production-ready cloud architecture and automated Jenkins CI/CD pipelines hosting microservices on AWS.',
    stack: ['AWS (EC2, S3, CloudFront)', 'Docker', 'Jenkins', 'CI/CD Pipelines', 'Railway', 'Vercel'],
    build: [
      'Configured automated CI/CD pipelines with Jenkins and Docker containerization for seamless deployment of Java Spring Boot microservices and React frontends.',
      'Provisioned AWS cloud infrastructure with EC2 instances, S3 bucket storage for static media, CloudFront CDN, and secure IAM policies.',
      'Achieved zero-downtime rolling updates and optimized cloud deployment overhead across AWS, Railway, Vercel, and Render.',
    ],
    features: [
      'Automated Jenkins CI/CD pipeline triggers',
      'Docker multi-stage container builds',
      'AWS EC2 microservice compute & S3 storage',
      'CloudFront CDN edge caching & SSL delivery',
      'Multi-cloud hosting across AWS, Railway, Vercel & Render',
    ],
    metrics: [
      { value: 'Zero-downtime', label: 'continuous deployments' } ,
      { value: 'AWS Cloud', label: 'EC2, S3, IAM & CloudFront' },
      { value: 'Dockerized', label: 'isolated microservice containers' },
      { value: '4 Platforms', label: 'AWS, Railway, Vercel & Render' },
      { value: 'Automated', label: 'Jenkins CI/CD test & build' },
    ],
    github: 'https://github.com/ChittiReddy29',
    palette: ocean,
    motif: 'flow',
  },
  {
    id: 'servicenow-incident-app',
    title: 'React ServiceNow Incident App',
    year: '2025',
    genre: 'ITSM • React.js • REST Integration',
    logline: 'Standalone CRUD application integrated with ServiceNow REST APIs for high-speed incident queries and sorting.',
    stack: ['React.js', 'ServiceNow REST API', 'Axios', 'React Router', 'JavaScript (ES6+)'],
    build: [
      'Created a lightweight, standalone CRUD application integrated with ServiceNow APIs to perform high-speed incident queries and real-time record sorting.',
      'Engineered Axios interceptors for resilient authentication, session management, and error boundary handling.',
      'Delivered instantaneous client-side filtering, searching, and state synchronization across incident priorities.',
    ],
    features: [
      'High-speed incident queries and multi-field search',
      'Real-time record sorting and priority filters',
      'Complete CRUD lifecycle operations on incident records',
      'Secure ServiceNow Table API REST integration',
      'Optimized client-side caching & state sync',
    ],
    metrics: [
      { value: 'Real-time', label: 'incident query and sorting' },
      { value: '100%', label: 'REST API lifecycle coverage' },
      { value: '0-lag', label: 'client-side state updates' },
      { value: 'ITSM', label: 'ServiceNow integration' },
    ],
    github: 'https://github.com/ChittiReddy29',
    palette: violet,
    motif: 'shield',
  },
  {
    id: 'custom-servicenow-enterprise',
    title: 'Custom Enterprise ServiceNow Application',
    year: '2025',
    genre: 'Enterprise ITSM • Flow Designer • Automation',
    logline: 'Scoped enterprise ServiceNow application with custom tables, roles, and automated workflow closure logic.',
    stack: ['ServiceNow', 'JavaScript', 'Flow Designer', 'GlideRecord', 'ACLs', 'Import Sets', 'Update Sets'],
    build: [
      'Constructed scoped applications utilizing custom tables, roles, and workflow-driven closure logic powered by Flow Designer.',
      'Managed structured data migration, transformation maps, and update tracking packages using Update Sets and Import Sets.',
      'Configured role-based access control (ACLs) and business validation rules using UI Policies, Client Scripts, and Business Rules.',
    ],
    features: [
      'Scoped enterprise application architecture with custom tables',
      'Workflow-driven automated closure logic via Flow Designer',
      'Data migration & transformation maps using Import Sets',
      'Package release tracking via Update Sets',
      'Access Control Lists (ACLs) & UI Policies',
    ],
    metrics: [
      { value: 'Automated', label: 'workflow closure via Flow Designer' },
      { value: 'Scoped', label: 'custom enterprise architecture' },
      { value: 'Structured', label: 'data migration & transform maps' },
      { value: 'Certified', label: 'Udemy ServiceNow Developer' },
    ],
    github: 'https://github.com/ChittiReddy29',
    palette: jade,
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'sandspace-prod',
    title: '2 Production Platforms',
    org: 'Sandspace Technology',
    detail: 'Architected and maintain 2 production client platforms, pairing React front-ends with Java microservices.',
    laurel: 'Production Impact',
  },
  {
    id: 'latency-impact',
    title: '40% Latency Reduction',
    org: 'TEGA (tegaedu.com)',
    detail: 'Applied React lazy loading, memoization, and API optimizations to reduce page-load latency by up to 40% under load.',
    laurel: 'Performance',
  },
  {
    id: 'enterprise-modules',
    title: '3 Integrated Modules',
    org: 'Sahasra Exports & Imports',
    detail: 'Engineered dynamic catalogs, client inquiry forms, and real-time logistics tracking via REST API integration.',
    laurel: 'Enterprise Scale',
  },
  {
    id: 'full-stack-java',
    title: 'Full Stack Java Excellence',
    org: 'QSpiders Training',
    detail: 'Comprehensive mastery across Core Java, Advanced Java, Spring Boot, RESTful APIs, and Relational Database Architecture.',
    laurel: 'Full Stack Java',
  },
  {
    id: 'cloud-devops-mastery',
    title: 'AWS & DevOps Platform',
    org: 'AWS • Docker • Jenkins',
    detail: 'Hands-on cloud architecture deploying microservices on AWS (EC2, S3, CloudFront), Docker, and Jenkins CI/CD.',
    laurel: 'Cloud & DevOps',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'QSpiders', name: 'Full Stack Java Development', link: 'https://github.com/ChittiReddy29' },
  { issuer: 'Udemy', name: 'ServiceNow Developer Certification', link: 'https://github.com/ChittiReddy29' },
  { issuer: 'AWS', name: 'AWS Cloud Foundations & Architecture (Basics)', link: 'https://github.com/ChittiReddy29' },
  { issuer: 'Docker', name: 'Docker Containerization & Microservice Architecture', link: 'https://github.com/ChittiReddy29' },
  { issuer: 'Jenkins', name: 'Jenkins CI/CD Pipelines & Automated Deployments', link: 'https://github.com/ChittiReddy29' },
  { issuer: 'ServiceNow', name: 'ITSM, CSM & Flow Designer Fundamentals', link: 'https://github.com/ChittiReddy29' },
  { issuer: 'Spring Boot', name: 'Spring Boot RESTful APIs & Microservices', link: 'https://github.com/ChittiReddy29' },
  { issuer: 'MySQL', name: 'Relational Database Schema Design & Query Optimization', link: 'https://github.com/ChittiReddy29' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend & Java',
    subtitle: 'Microservices & Enterprise APIs',
    skills: [
      { name: 'Core Java', mono: 'Jv', note: 'Primary' },
      { name: 'Advanced Java', mono: 'Aj' },
      { name: 'Spring Boot', mono: 'Sb', note: 'Core' },
      { name: 'RESTful APIs', mono: 'Ap' },
      { name: 'Microservices', mono: 'Ms' },
      { name: 'Swagger', mono: 'Sw' },
      { name: 'System Design', mono: 'Sd' },
    ],
  },
  {
    id: 'servicenow',
    title: 'ServiceNow Platform',
    subtitle: 'Enterprise workflows & automation',
    skills: [
      { name: 'ITSM', mono: 'It', note: 'Certified' },
      { name: 'CSM', mono: 'Cs', note: 'Certified' },
      { name: 'Flow Designer', mono: 'Fd', note: 'Workflows' },
      { name: 'Business Rules', mono: 'Br', note: 'Server' },
      { name: 'Client Scripts', mono: 'Cl' },
      { name: 'Script Includes', mono: 'Si' },
      { name: 'UI Policies & Actions', mono: 'Ui' },
      { name: 'GlideRecord', mono: 'Gr' },
      { name: 'ACLs & Security', mono: 'Ac' },
      { name: 'Import Sets & Transforms', mono: 'Is' },
      { name: 'Update Sets', mono: 'Us' },
      { name: 'ServiceNow REST APIs', mono: 'Sn', note: 'Integration' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend & UI',
    subtitle: 'Modern interfaces & responsive apps',
    skills: [
      { name: 'React.js', mono: 'Re', note: 'Core' },
      { name: 'React Hooks', mono: 'Hk' },
      { name: 'React Router', mono: 'Rr' },
      { name: 'HTML5', mono: 'H5' },
      { name: 'CSS3', mono: 'C3' },
      { name: 'Material UI (MUI)', mono: 'Mu' },
      { name: 'Axios', mono: 'Ax' },
      { name: 'JavaScript (ES6+)', mono: 'Js' },
    ],
  },
  {
    id: 'cloud-aws',
    title: 'Cloud & DevOps (AWS)',
    subtitle: 'Infrastructure & automated delivery',
    skills: [
      { name: 'AWS (Basics & Architecture)', mono: 'Aw', note: 'Cloud' },
      { name: 'AWS EC2 & S3', mono: 'S3' },
      { name: 'CloudFront CDN', mono: 'Cf' },
      { name: 'Docker', mono: 'Dk', note: 'Containers' },
      { name: 'CI/CD Pipelines', mono: 'Ci' },
      { name: 'Jenkins Pipelines', mono: 'Jk' },
      { name: 'Railway / Vercel / Render', mono: 'Dp' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & SQL',
    subtitle: 'Schema architecture & query tuning',
    skills: [
      { name: 'MySQL', mono: 'My', note: 'Production' },
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'SQL', mono: 'Sq' },
      { name: 'Schema Architecture', mono: 'Sa' },
      { name: 'Query Optimization', mono: 'Qo' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Methodology',
    subtitle: 'Engineering practices',
    skills: [
      { name: 'Git & GitHub', mono: 'Gt' },
      { name: 'Postman', mono: 'Pm' },
      { name: 'VS Code', mono: 'Vs' },
      { name: 'Agile / Scrum', mono: 'Ag' },
      { name: 'SDLC', mono: 'Sl' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or experience on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  'Core Java': ['Sandspace Technology 2 production platforms', 'QSpiders Certified Full Stack'],
  'Advanced Java': ['Java-based microservices architecture', 'QSpiders Certified Full Stack'],
  'Spring Boot': ['Sandspace Technology production backend', 'Sahasra Exports & Imports Portal'],
  'RESTful APIs': ['TEGA Platform', 'Sahasra 3 integrated modules', 'ServiceNow REST APIs'],
  Microservices: ['Sandspace Technology production client platforms', 'Dockerized microservice stack'],
  Swagger: ['RESTful API documentation and endpoint testing'],
  'System Design': ['Relational database architecture', 'Multi-tier client platforms'],
  'React.js': ['TEGA Platform (40% latency reduction)', 'Sahasra Portal', 'React ServiceNow App'],
  'React Hooks': ['TEGA lazy loading & state memoization', 'React ServiceNow CRUD App'],
  'React Router': ['TEGA course discovery navigation', 'ServiceNow Incident App'],
  HTML5: ['TEGA modular course structures', 'Sahasra dynamic catalog displays'],
  CSS3: ['Atomic design reusable component library', 'Responsive web applications'],
  'Material UI (MUI)': ['TEGA Educational Platform UI', 'Enterprise client portals'],
  Axios: ['React ServiceNow Incident queries', 'REST API dynamic data fetching'],
  'JavaScript (ES6+)': ['Modern React client development', 'ServiceNow Client Scripts & Flow Designer'],
  'AWS (Basics & Architecture)': ['AWS Cloud deployment', 'EC2 compute & S3 static asset distribution'],
  'AWS EC2 & S3': ['AWS Cloud Infrastructure', 'Secure bucket storage & compute instances'],
  'CloudFront CDN': ['Global edge caching & asset acceleration'],
  Docker: ['Microservice containerization', 'Multi-platform deployment environments'],
  'CI/CD Pipelines': ['Automated build & test pipelines', 'Rolling production deployments'],
  'Jenkins Pipelines': ['Automated CI/CD build pipelines at Sandspace Technology'],
  'Railway / Vercel / Render': ['Production deployment platforms for full-stack apps'],
  MySQL: ['Sahasra Exports & Imports schemas', 'Relational query optimization with 0 redundant overhead'],
  PostgreSQL: ['Relational database design & indexing'],
  SQL: ['Complex queries, joins, and data retrieval optimization'],
  'Schema Architecture': ['Relational schema design across 2 client production platforms'],
  'Query Optimization': ['Streamlined data retrieval and eliminated redundant query overhead'],
  ITSM: ['Udemy ServiceNow Developer Certification', 'Enterprise incident & problem management workflows'],
  CSM: ['ServiceNow Developer Certification', 'Customer case resolution & service management'],
  'Flow Designer': ['Custom Enterprise ServiceNow workflow-driven closure logic', 'Automated triggers'],
  'Business Rules': ['ServiceNow server-side data validation & automated database triggers'],
  'Client Scripts': ['Interactive client-side validations and field auto-population'],
  'Script Includes': ['Reusable server-side JavaScript classes and GlideAjax asynchronous calls'],
  'UI Policies & Actions': ['Dynamic form behavior, mandatory field controls, and custom action buttons'],
  GlideRecord: ['ServiceNow database query scripting, record filtering, and data operations'],
  'ACLs & Security': ['Table and field-level access control lists and role-based permissions'],
  'Import Sets & Transforms': ['Structured data migration, transform maps, and staging tables'],
  'Update Sets': ['Customization packaging, dependency tracking, and release management across instances'],
  'ServiceNow REST APIs': ['React ServiceNow Incident Management App', 'Table API CRUD integration'],
  'Git & GitHub': ['Agile sprint collaboration (6-10 engineers)', 'ChittiReddy29 GitHub portfolio'],
  Postman: ['REST API contract testing & endpoint verification'],
  'VS Code': ['Primary IDE for full-stack development'],
  'Agile / Scrum': ['Sandspace Technology 6-10 member sprint teams', 'Peer code reviews'],
  SDLC: ['End-to-end Agile feature ownership from requirements through production deployment'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2018 – 2020',
    synopsis: 'Schooling and Intermediate education in Andhra Pradesh — building strong analytical foundations in Mathematics, Physics, and Chemistry.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Secondary Chapter',
        description: 'Completed Secondary School Certificate at PV High School with an 8.3/10.0 GPA.',
        tags: ['PV High School', 'SSC', '8.3 GPA'],
        runtime: '2018',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The MPC Discipline',
        description: 'Intermediate education at Sri Chaitanya Junior College, Andhra Pradesh — achieving an 8.36/10.0 GPA in Mathematics, Physics & Chemistry.',
        tags: ['Intermediate', 'MPC', '8.36 GPA'],
        runtime: '2018 – 2020',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'The Engineering Degree',
    period: '2020 – 2024',
    synopsis: 'Bachelor of Technology in Electronics & Communication Engineering at Andhra University, Vizag — systems, signals, and software fundamentals.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Andhra University',
        description: 'B.Tech in Electronics & Communication Engineering at Andhra University, Vizag, graduating with a 7.6/10.0 GPA.',
        tags: ['Andhra University', 'B.Tech ECE', '7.6 GPA'],
        runtime: '2020 – 2024',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'The Software Calling',
        description: 'Deep dive into Core Java, Object-Oriented Programming, Data Structures, and Relational Database Systems.',
        tags: ['Core Java', 'SQL', 'Algorithms'],
        runtime: 'Academic Years',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Full Stack & Enterprise Mastery',
    period: '2024 – 2025',
    synopsis: 'Rigorous Full Stack Java certification at QSpiders and ServiceNow Developer certification.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Full Stack Java Excellence',
        description: 'Intensive Full Stack Java training at QSpiders covering Core & Advanced Java, Spring Boot microservices, and MySQL relational architecture.',
        tags: ['QSpiders', 'Full Stack Java', 'Spring Boot'],
        runtime: 'Certification',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'The ServiceNow Architect',
        description: 'Completed Udemy ServiceNow Developer Certification — mastering ITSM, CSM, Flow Designer, GlideRecord, and ACL security.',
        tags: ['ServiceNow', 'Flow Designer', 'ITSM'],
        runtime: 'Certification',
        palette: violet,
      },
      {
        code: 'S03 E03',
        title: 'The Incident App',
        description: 'Engineered a standalone React ServiceNow Incident Management application with Axios interceptors and live ticket sorting.',
        tags: ['React.js', 'ServiceNow REST API', 'Axios'],
        runtime: '2025',
        palette: ocean,
      },
    ],
  },
  {
    number: 4,
    title: 'Shipping Production Platforms',
    period: 'Mar 2026 – Present',
    synopsis: 'Full Stack Developer at Sandspace Technology Pvt Ltd — architecting client platforms, cutting latency by 40%, and deploying cloud microservices.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Latency Breakthrough',
        description: 'Built the course discovery and enrollment platform for TEGA (tegaedu.com), slashing page-load latency by up to 40% with lazy loading and memoization.',
        tags: ['React.js', 'TEGA', '40% Latency Cut', 'Production'],
        runtime: 'Mar 2026 – Present',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'The Enterprise Portal',
        description: 'Developed Sahasra Exports & Imports web portal featuring 3 integrated modules: dynamic catalogs, real-time client inquiries, and freight calculations.',
        tags: ['Spring Boot', 'MySQL Tuning', 'Logistics'],
        runtime: 'Production',
        palette: amber,
      },
      {
        code: 'S04 E03',
        title: 'Cloud & Dockerized Scale',
        description: 'Automated CI/CD pipelines with Jenkins and Docker containerization, deploying across AWS, Railway, Vercel, and Render.',
        tags: ['AWS', 'Docker', 'Jenkins', 'CI/CD'],
        runtime: 'Cloud Platform',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Expanding frontiers into advanced AWS Cloud Architecture, distributed systems, and enterprise microservice scale.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Cloud & Systems Frontier',
        description: 'Architecting high-availability cloud infrastructure on AWS, event-driven architectures, and large-scale enterprise microservices.',
        tags: ['AWS Cloud', 'Distributed Systems', 'System Design'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Current Role', title: 'Sandspace Tech', detail: 'Full Stack Developer • Vijayawada, India', palette: crimson },
  { label: 'Latency Cut', title: '40% Faster', detail: 'Live education platform at tegaedu.com', palette: amber },
  { label: 'Flagship Platform', title: 'TEGA EdTech', detail: 'Modular discovery • Atomic UI component library', palette: violet },
  { label: 'Enterprise Portal', title: 'Sahasra Portal', detail: '3 integrated modules • Real-time freight tracking', palette: ocean },
  { label: 'Primary Backend', title: 'Spring Boot & Java', detail: 'Core & Advanced Java • Scalable REST microservices', palette: jade },
  { label: 'Cloud Architecture', title: 'AWS & DevOps', detail: 'EC2, S3, CloudFront • Docker & Jenkins CI/CD', palette: ocean },
  { label: 'Platform Certified', title: 'ServiceNow Dev', detail: 'ITSM, CSM, Flow Designer & Scoped Apps', palette: violet },
  { label: 'Relational Database', title: 'MySQL & PostgreSQL', detail: 'Optimized schema design • Zero redundant queries', palette: amber },
  { label: 'Java Certification', title: 'QSpiders Full Stack', detail: 'Complete end-to-end full stack development', palette: crimson },
  { label: 'Engineering Alma Mater', title: 'Andhra University', detail: 'B.Tech in ECE • Vizag (GPA 7.6 / 10.0)', palette: jade },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Identity',
    title: 'Full Stack Developer',
    lines: ['Vempada Pola Venkata Kanaka Durga Chitti B', 'Shipping production applications with React.js, Spring Boot & Java'],
    chips: ['React.js', 'Spring Boot', 'Java', 'AWS'],
  },
  {
    kicker: 'Experience',
    title: 'Sandspace Technology',
    lines: ['Full Stack Developer · March 2026 – Present', 'Architecting 2 production client platforms paired with Java microservices'],
    chips: ['React.js', 'Spring Boot', 'MySQL'],
  },
  {
    kicker: 'Production Impact',
    title: '40% Latency Reduction',
    lines: ['TEGA Educational Platform (tegaedu.com)', 'React lazy loading, memoization & high-throughput API integrations'],
  },
  {
    kicker: 'Enterprise Scale',
    title: 'Sahasra Exports & Imports',
    lines: ['3 integrated modules: Dynamic catalogs, client inquiries, freight tracking', 'Optimized relational MySQL schemas & low-bandwidth caching'],
  },
  {
    kicker: 'Cloud & DevOps',
    title: 'AWS & Docker CI/CD',
    lines: ['AWS (EC2, S3, CloudFront), Docker & automated Jenkins pipelines', 'Zero-downtime deployments on AWS, Railway, Vercel & Render'],
    chips: ['AWS', 'Docker', 'Jenkins', 'CI/CD'],
  },
  {
    kicker: 'Enterprise Workflows',
    title: 'ServiceNow Certified',
    lines: ['Certified ServiceNow Developer · Flow Designer, ITSM & ACLs', 'React ServiceNow Incident App & Custom Scoped Enterprise Workflows'],
  },
  {
    kicker: 'Education',
    title: 'Andhra University',
    lines: ['Bachelor of Technology in Electronics & Communication Engineering', 'Sri Chaitanya Junior College (MPC) · PV High School'],
    chips: ['B.Tech ECE', 'GPA 7.6 / 10.0'],
  },
];

export type ProfileId = 'chitti' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'chitti',
    name: 'Chitti B',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, experience & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Architect',
    blurb: 'Cloud, system design & story highlights',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Experience & background', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • Production & Cloud`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories • AWS & Java`, palette: ocean },
  moments: { nav: 'Moments', card: 'Top Moments', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
