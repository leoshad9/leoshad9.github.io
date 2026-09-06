export interface Experience {
  id: string;
  company: string;
  location: string;
  position: string;
  period: string;
  technologies: string[];
  achievements: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  credential: string;
  institution: string;
  location: string;
  year: string;
  score: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const experiences: Experience[] = [
  {
    id: 'shree-infosoft',
    company: 'Shree Infosoft Private Limited',
    location: 'Pune, India',
    position: 'Backend Developer',
    period: '2026 - Present',
    technologies: ['NestJS', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes', 'HashiCorp Vault'],
    achievements: [
      'Designed HLD/LLD for a confidential multi-tenant Japanese corporate travel platform serving 1,000+ enterprise clients across 7 microservices; defined service ownership boundaries, inter-service API contracts, and a schema-per-service PostgreSQL strategy with role-per-service access control, reducing cross-service coupling and enabling independent deployments.',
      'Designed and implemented a multi-tenant provider credential system with per-tenant, per-provider credential resolution at runtime; integrated AWS Secrets Manager for secure credential storage and rotation without redeployment, supporting tenant onboarding without code changes.',
      'Built an extensible multi-tenant provider integration framework applying Factory Pattern (IntegrationFactory, BookingSyncMapperFactory), Strategy Pattern (ISsoHandler, IBookingSyncMapper per provider), and Adapter Pattern (per-provider SOAP/REST/CSV adapters); enforced Open/Closed Principle so new suppliers register without modifying existing routing logic; onboarded 7 suppliers (JAL, ANA, Jalan, Rakuten, StarFlyer, Amadeus, Ekispert) with a bidirectional mapper covering Air, Hotel, Car, and Rail segment types and Jest fixture tests as a CI regression gate against provider schema drift.',
      'Implemented idempotent upsert logic with natural-key pre-checks and unique-index conflict retry to handle concurrent provider sync race conditions, preventing duplicate trip creation under at-least-once delivery, retries, and network-partition scenarios; used PATCH-based contracts for incremental sync to minimize payload size and avoid full-resource overwrites.',
      'Engineered a projection isolation pattern between Booking and Reporting services to guarantee transactional availability; booking writes succeed regardless of Reporting Service state, with denormalized projection tables and unique-constraint upserts ensuring eventual consistency and decoupling OLTP booking throughput from OLAP reporting workloads.',
      'Implemented server-side streaming exports (CSV/XLSX/PDF) using TypeORM AsyncIterable queries piped through fast-csv, exceljs, and pdfkit serializers, supporting 100k+ row exports without heap accumulation; eliminated client-side export processing entirely by moving it server-side, removing frontend memory pressure on large datasets; added Shift-JIS encoding via iconv-lite for Japanese-locale compatibility.',
      'Containerized all services using Docker with multi-stage builds; orchestrated a local development stack of 10+ services via Docker Compose with service-health gating and environment override patterns for container-network parity; configured Kubernetes deployments with Vault Agent sidecar injection so secrets never touch Kubernetes etcd or environment variables, with per-service Vault roles enforcing least-privilege secret access.',
      'Configured pino structured logging with framework-level PII redaction (authorization tokens, passport numbers, payment data) to meet data privacy compliance requirements; propagated per-request correlation IDs across all services enabling end-to-end distributed tracing and reducing mean-time-to-resolution for cross-service incidents.',
    ],
  },
  {
    id: 'blacklight-gaming',
    company: 'BlackLight Gaming',
    location: 'Noida, India',
    position: 'Backend Developer',
    period: '2025 - 2025',
    technologies: ['Java', 'Spring Boot', 'Kafka', 'Redis', 'Docker', 'Kubernetes', 'GCP', 'BigQuery'],
    achievements: [
      'Architected and deployed a production-grade KYC backend for Aadhaar and PAN identity verification using Spring WebClient; reduced p95 latency by ~45%, supported 500+ req/s, and ensured regulatory compliance for financial-services onboarding.',
      'Designed and optimized 12+ stateless REST APIs with clear domain boundaries, backed by normalized schemas and tuned SQL queries, meeting defined latency and availability SLOs (p99 < 150 ms, 99.95% availability) under peak traffic.',
      'Implemented Apache Kafka for asynchronous event processing with idempotent consumers and retry-safe workflows, using Redis-based caching and database constraints to prevent duplicate processing under at-least-once delivery; reduced database load by ~30-35% and improved p95 latency by ~25-30% under peak traffic.',
      'Built secure, immutable containerized CI/CD pipelines using Docker, Google Cloud Build, and Cloud Native Buildpacks; published hardened images to Artifact Registry and deployed services to Cloud Run and Kubernetes, reducing deployment overhead by ~70%.',
      'Implemented OWASP Top 10 security controls (Spring Security, JWT/OAuth 2.0, RBAC, CSRF) and OWASP A06-compliant dependency vulnerability scanning, remediating 20+ critical/high CVEs and strengthening application and supply-chain security.',
      'Integrated Google BigQuery for transaction logging across 8 microservices, reducing incident investigation time from ~4 hours to ~30 minutes.',
      'Developed LiveOps systems enabling the product team to configure, schedule, and manage time-bound in-game events, improving operational efficiency and reducing manual coordination overhead.',
      'Applied Resilience4j fault-tolerance patterns (timeouts, retries, circuit breakers) to external API integrations, preventing cascading failures and improving system resilience during third-party outages.',
    ],
  },
  {
    id: 'infosys',
    company: 'Infosys Limited',
    location: 'Bengaluru, India',
    position: 'Systems Engineer',
    period: '2022 - 2024',
    technologies: ['Java', 'Spring Boot', 'JPA/Hibernate', 'MySQL', 'Log4j2', 'JWT'],
    achievements: [
      'Diagnosed and resolved 10+ critical production issues including runtime exceptions and circular dependency problems in Spring bean configurations; applied targeted fixes to eliminate root causes, improving backend service stability and reducing recurring incident rate.',
      'Refactored service-layer components to replace unsafe null checks with Java Optional, enforcing safer null-handling patterns across the codebase and eliminating a class of runtime failures that previously impacted production reliability.',
      'Introduced asynchronous processing using Spring @Async and a configured ThreadPoolTaskExecutor to offload background tasks such as notification dispatch and audit logging; decoupled them from the request lifecycle, improving API responsiveness under concurrent load.',
      'Optimized Spring Data JPA queries and entity mappings, resolving N+1 query issues and improving database performance; reduced DB CPU utilization from ~85% to ~62%.',
      'Improved application observability by implementing structured logging using Log4j2, reducing mean-time-to-resolution (MTTR) for incidents by ~35%.',
      'Implemented JWT-based authentication across 4+ REST APIs and strengthened API security through input validation and CORS configuration.',
      'Authored technical documentation and API specifications for backend services, reducing incident investigation time by ~25% and onboarding time for new engineers by ~33%.',
    ],
  },
];

export const skills: Skill[] = [
  { category: 'Programming Languages', items: ['Java', 'Python', 'JavaScript', 'TypeScript'] },
  { category: 'Backend Frameworks & Libraries', items: ['Spring Framework (Spring Boot, Spring MVC, Spring Security)', 'Node.js', 'NestJS', 'FastAPI'] },
  { category: 'Data Processing & GUI', items: ['NumPy', 'Matplotlib', 'Tkinter'] },
  { category: 'Persistence & ORM', items: ['Spring Data JPA', 'Spring JDBC (JdbcTemplate)', 'Spring Data JDBC', 'Spring Data R2DBC', 'Spring Data Redis', 'Hibernate', 'TypeORM'] },
  { category: 'Backend Architecture', items: ['Monolithic Architecture', 'Microservices', 'REST APIs', 'SOAP', 'Domain-Driven Design (DDD)', 'Clean Architecture', 'Event-Driven Architecture', 'CQRS', 'Saga Pattern', 'Outbox Pattern'] },
  { category: 'Concurrency', items: ['Executor Framework', 'CompletableFuture', 'Synchronization', 'Concurrent Collections', 'Virtual Threads', 'ThreadPoolTaskExecutor'] },
  { category: 'Messaging & Streaming', items: ['Apache Kafka'] },
  { category: 'Cloud & DevOps', items: ['Amazon Web Services (AWS)', 'AWS EC2', 'AWS Systems Manager (SSM)', 'Google Cloud Platform (GCP)', 'Docker', 'Docker Compose', 'Kubernetes', 'Nginx', 'Amazon Elastic Kubernetes Service (EKS)', 'Google Kubernetes Engine (GKE)', 'Amazon RDS', 'Google Cloud SQL', 'Amazon Redshift', 'Google BigQuery', 'Amazon CloudWatch', 'Google Cloud Logging'] },
  { category: 'Databases & Caching', items: ['MySQL', 'PostgreSQL', 'Redis', 'Caffeine'] },
  { category: 'Security & Identity', items: ['JWT', 'OAuth 2.0', 'OpenID Connect (OIDC)', 'Keycloak', 'HashiCorp Vault'] },
  { category: 'Testing & Observability', items: ['JUnit 5', 'Mockito', 'Jest', 'Supertest', 'Pytest', 'Log4j2', 'Pino', 'OpenTelemetry', 'Prometheus', 'Grafana', 'Resilience4j'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'GitLab', 'Maven', 'Gradle', 'Node Package Manager (npm)', 'GitHub Actions', 'Jenkins', 'Bash', 'SonarQube', 'OpenAPI (Swagger)', 'Postman'] },
];

export const projects: Project[] = [
  {
    id: 'medops',
    title: 'MedOps',
    subtitle: 'Hospital Operations Platform',
    description: 'A full-stack healthcare operations platform for secure clinical workflows, appointment management, and automated report summarisation.',
    technologies: ['Java 21', 'Spring Boot', 'React', 'PostgreSQL', 'Redis', 'Kafka', 'FastAPI', 'Docker', 'AWS EC2', 'GitHub Actions'],
    features: [
      'Built JWT authentication, role-based access control, patient/doctor workflows, appointments, prescriptions, clinical reports, and billing.',
      'Designed a modular monolith with API, application, domain, and infrastructure boundaries; engineered concurrency-safe appointment booking with integration tests.',
      'Implemented Kafka workflows, Redis caching and rate limiting, API idempotency, audit logging, and Resilience4j retry, circuit-breaker, and timeout patterns.',
      'Built a FastAPI AI service for clinical PDF summarization with PDF extraction, output validation, and resilient external-provider handling; automated deployment with Docker, GitHub Actions, AWS SSM, EC2, and Nginx.',
    ],
    githubUrl: 'https://github.com/leoshad9/medops',
    liveUrl: 'https://medops.duckdns.org',
  },
  {
    id: 'image-encryption-decryption',
    title: 'Image Encryption and Decryption',
    subtitle: 'Tkinter-Based Image Security Tool',
    description: 'A Python desktop utility for encrypting and decrypting images through a reversible pixel-substitution workflow with a GUI for file and folder selection.',
    technologies: ['Python', 'Tkinter', 'NumPy', 'Matplotlib'],
    features: ['Tkinter GUI for image and directory selection', 'Random 256-value substitution key generation', 'CSV-based encrypted image storage', 'Inverse key mapping for decryption', 'Logging, validation, and error handling'],
    githubUrl: 'https://github.com/leoshad9/image-encryption-decryption',
  },
  {
    id: 'chat-server',
    title: 'Multithreaded Chat Server',
    subtitle: 'Real-time Communication System',
    description: 'A production-ready multithreaded TCP/IP chat server built with Java socket programming, supporting concurrent client connections with real-time message broadcasting and thread-safe operations.',
    technologies: ['Java', 'Socket Programming', 'TCP/IP', 'Multithreading', 'Networking'],
    features: ['Multi-threaded Architecture', 'TCP/IP Communication', 'Real-time Broadcasting', 'Thread-Safe Operations', 'Robust Error Handling'],
    githubUrl: 'https://github.com/leoshad9/multithreaded-chat-server',
  },
];

export const personalInfo = {
  name: 'Mohd Shadman',
  title: 'Backend Developer',
  location: 'New Delhi, India',
  email: 'Leoshad9@gmail.com',
  phone: '+91-8826659240',
  github: 'https://github.com/leoshad9',
  linkedin: 'https://www.linkedin.com/in/leoshad9',
  summary: 'Backend Developer specializing in Java, Spring Boot, SQL, Microservices, and production-grade scalable systems.',
  tagline: 'Open to Remote & Relocation Globally',
};

export const education: Education[] = [
  { credential: 'B.Tech in Electronics & Communication Engineering', institution: 'Jamia Hamdard', location: 'New Delhi, India', year: '2022', score: 'CGPA: 7.0/10' },
  { credential: 'Senior Secondary Education (12th)', institution: 'Jamia Millia Islamia', location: 'New Delhi, India', year: '2017', score: 'CGPA: 7.2/10' },
  { credential: 'Secondary Education (10th)', institution: 'Kendriya Vidyalaya', location: 'New Delhi, India', year: '2015', score: 'CGPA: 7.8/10' },
];
