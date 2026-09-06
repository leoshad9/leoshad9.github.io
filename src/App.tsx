import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import profilePic from './assets/profile.webp';
import {
  personalInfo,
  experiences,
  skills,
  projects,
  education,
} from './data/resume.data';

const Button = ({
  children,
  href,
  primary = false,
}: {
  children: ReactNode;
  href: string;
  primary?: boolean;
}) => (
  <a
    href={href}
    target={href.startsWith('mailto:') ? '_blank' : undefined}
    rel="noopener"
    className={`inline-flex items-center rounded-lg px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${
      primary
        ? 'bg-violet-500 text-white shadow-lg shadow-violet-500/20 hover:bg-violet-400'
        : 'border border-white/15 text-stone-200 hover:border-violet-400'
    }`}
  >
    {children}
  </a>
);

const Section = ({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: ReactNode;
  children: ReactNode;
}) => (
  <section
    id={id}
    className="border-t border-white/10 px-6 py-24 sm:px-10 lg:px-16"
  >
    <div className="mx-auto max-w-6xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-violet-400">
        {number} / {id}
      </p>

      <h2 className="mb-10 text-4xl font-bold tracking-[-0.06em] text-stone-200 sm:text-5xl">
        {title}
      </h2>

      {children}
    </div>
  </section>
);

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0b0b0b] text-stone-200">

      {/* Navigation */}
      <nav className="sticky top-0 z-20 border-b border-white/10 bg-[#0b0b0b]/90 px-6 backdrop-blur sm:px-10 lg:px-16">
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between">
          <div className="text-lg font-extrabold tracking-[-0.05em]">
            MOHD<span className="text-violet-400">.</span>SHADMAN<span className="text-violet-400">();</span>
          </div>

          <div className="hidden gap-6 text-sm text-stone-400 md:flex">
            {[
              'about',
              'skills',
              'projects',
              'engineering',
              'experience',
              'education',
              'contact',
            ].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="capitalize transition hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="px-6 py-28 sm:px-10 lg:px-16 lg:py-36">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_280px]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-violet-400">
              {'// backend developer'}
            </p>

            <h1 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.07em] text-stone-300 sm:text-7xl lg:text-8xl">
              I build backend systems that scale<span className="text-violet-400">.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-400">
              {personalInfo.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#projects" primary>
                View Projects
              </Button>

              <Button href={personalInfo.github}>GitHub</Button>

              <Button href={personalInfo.linkedin}>LinkedIn</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto grid aspect-square w-44 place-items-center border border-white/10 bg-[#151515] font-mono text-xs tracking-[0.2em] text-stone-600 sm:w-52 lg:w-56"
          >
            <img src={profilePic} alt="Mohd Shadman" className="h-full w-full object-cover" />
          </motion.div>
        </div>
      </header>

      {/* About */}
      <Section
        id="about"
        number="01"
        title={
          <>
            Engineering mindset<span className="text-violet-400">.</span>{' '}
            Backend focus<span className="text-violet-400">.</span>
          </>
        }
      >
        <p className="max-w-3xl text-lg leading-8 text-stone-400">
          I design and build REST APIs, backend services, and integrations
          with emphasis on clean architecture, reliability, security, and
          maintainability. Primary ecosystem: Java and Spring Boot, with
          experience across databases, distributed systems, external API
          integrations, and resilience patterns.
        </p>
      </Section>

      {/* Skills */}
      <Section
        id="skills"
        number="02"
        title={
          <>
            Technical foundation<span className="text-violet-400">.</span>
          </>
        }
      >
        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-5"
            >
              <h3 className="mb-2 text-lg font-semibold">
                {skill.category}
              </h3>

              <p className="font-mono text-xs leading-6 text-stone-500">
                {skill.items.join(' | ')}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section
        id="projects"
        number="03"
        title={
          <>
            Selected work<span className="text-violet-400">.</span>
          </>
        }
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex flex-col rounded-xl border border-white/10 bg-white/[0.02] p-6"
            >
              <p className="font-mono text-[11px] text-stone-600">
                PROJECT / {String(index + 1).padStart(2, '0')}
              </p>

              <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                {project.title}
              </h3>

              <p className="mt-1 text-sm text-stone-400">
                {project.subtitle}
              </p>

              <p className="mt-4 text-sm leading-6 text-stone-500">
                {project.description}
              </p>

              <ul className="mt-4 flex-1 space-y-2 pl-4 text-sm leading-6 text-stone-400">
                {project.features.map((feature) => (
                  <li key={feature} className="list-disc">
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="border border-white/10 px-2 py-1 font-mono text-[10px] text-stone-500"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-2">
                <Button href={project.githubUrl ?? '#'}>
                  View Code
                </Button>

                {project.liveUrl && (
                  <Button href={project.liveUrl} primary>
                    Live Demo
                  </Button>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* Engineering */}
      <Section
        id="engineering"
        number="04"
        title={
          <>
            How I think about backend systems<span className="text-violet-400">.</span>
          </>
        }
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            'API Design',
            'Resilience',
            'Security',
            'Data',
            'Testing',
            'Deployment',
          ].map((item, index) => (
            <div
              key={item}
              className="min-h-36 rounded-xl border border-white/10 bg-white/[0.02] p-6"
            >
              <p className="font-mono text-xs text-stone-600">
                {String(index + 1).padStart(2, '0')}
              </p>

              <h3 className="mt-4 text-xl font-semibold">{item}</h3>

              <p className="mt-2 text-sm text-stone-500">
                {
                  [
                    'Clear contracts, validation, consistent responses and HTTP semantics.',
                    'Timeouts, retries, fallbacks and controlled failure patterns.',
                    'Authentication, authorization, token handling and secrets management.',
                    'Schema design, transactions, indexing and database performance.',
                    'Unit tests, integration tests, mocks and failure-path testing.',
                    'Environment config, CI/CD, containers, logs and troubleshooting.',
                  ][index]
                }
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section
        id="experience"
        number="05"
        title={
          <>
            Experience<span className="text-violet-400">.</span>
          </>
        }
      >
        <div className="max-w-5xl border-l border-white/15 pl-6">
          {experiences.map((experience) => (
            <article
              key={experience.id}
              className="relative pb-12 before:absolute before:-left-[29px] before:top-1 before:h-2 before:w-2 before:rounded-full before:border before:border-violet-400 before:bg-[#0b0b0b]"
            >
              <p className="font-mono text-xs text-violet-400">
                {experience.period.toUpperCase()}
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                {experience.position}
              </h3>

              <p className="mt-1 text-sm text-stone-500">
                {experience.company} | {experience.location}
              </p>

              <ul className="mt-4 space-y-2 text-sm leading-6 text-stone-400">
                {experience.achievements.map((achievement) => (
                  <li key={achievement} className="ml-4 list-disc">
                    {achievement}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section
        id="education"
        number="06"
        title={
          <>
            Education<span className="text-violet-400">.</span>
          </>
        }
      >
        <div className="space-y-4">
          {education.map((item) => (
            <div
              key={item.credential}
              className="flex flex-col justify-between gap-2 rounded-xl border border-white/10 bg-white/[0.02] p-5 sm:flex-row"
            >
              <div>
                <h3 className="font-semibold">{item.credential}</h3>

                <p className="mt-1 text-sm text-stone-500">
                  {item.institution} | {item.location}
                </p>
              </div>

              <p className="font-mono text-xs text-violet-400">
                {item.year} | {item.score}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-white/10 px-6 py-32 text-center sm:px-10"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-violet-400">
          07 / contact
        </p>

        <h2 className="mx-auto mt-4 max-w-2xl text-5xl font-bold tracking-[-0.07em] text-stone-300 sm:text-7xl">
          Let's build
          <br />
          something useful<span className="text-violet-400">.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-stone-500">
          Open to software engineering opportunities, backend projects and
          interesting technical problems.
        </p>

        <div className="mt-8">
          <Button href={`mailto:${personalInfo.email}`} primary>
            Email Me -&gt;
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-7 text-xs text-stone-600 sm:px-10">
        <div className="mx-auto max-w-6xl">
          © 2026 Mohd Shadman
        </div>
      </footer>
    </div>
  );
}

export default App;