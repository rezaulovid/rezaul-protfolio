import Link from 'next/link';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import type { Project } from '@/lib/projects';

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="project-card">
      <Link
        href={`/projects/${project.slug}`}
        className="project-image-link"
        aria-label={`View ${project.name} details`}
      >
        <div className={`project-art art-${index}`}>
          <img src={project.image} alt={`${project.name} project preview`} />
        </div>
        <span className="project-open">
          <ArrowUpRight size={18} />
        </span>
      </Link>
      <div className="project-card-body">
        <p className="eyebrow">{project.eyebrow}</p>
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <div className="tag-row">
          {project.stack.map((item) => (
            <span className="tag" key={item}>
              {item}
            </span>
          ))}
        </div>
        <div className="project-actions">
          <Link className="text-link" href={`/projects/${project.slug}`}>
            View project details <ArrowUpRight size={16} />
          </Link>
          {project.live && (
            <a
              className="icon-link"
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.name} live site`}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
