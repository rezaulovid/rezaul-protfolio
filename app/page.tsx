import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Eye,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Code2,
  Search,
  Megaphone,
} from 'lucide-react';

import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/projects';
import { certificates } from '@/lib/certificates';
import Image from 'next/image';
import rezaulPhoto from '@/assets/rezaul.png';

const skillGroups = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: [
      'HTML5 & CSS3',
      'JavaScript',
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'Responsive UI',
    ],
  },
  {
    title: 'Backend',
    icon: Code2,
    skills: [
      'Node.js',
      'Express.js',
      'REST API',
      'NoSQLBooster',
      'MongoDB',
    ],
  },
  {
    title: 'Brand & Digital Marketing',
    icon: Megaphone,
    skills: [
      'Brand Strategy',
      'ATL / BTL',
      'Google & Meta Ads',
      'Influencer Marketing',
      'Content Strategy',
      'Corporate Communication',
    ],
  },
  {
    title: 'SEO & Analytics',
    icon: Search,
    skills: [
      'Technical SEO',
      'On-page & Off-page SEO',
      'Keyword Research',
      'GA4 & Search Console',
      'Local SEO',
      'GEO / AEO',
    ],
  },
];

const experiences = [
  {
    company: 'KOMMODITY KONNECT',
    role: 'Brand Marketing Executive & SEO Specialist',
    date: 'Jun 2026 — Present',
    detail: 'Brand marketing, SEO, digital visibility and campaign execution.',
  },
  {
    company: 'CAS SCALE (BD) PVT. LTD.',
    role: 'Brand Marketing Executive & SEO Specialist',
    date: 'Aug 2025 — Apr 2026',
    detail:
      'Brand marketing and SEO in the light engineering and heavy industry sector.',
  },
  {
    company: 'Master Racks Ltd.',
    role: 'Senior Executive — Brand & Marketing',
    date: 'Apr 2024 — Jul 2025',
    detail: 'Brand and marketing activities for a manufacturing business.',
  },
];

const education = [
  {
    year: '2023–2024',
    type: 'Masters',
    title: 'M.Sc. in Botany',
    institution: 'Govt. Tolaram College · National University',
    status: 'Ongoing',
  },
  {
    year: '2022',
    type: 'UNDERGRADUATE',
    title: 'BSc (Hons) in Botany',
    institution: 'Habibullah Bahar College · National University',
  },
  {
    year: '2017',
    type: 'HIGHER SECONDARY',
    title: 'HSC · Science',
    institution: 'Govt. Shah Abdur Rouf College',
  },
  {
    year: '2014',
    type: 'SECONDARY',
    title: 'SSC · Science',
    institution: 'Govt. Chatra High School',
  },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero section" id="home">
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="availability">
              <span className="pulse-dot" />
              OPEN TO OPPORTUNITIES
              <span className="availability-line" />
            </div>
            <p className="hero-kicker">Hello, I’m</p>
            <h1>
              Rezaul <span className="gradient-text">Islam.</span>
            </h1>
            <h2>
              Web Developer <span className="hero-and">×</span>
              <br className="mobile-break" />SEO &amp; Brand Marketing
            </h2>
            <p className="hero-description">
              I bring strategy and technology together to build useful
              digital experiences, grow organic visibility, and create
              stronger brands.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                Explore my work
                <ArrowUpRight size={17} />
              </a>

              {/* View Resume */}
              <a
                className="btn btn-secondary"
                href="/resume/MD-Rezaul-Islam.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Eye size={17} />
                View Resume
              </a>

              {/* Download CV */}
              <a
                className="btn btn-secondary"
                href="/resume/Full-Stack Web Developer.pdf"
                download="Full-Stack Web Developer.pdf"
              >
                <Download size={17} />
                Download CV
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/rezaulovid"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={17} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={17} />
                LinkedIn
              </a>

              <a href="mailto:rezaul1998bd@gmail.com">
                <Mail size={17} />
                Email
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-frame">
              <div className="portrait-orbit orbit-a" />
              <div className="portrait-orbit orbit-b" />

              <div
                className="portrait-placeholder"
                style={{ position: 'relative' }}
              >
                <Image
                  src={rezaulPhoto}
                  alt="Rezaul Islam"
                  fill
                  priority
                  sizes="(max-width: 700px) 245px, 400px"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <div className="floating-card card-code">
                <Code2 size={17} />
                <span>
                  <b>Web Development</b>
                  <small>Learning · Building · Improving</small>
                </span>
              </div>

              <div className="floating-card card-seo">
                <Search size={17} />
                <span>
                  <b>SEO &amp; Growth</b>
                  <small>Search · Strategy · Results</small>
                </span>
              </div>

              <div className="visual-index">
                01 <span>/ 04</span>
              </div>
            </div>
          </div>
        </div>

        <a className="scroll-cue" href="#about">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={15} />
        </a>
      </section>

      {/* ABOUT */}
      <section className="section section-border" id="about">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">
              <span>01</span> / A LITTLE ABOUT ME
            </p>
            <h2>
              Curious   mind.
              <br />
              <span className="gradient-text">Practical builder.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-lead">
              <Sparkles className="about-spark" size={24} />
              <p>
                I’m a marketing professional expanding my craft through web
                development—combining audience insight, search visibility
                and thoughtful user experiences.
              </p>
              <p>
                My journey started with brand communication and SEO. Now,
                through Programming Hero, I’m building my skills in
                JavaScript, React and Next.js, and turning what I learn
                into projects people can explore.
              </p>
              <p>
                When I’m not coding, you’ll find me reading about psychology
                and business strategy, capturing street photography around
                Dhaka, and following cricket. I also enjoy volunteering for
                community clean-up drives and teaching basic digital skills to
                local youth.
              </p>
            </div>

            <div className="about-details">
              <div className="about-detail">
                <span className="detail-number">01</span>
                <div>
                  <h3>How I got here</h3>
                  <p>
                    From helping brands communicate clearly to learning how
                    the web works behind the scenes, I enjoy connecting
                    creative thinking with technical problem-solving.
                  </p>
                </div>
              </div>

              <div className="about-detail">
                <span className="detail-number">02</span>
                <div>
                  <h3>Work I enjoy</h3>
                  <p>
                    Building responsive interfaces, improving discoverability
                    through SEO, organizing information, and solving real-world
                    problems with digital products.
                  </p>
                </div>
              </div>

              <div className="about-detail">
                <span className="detail-number">03</span>
                <div>
                  <h3>Beyond the screen</h3>
                  <p>
                    I enjoy learning new tools, exploring digital trends,
                    and working on ideas that make everyday information
                    easier to access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section section-border" id="skills">
        <div className="container">
          <div className="section-heading heading-row">
            <div>
              <p className="eyebrow">
                <span>02</span> / WHAT I WORK WITH
              </p>
              <h2>
                Skills &amp; <span className="gradient-text">toolkit.</span>
              </h2>
            </div>
            <p className="heading-note">
              A growing technical toolkit backed by hands-on experience in
              marketing and SEO.
            </p>
          </div>

          <div className="skill-grid">
            {skillGroups.map((group, i) => {
              const Icon = group.icon;

              return (
                <article className="skill-card" key={group.title}>
                  <div className="skill-card-top">
                    <span className="skill-icon">
                      <Icon size={21} />
                    </span>
                    <span className="skill-count">0{i + 1}</span>
                  </div>

                  <h3>{group.title}</h3>

                  <div className="skill-list">
                    {group.skills.map((skill, j) => (
                      <div className="skill-item" key={skill}>
                        <span className="skill-bullet" />
                        <span>{skill}</span>
                        <div className="skill-track">
                          <span
                            style={{
                              width: `${[88, 78, 72, 84, 68, 74][
                                (j + i) % 6
                              ]}%`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <p className="skills-footnote">
            Skill bars are visual indicators, not formal proficiency ratings.
            Backend skills and tools will be updated as projects mature.
          </p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section section-border" id="experience">
        <div className="container">
          <div className="section-heading heading-row">
            <div>
              <p className="eyebrow">
                <span>03</span> / THE JOURNEY SO FAR
              </p>
              <h2>
                Experience &amp; <span className="gradient-text">growth.</span>
              </h2>
            </div>
            <p className="heading-note">
              Professional experience across brand marketing, SEO and
              manufacturing-related businesses.
            </p>
          </div>

          <div className="timeline">
            {experiences.map((exp, i) => (
              <article className="timeline-item" key={exp.company}>
                <div className="timeline-marker">0{i + 1}</div>
                <div className="timeline-content">
                  <div className="timeline-heading">
                    <div>
                      <h3>{exp.role}</h3>
                      <p className="company-name">{exp.company}</p>
                    </div>
                    <span className="date-pill">{exp.date}</span>
                  </div>
                  <p>{exp.detail}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="experience-note">
            <span className="note-line" />
            Additional earlier experience: The Tool Master &amp; Engineering
            Co., The Waffle House, Metalab Pretreatment Industries and BIDEC.
            Please confirm exact titles and dates before publishing.
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section section-border" id="education">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">
              <span>04</span> / EDUCATION
            </p>
            <h2>
              Learning is a <span className="gradient-text">long game.</span>
            </h2>
          </div>

          <div className="education-grid">
            {education.map((item, i) => (
              <article
                className={`education-card ${
                  i === 0 ? 'featured-education' : ''
                }`}
                key={item.title}
              >
                <span className="education-year">{item.year}</span>
                <span className="education-type">{item.type}</span>
                <h3>{item.title}</h3>
                <p>{item.institution}</p>
              </article>
            ))}
          </div>

          <div className="learning-strip">
            <span className="learning-dot" />
            <p>
              <b>Currently learning:</b> Full Stack Web Development through
              Programming Hero, with a focus on JavaScript, React, Next.js
              and building practical projects.
            </p>
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section className="section section-border" id="certificates">
        <div className="container">
          <div className="section-heading heading-row">
            <div>
              <p className="eyebrow">
                <span>05</span> / CERTIFICATIONS
              </p>
              <h2>
                My <span className="gradient-text">Certificates</span>
              </h2>
            </div>
            <p className="heading-note">
              Proof of my learning and training.
            </p>
          </div>

          <div className="certificates-grid">
            {certificates.map((cert) => (
              <article className="certificate-card" key={cert.id}>
                <div className="certificate-preview">
                  {cert.file.toLowerCase().endsWith('.pdf') ? (
                    <div className="certificate-pdf-icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                      <span>PDF</span>
                    </div>
                  ) : (
                    <Image src={cert.file} alt={cert.title} className="certificate-img" />
                  )}
                </div>
                <div className="certificate-card-body">
                  <span className="certificate-platform">{cert.issuer}</span>
                  <h3>{cert.title}</h3>
                  <p className="certificate-issuer">
                    Issued by {cert.issuer}
                  </p>
                  <div className="certificate-skills">
                    {cert.skills?.map((skill) => (
                      <span key={skill} className="certificate-skill">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="certificate-actions">
                    <a
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certificate-btn certificate-btn-primary"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="7 10 12 15 17 10" />
                        <line x1="12" y1="15" x2="12" y2="3" />
                      </svg>
                      View Certificate
                    </a>
                    {cert.verificationUrl ? (
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="certificate-btn certificate-btn-outline"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                        Verify Certificate
                      </a>
                    ) : (
                      <span
                        className="certificate-btn certificate-btn-outline certificate-no-verify"
                        aria-disabled="true"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        No verification link
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section section-border" id="projects">
        <div className="container">
          <div className="section-heading heading-row">
            <div>
              <p className="eyebrow">
                <span>06</span> / SELECTED WORK
              </p>
              <h2>
                Projects built with{' '}
                <span className="gradient-text">purpose.</span>
              </h2>
            </div>
            <p className="heading-note">
              Practice projects that reflect my learning journey and interest
              in building useful digital experiences.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={i}
              />
            ))}
          </div>

          <div className="projects-bottom">
            <span>MORE BUILDS. MORE LEARNING.</span>
            <a
              className="text-link"
              href="https://github.com/rezaulovid"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore GitHub <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        className="section contact-section section-border"
        id="contact"
      >
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">
              <span>07</span> / GET IN TOUCH
            </p>
            <h2>
              Have a good idea?
              <br />
              <span className="gradient-text">Let’s talk.</span>
            </h2>
            <p className="contact-intro">
              Open to opportunities in web development, SEO and digital
              marketing. If you think we could work well
              together, send me
              a message.
            </p>

            <a
              className="email-link"
              href="mailto:rezaul1998bd@gmail.com"
            >
              <Mail size={19} />
              rezaul1998bd@gmail.com
              <ArrowUpRight size={17} />
            </a>

            <a
              className="email-link"
              href="tel:+8801782866479"
            >
              <Phone size={19} />
              +880 1782-866479
              <ArrowUpRight size={17} />
            </a>

            <div className="contact-location">
              <MapPin size={16} />
              Uttara, Dhaka, Bangladesh · Open to remote
            </div>
          </div>

          <div className="contact-card">
            <span className="contact-card-label">START A CONVERSATION</span>
            <h3>What would you like to build?</h3>
            <p>
              For collaboration, job opportunities or project enquiries,
              email is the best way to reach me.
            </p>

            <a
              className="btn btn-primary btn-wide"
              href="mailto:rezaul1998bd@gmail.com?subject=Portfolio%20Enquiry"
            >
              Send me an email <ArrowUpRight size={17} />
            </a>

            <div className="contact-card-bottom">
              <span>Usually happy to connect</span>
              <span className="pulse-dot" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
