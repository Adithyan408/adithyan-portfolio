import multiDbImg from '../assets/projects/multiDB.png'
import readoneImg from '../assets/projects/readone.png'
import lmsImg from '../assets/projects/lms-home.png'
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
    id: 'mutlidb',
    heading: 'Multi-DB E-Commerce Application',
    tagline: 'The Multi-DB E-Commerce Application is a Node.js and TypeScript backend built around Clean Architecture, Domain-Driven Design (DDD), and Command Query Responsibility Segregation (CQRS).',
    description:
      'A hands-on e-commerce project built to understand and implement multi-database integration using MySQL and MongoDB, with event-driven communication through an Event Bus. Focused on learning database synchronization, event handling, and CQRS architecture.',
    image: multiDbImg,
    githubLink: 'https://github.com/Adithyan408/Multi-DB-Ecom-Application',
    liveLink: 'api-testing',
    icon: '⚡',
    coverColor: '#10b981',
    technologies: ['TypeScript', 'Node.js', 'SQL', 'Prisma', 'Mongoose', 'JWT', 'Express'],
    category: 'Full-Stack Platform',
    year: '2026',
    role: 'Backend Engineer',
    status: 'Completed',
    projectType: 'Personal Project',
    longDescription:
      'A hands-on e-commerce project built to understand and implement multi-database integration using MySQL and MongoDB, with event-driven communication through an Event Bus. Focused on learning database synchronization, event handling, and CQRS architecture. A hands-on e-commerce project exploring multi-database integration using MySQL for transactional data and MongoDB for product catalog reads. Implemented event-driven synchronization through an Event Bus to keep both databases updated, gaining practical experience with polyglot persistence and CQRS architecture.',
    keyFeatures: [
      'Implemented secure authentication with bcrypt password hashing, JWT access tokens, and rotating refresh tokens.',
      'Applied CQRS to separate product write operations in MySQL from read operations in MongoDB.',
      'Implemented event-driven database synchronization using Domain Events and an Event Bus.',
      'Built product catalog APIs for listing and retrieving products using MongoDB read models.',
      'Developed shopping cart management with quantity handling and atomic database transactions.',
      'Applied Clean Architecture, SOLID principles, and dependency injection for modular, maintainable code.'
    ],
    challenges:[
      'Challenge: Keeping MySQL and MongoDB synchronized without creating tight coupling between database operations.',
      'Solution: Implemented CQRS with Domain Events and an Event Bus to decouple write operations from MongoDB read-model updates and synchronize product data.',  
    ],
    architecture:
      'The project follows Clean Architecture with four layers: Domain, Application, Infrastructure, and Presentation, keeping business logic independent of databases and frameworks. It also uses CQRS to separate write operations in MySQL from read operations in MongoDB, with an Event Bus handling data synchronization.',
    metrics: [
      { label: 'Payload Size', value: '1.8 KB' },
      { label: 'Event Ingestion', value: '10k+ req/sec' },
      { label: 'Lighthouse Score', value: '99/100' },
      { label: 'Query Latency', value: '< 45ms' },
    ],
  },
  {
    id: 'readone-blogs',
    heading: 'ReadOne Blog App',
    tagline: 'A React-based blog application with Firebase authentication and real-time data storage.',
    description:
      'A modern, responsive blogging platform built with React and Firebase, enabling writers to create, edit, and publish articles with a rich text editor and readers to discover and engage with content.',
    image: readoneImg,
    githubLink: 'https://github.com/Adithyan408/ReadOne-',
    liveLink: 'https://read-one-blog.vercel.app/',
    icon: '📦',
    coverColor: '#3b82f6',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Firebase Auth', 'Tip Tap','Git', 'GitHub'],
    category: 'Blog App',
    year: '2026',
    role: 'React Developer',
    status: 'Completed',
    projectType: 'Personal Project',
    longDescription:
      'ReadOne is a modern, responsive full-stack blogging and content-publishing web application designed to empower writers and readers through a distraction-free digital storytelling experience. Built with a focus on speed, real-time interactivity, and clean typography, ReadOne enables creators to compose rich articles with an intuitive WYSIWYG editor while allowing readers to discover and engage with trending content. The application bridges seamless authoring and secure data persistence by pairing a component-driven React architecture with cloud-native serverless services.',
    keyFeatures: [
      'Rich text editor with formatting tools and live word count',
      'Google Sign-In and Email/Password authentication',
      'User profiles and author-based edit and delete permissions',
      'Protected routes for authenticated users',
      'Lazy loading for improved application performance'
    ],
    challenges:[
      'Interfacing directly with daemon container sockets securely while rendering live terminal streams in the browser required robust WebSocket multiplexing and strict authentication guards.',
      'Solution: Implemented content equality checks and controlled editor updates to prevent redundant re-renders and cursor resets, while ensuring clean editor resets when switching between creating and editing blogs.'
    ],
    architecture:
      'ReadOne follows a serverless SPA architecture built with React 19, TypeScript, Vite, and Tailwind CSS. Firebase Authentication handles user authentication, while Cloud Firestore manages data storage and real-time updates. React Context API manages authentication state, and React Router v7 handles navigation and protected routes.',
    metrics: [
      { label: 'Startup Time', value: '< 2.4s' },
      { label: 'Templates', value: '15+ Runtimes' },
      { label: 'Container Memory', value: '-30% footprint' },
    ],
  },
  {
    id: 'library-management',
    heading: 'Library Management System',
    tagline: 'A web application managing Library operations',
    description: 
            'A web application managing library operations',
    image: lmsImg,
    githubLink: 'https://github.com/Adithyan408/lms-client',
    liveLink: 'public-library',
    icon: '🛍️',
    coverColor: '#f59e0b',
    technologies: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'REST API', 'MongoDB', 'Express', 'Git', 'GitHub', 'Firebase Auth'],
    category: 'Management System',
    year: '2026',
    role: 'FullStack Developer',
    status: 'Completed',
    projectType: 'Freelance',
    longDescription:
      'Developed a full-stack Library Management System collaboratively with a team of 3 contributors, focusing on building a practical library solution while following an organized, team-based development workflow. The project\'s main vision was to strengthen collaboration through effective Git and GitHub practices, including task assignment, issue tracking, progress monitoring, pull requests, code reviews, merging, and conflict resolution. This helped maintain code quality, coordinate contributions, and deliver features efficiently as a team.',
    keyFeatures: [
      'Separate Admin and User portals with role-based access.',
      'ISBN scanner integration with Open Library and Google Books APIs to automatically fetch book details and simplify book entry.',
      'Book borrowing, returns, loan tracking, and borrowing history.',
      'Book inventory management with physical copy tracking and shelf locations.',
      'Search and filter books by category, language, publisher, and availability.',
      'Admin dashboard with book, author, publisher, and user management.',
      'User dashboard with borrowing statistics and active loans.',
      'Google Sign-In for users and secure credential-based Admin login.'
    ],
    challenges:[
      'Challenge: Coordinating development among 3 contributors and managing code conflicts.',' Solution: Used Git and GitHub for issue assignment, progress tracking, pull requests, code reviews, merging, and conflict resolution.',
    ],
    architecture:
      'Built with React 19, Vite, TypeScript, and React Router v7 on the frontend, and Node.js, Express, and MongoDB with Mongoose on the backend. Implemented REST APIs, role-based access control, and secure JWT authentication with httpOnly cookies and token refresh.',
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
