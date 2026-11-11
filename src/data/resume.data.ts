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
    technologies: ['Java', 'Spring Boot', 'jOOQ', 'PostgreSQL', 'Liquibase', 'AWS', 'Terraform', 'Docker', 'Kubernetes', 'HashiCorp Vault', 'CloudBees CI', 'Bitbucket', 'Dynatrace', 'OpenTelemetry'],
    achievements: [
      'Designed HLD/LLD for a confidential multi-tenant Japanese corporate travel platform serving 1,000+ enterprise clients across 7 microservices; defined service boundaries, inter-service API contracts, and a schema-per-service PostgreSQL architecture with independent access controls.',
      'Implemented multi-tenant provider credential management with runtime credential resolution; integrated AWS Secrets Manager using AWS SDK for Java for secure credential storage and rotation without application redeployment.',
      'Developed an extensible Spring Boot provider integration framework using Factory, Strategy, and Adapter patterns; integrated 7 travel suppliers across Air, Hotel, Car, and Rail through SOAP, REST, and CSV adapters, with JUnit-based regression testing.',
      'Implemented idempotent database operations using jOOQ and PostgreSQL upserts with unique constraints to prevent duplicate trip creation; managed database schema migrations using Liquibase and introduced PATCH-based synchronization contracts.',
      'Designed Booking–Reporting service decoupling using denormalized projections and transactional upserts, ensuring booking availability during reporting failures and eventual consistency across services.',
      'Developed memory-efficient server-side streaming exports for CSV, XLSX, and PDF using jOOQ, Apache POI SXSSF, Apache Commons CSV, and Apache PDFBox, supporting 100K+ rows with Shift-JIS encoding for Japanese localization.',
      'Automated infrastructure provisioning using Terraform and containerized deployments with Docker and Kubernetes; integrated HashiCorp Vault Agent for secure runtime secret injection using Kubernetes authentication and least-privilege policies.',
      'Designed and implemented end-to-end CI/CD pipelines using CloudBees CI (Jenkins) Declarative Pipelines integrated with Bitbucket; automated multi-stage builds and parameterized SIT deployments, incorporating AWS ECR image version selection, Kubernetes-based build agents, and Helm-driven deployments across microservices.',
      'Configured Dynatrace for application performance monitoring and integrated OpenTelemetry instrumentation for distributed tracing and telemetry collection; implemented SLF4J structured logging with PII redaction and MDC-based correlation IDs for cross-service observability and incident troubleshooting.',
    ],
  },
  {
    id: 'blacklight-gaming',
    company: 'BlackLight Gaming',
    location: 'Noida, India',
    position: 'Associate Backend Developer',
    period: '2025 - 2025',
    technologies: ['Java', 'Spring Boot', 'Kafka', 'Redis', 'Docker', 'Kubernetes', 'GCP', 'BigQuery'],
    achievements: [
      'Designed and implemented a dedicated KYC microservice integrating Decentro APIs for Aadhaar and PAN identity verification using Spring WebClient; integrated it with the Auth Service and enforced KYC-based transaction restrictions, allowing wallet creation while requiring verification before deposits and withdrawals; reduced p95 latency by ~45% and supported 500+ req/s.',
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
  { category: 'Backend Frameworks & Libraries', items: ['Spring Framework (Spring Boot, Spring MVC, Spring Security, Spring WebFlux)', 'Node.js', 'NestJS', 'FastAPI', 'NumPy', 'Matplotlib'] },
  { category: 'API Clients & Service Communication', items: ['RestClient', 'RestTemplate', 'WebClient', 'Feign Client', 'gRPC', 'REST APIs', 'SOAP'] },
  { category: 'Persistence, Databases & Caching', items: ['Spring Data JPA', 'Spring Data JDBC', 'Spring Data R2DBC', 'Spring JDBC', 'Hibernate', 'jOOQ', 'TypeORM', 'SQL', 'MySQL', 'PostgreSQL', 'Redis', 'Caffeine', 'Liquibase', 'Flyway'] },
  { category: 'Backend Architecture & Design Patterns', items: ['Monolithic Architecture', 'Microservices', 'Domain-Driven Design (DDD)', 'Clean Architecture', 'Event-Driven Architecture', 'CQRS', 'Saga', 'Transactional Outbox', 'Factory', 'Builder', 'Strategy', 'Adapter', 'Facade', 'Decorator', 'Observer'] },
  { category: 'Concurrency & Scheduling', items: ['Java Concurrency API (ExecutorService, CompletableFuture, Synchronization, Concurrent Collections, Virtual Threads)', 'ThreadPoolTaskExecutor', 'Spring @Async', 'Spring Scheduling', 'ShedLock'] },
  { category: 'Messaging & Streaming', items: ['Apache Kafka', 'RabbitMQ'] },
  { category: 'Resilience & Fault Tolerance', items: ['Spring Retry', 'Resilience4j'] },
  { category: 'API Gateway & Management', items: ['Kong', 'Apigee'] },
  { category: 'Cloud & DevOps', items: ['AWS (EC2, SSM, ECR, EKS, RDS, Redshift, CloudWatch, IAM, Secrets Manager, KMS, SQS, SNS)', 'GCP (Cloud Run, GKE, Cloud SQL, BigQuery, Cloud Logging, IAM, Secret Manager, Cloud KMS, Pub/Sub)', 'Jenkins (CloudBees CI)', 'GitHub Actions', 'Docker', 'Podman', 'Kubernetes', 'Helm', 'Terraform', 'Nginx', 'Envoy'] },
  { category: 'Security & Identity', items: ['JWT', 'OAuth 2.0', 'OpenID Connect (OIDC)', 'SAML 2.0', 'MFA', 'LDAP', 'Keycloak', 'Mutual TLS (mTLS)', 'SPIFFE/SPIRE', 'Microsoft Active Directory (AD DS)', 'HashiCorp Vault'] },
  { category: 'Testing, Logging & Observability', items: ['JUnit', 'Mockito', 'Spring Cloud Contract', 'Jest', 'Supertest', 'Logback', 'Log4j 2', 'SLF4J', 'Pino', 'Spring Boot Actuator', 'OpenTelemetry', 'Dynatrace', 'Prometheus', 'Grafana', 'Splunk'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'Bitbucket', 'Maven', 'Gradle', 'Node Package Manager (npm)', 'GitHub Actions', 'SonarQube', 'OpenAPI (Swagger)', 'Postman', 'Jira', 'Linear', 'Bash', 'PowerShell', 'Windows Batch'] },
];

export const projects: Project[] = [
  {
    id: 'medops',
    title: 'MedOps',
    subtitle: 'Hospital Operations Management Platform',
    description: 'A full-stack healthcare operations platform supporting secure clinical workflows, appointment management, and automated report summarization.',
    technologies: ['Java 21', 'Spring Boot', 'React', 'PostgreSQL', 'Redis', 'Kafka', 'FastAPI', 'Docker', 'AWS EC2', 'GitHub Actions'],
    features: [
      'Built JWT authentication, role-based access control, patient/doctor workflows, appointments, prescriptions, clinical reports, and billing.',
      'Designed the backend as a modular monolith with business-focused modules and concurrency-safe appointment booking.',
      'Implemented Kafka-based asynchronous workflows, Redis caching, API idempotency, and audit logging.',
      'Built a FastAPI AI service for clinical PDF summarization; automated deployment using Docker, GitHub Actions, AWS Systems Manager (SSM), AWS EC2, and Nginx.',
    ],
    githubUrl: 'https://github.com/leoshad9/medops',
    liveUrl: 'https://medops.duckdns.org',
  },
  {
    id: 'image-encryption-decryption',
    title: 'Image Encryption and Decryption',
    subtitle: 'Tkinter-Based Image Security Tool',
    description: 'A Python desktop image obfuscation utility with a Tkinter GUI for image and directory selection and a reversible pixel-level substitution workflow.',
    technologies: ['Python', 'Tkinter', 'NumPy', 'Matplotlib'],
    features: ['Tkinter GUI for image and directory selection', 'Random 256-value substitution key generation', 'CSV-based encrypted storage', 'Inverse key mapping for decryption', 'Key validation, logging, and error handling'],
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
