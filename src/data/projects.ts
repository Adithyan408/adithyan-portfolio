import pulseAnalyticsImg from '../assets/projects/pulse-analytics.jpg'
import devdockCloudImg from '../assets/projects/devdock-cloud.jpg'
import auraCommerceImg from '../assets/projects/aura-commerce.jpg'
import readnestImg from '../assets/projects/readnestImg.png'

export interface Project {
  id: string
  heading: string
  tagline: string
  description: string
  image: string
  githubLink: string
  liveLink: string
  icon: string
  coverColor: string
  technologies: string[]
  category: string
  year: string
  role: string
  status: 'Completed' | 'Active' | 'In Progress'
  projectType: 'Freelance' | 'Personal Project'
  // Extra detailed fields for the Project Details page:
  longDescription: string
  keyFeatures: string[]
  challenges: string[]
  architecture: string
  metrics?: { label: string; value: string }[]
}

export const projects: Project[] = [
  {
    id: 'pulse-analytics',
    heading: 'Pulse Analytics',
    tagline: 'High-throughput real-time telemetry & user session analytics engine.',
    description:
      'A privacy-first analytics platform that aggregates web events, tracks user journeys, and renders interactive performance heatmaps with sub-second latency.',
    image: pulseAnalyticsImg,
    githubLink: 'https://github.com/adithyanks/pulse-analytics',
    liveLink: 'https://pulse-analytics-demo.vercel.app',
    icon: '⚡',
    coverColor: '#10b981',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    category: 'Full-Stack Platform',
    year: '2024',
    role: 'Lead Full-Stack Engineer',
    status: 'Completed',
    projectType: 'Personal Project',
    longDescription:
      'Pulse Analytics was built to solve the performance and privacy bottlenecks of traditional client-side analytics trackers. Designed as an end-to-end telemetry system, it features an ultra-lightweight JavaScript tracking snippet (< 1.8KB) coupled with an ingestion pipeline that handles bursty web traffic without losing data points. The dashboard provides real-time event aggregation, geographic breakdowns, conversion funnels, and customizable alert rules.',
    keyFeatures: [
      'Lightweight client library (< 2KB gzip) with zero third-party dependencies',
      'Real-time streaming ingestion pipeline built on Node.js and PostgreSQL',
      'Custom interactive funnel analysis and page drop-off charts',
      'Cookieless visitor tracking adhering to GDPR and CCPA privacy standards',
      'Role-based access control with granular API key management',
    ],
    challenges:[
      'Handling high-frequency incoming event bursts while maintaining real-time dashboard updates required careful database indexing, batch insertion queues in Node.js, and debounced WebSocket broadcasts to prevent client browser lag.'],
    architecture:
      'Micro-service architecture with a Node.js ingestion gateway, Redis caching buffer, PostgreSQL persistent time-series storage, and a React + Vite dashboard consuming normalized REST and WebSocket endpoints.',
    metrics: [
      { label: 'Payload Size', value: '1.8 KB' },
      { label: 'Event Ingestion', value: '10k+ req/sec' },
      { label: 'Lighthouse Score', value: '99/100' },
      { label: 'Query Latency', value: '< 45ms' },
    ],
  },
  {
    id: 'devdock-cloud',
    heading: 'DevDock Cloud',
    tagline: 'Instant developer environment manager and microservices playground.',
    description:
      'A developer tool for spawning isolated development sandboxes, managing local container configs, and previewing microservice architectures on demand.',
    image: devdockCloudImg,
    githubLink: 'https://github.com/adithyanks/devdock-cloud',
    liveLink: 'https://devdock.io',
    icon: '📦',
    coverColor: '#3b82f6',
    technologies: ['React', 'TypeScript', 'Node.js', 'Docker API', 'GraphQL', 'Express'],
    category: 'Developer Tooling',
    year: '2024',
    role: 'Full-Stack Developer',
    status: 'Completed',
    projectType: 'Personal Project',
    longDescription:
      'DevDock streamlines the onboarding and local testing process for multi-service microservice applications. Instead of configuring local environments manually, developers can spin up containerized development nodes in seconds, manage environment variables, and inspect network traffic between services through an intuitive browser interface.',
    keyFeatures: [
      'One-click sandbox provisioning with pre-configured runtime templates',
      'Real-time container logs streaming and resource consumption monitor',
      'Integrated GraphQL playground for inspecting and testing service mesh schemas',
      'Workspace state export to Docker Compose and Kubernetes manifests',
    ],
    challenges:[
      'Interfacing directly with daemon container sockets securely while rendering live terminal streams in the browser required robust WebSocket multiplexing and strict authentication guards.',
    ],
    architecture:
      'React frontend connected to an Express/Node.js orchestration server utilizing the Docker Engine API and WebSocket streams for real-time terminal and container control.',
    metrics: [
      { label: 'Startup Time', value: '< 2.4s' },
      { label: 'Templates', value: '15+ Runtimes' },
      { label: 'Container Memory', value: '-30% footprint' },
    ],
  },
  {
    id: 'aura-commerce',
    heading: 'Aura Commerce',
    tagline: 'Headless e-commerce storefront with instantaneous search and Stripe checkout.',
    description:
      'An ultra-responsive modern storefront featuring optimistic cart updates, instant faceted search, multi-currency support, and secure checkout.',
    image: auraCommerceImg,
    githubLink: 'https://github.com/adithyanks/aura-commerce',
    liveLink: 'https://aura-store-demo.vercel.app',
    icon: '🛍️',
    coverColor: '#f59e0b',
    technologies: ['React', 'TypeScript', 'Node.js', 'Stripe API', 'Tailwind CSS', 'REST API'],
    category: 'E-Commerce & Web App',
    year: '2023',
    role: 'Frontend & API Architect',
    status: 'Completed',
    projectType: 'Freelance',
    longDescription:
      'Aura Commerce re-imagines the digital shopping experience with zero-friction interactions. Built with an offline-first state machine for shopping cart manipulation, it allows buyers to filter thousands of catalog items instantly with zero layout shifts, concluding with an authenticated Stripe payment flow.',
    keyFeatures: [
      'Sub-50ms instant client-side catalog filtering and search index',
      'Optimistic cart updates with seamless sync to persistent server sessions',
      'Stripe Elements integration supporting Apple Pay, Google Pay, and cards',
      'Responsive product detail view with image zoom and inventory tracking',
    ],
    challenges:[
      'Preventing race conditions during rapid cart item additions and stock validation required optimistic concurrency tokens and transactional inventory reservations.',
    ],
    architecture:
      'Headless architecture with React frontend communicating with Node.js REST services, webhook validation handlers for Stripe, and cached CDN asset delivery.',
    metrics: [
      { label: 'Checkout Conversion', value: '+24%' },
      { label: 'Page Load', value: '0.4s' },
      { label: 'Test Coverage', value: '92%' },
    ],
  },
  {
    id: 'readnest',
    heading: 'ReadNest',
    tagline: 'An E-commerce Book selling application with Blogs',
    description:
      'ReadNest is an e-commerce book-selling application integrated with a blogging platform, designed to build a community for readers and writers.',
    image: readnestImg,
    githubLink: 'https://github.com/adithyanks/readnest',
    liveLink: 'https://www.readnest.shop/',
    icon: '✍️',
    coverColor: '#8b5cf6',
    technologies: ['EJS', 'Node', 'Express', 'MongoDB', 'CSS Modules'],
    category: 'E-commerce ',
    year: '2025',
    role: 'Solo Creator',
    status: 'Completed',
    projectType: 'Personal Project',
    longDescription:
      'ReadNest is an e-commerce book-selling application integrated with a blogging platform, designed to build a community for readers and writers. The platform allows users to explore and purchase books while also providing a space for readers to share their insights, experiences, and book reviews. It also enables writers to publish and share their stories, ideas, and creativity, helping them connect with readers and other writers.',
    keyFeatures: [
      'Online Bookstore: A platform to browse and purchase paperback, Kindle, and audiobook products with search, filters, wishlist, cart, and secure checkout.',
      'Blogging & Reader Community: Enables readers to share book reviews and reading experiences, while writers can publish stories, ideas, and creative content.',
      'User & Order Management: Provides secure authentication, profile and address management, wallet functionality, order tracking, and return, refund, and payment retry workflows.',
      'Admin Dashboard: Allows administrators to manage books, categories, banners, discount vouchers, and orders while monitoring store operations',
      'Book Discovery & Reading Experience: Helps users discover books through categories, collections, languages, and formats, with multilingual support for Malayalam and English and audiobook voice preferences.'
    ],
    challenges:[
      'Challenge: Handling multiple payment methods, payment failures, retries, and maintaining consistent checkout data.',
      'Solution: Implemented structured checkout session management with Razorpay, COD, and wallet payment flows, including payment retry handling.',
    ],
    architecture:
      'ReadNest follows a layered client–server architecture with an MVC-based application structure, integrating e-commerce and blogging modules with MongoDB, caching/session support, and third-party payment and media services.',
    metrics: [
      { label: 'Typing Latency', value: '< 8ms' },
      { label: 'Active Users', value: '1,200+' },
      { label: 'GitHub Stars', value: '140+' },
    ],
  },
]
