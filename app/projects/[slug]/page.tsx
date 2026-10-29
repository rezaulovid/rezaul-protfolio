import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, ExternalLink, 
    Github, CheckCircle2, Lightbulb } from 'lucide-react';
import { projects } from '@/lib/projects';
export function generateStaticParams()
 { 
    
    return projects.map(project => ({ slug: project.slug })); }

    export async function generateMetadata({ params }: 
    { params: Promise<{ slug: string }> }) {
 const { slug } = await params; const project = 
 projects.find(item => item.slug === slug);
 return { title: project ? `${project.name} 
 | Rezaul Islam` : 'Project | Rezaul Islam', 
 description: project?.description };
}

export default async function ProjectDetail
({ params }: { params: Promise<{ slug: string }> })
 {const { slug } = await params; const project =
  projects.find(item => item.slug === slug); if (!project) notFound();
 
 return <main className="detail-page">
    <section className="detail-hero">
        <div className="container">
            <Link className="back-link" href="/#projects">
            <ArrowLeft size={16}/> Back to all projects</Link>
            <p className="eyebrow detail-eyebrow">CASE STUDY / {project.eyebrow}</p><h1>{project.name}<span className="gradient-text">.</span></h1><p className="detail-intro">{project.description}</p><div className="tag-row detail-tags">{project.stack.map(item => <span className="tag" key={item}>{item}</span>)}</div><div className="detail-hero-art"><img src={project.image} alt={`${project.name} project preview`} /></div><div className="detail-hero-actions">{project.live ? <a className="btn btn-primary" href={project.live} target="_blank" rel="noreferrer">View live project <ExternalLink size={16}/></a> : <span className="btn btn-secondary disabled-button" aria-disabled="true">Live link to be added</span>}<a className="btn btn-secondary" href={project.github} target="_blank" rel="noreferrer"><Github size={17}/> View GitHub repository <ArrowUpRight size={16}/></a></div></div></section>
 <section className="section detail-content">
    <div className="container detail-layout">
        <aside className="detail-sidebar">
    <p className="eyebrow">PROJECT OVERVIEW</p>
    <div className="sidebar-fact"><span>TYPE</span>
    <b>Portfolio project</b></div>
    <div className="sidebar-fact"><span>STACK</span>
    <b>{project.stack.join(' · ')}</b></div>
    <div className="sidebar-fact">
        <span>STATUS</span><b>{project.live ? 'Live demo available' : 'Live link pending'}</b>
        </div></aside><div className="detail-main">
            <section className="detail-block">
                <span className="detail-section-index">01</span>
                <div><h2>Overview</h2><p>{project.description}</p>
                </div></section><section className="detail-block">
                    <span className="detail-section-index">02</span>
                    <div><h2>Key features</h2>
                    <ul className="check-list">{project.features.map(feature => <li key={feature}>
                        <CheckCircle2 size={17}/>{feature}</li>)}
                        </ul></div></section><section className="detail-block">
                            <span className="detail-section-index">03</span>
                            <div><h2>Challenges</h2>
                            <p className="section-helper">Development considerations 
                                and problem areas to document against the final 
                                implementation.</p><ul className="plain-list">
                                    {project.challenges.map(challenge =>
                             <li key={challenge}>{challenge}</li>)}</ul>
                             </div></section><section className="detail-block">
                                <span className="detail-section-index">04</span>
                                <div><h2>Future improvements</h2>
                                <ul className="future-list">{project.future.map(item =>
                                 <li key={item}><Lightbulb size={17}/>{item}</li>)}</ul></div>
                                 </section><div className="case-study-note">
                                    <b>Before submission:</b>
                                     Replace or refine the challenges and future plans
                                      with your own development experience, 
                                      verify the tech stack, and add a live 
                                      deployment URL for FitLog.</div>
                                 </div></div></section>
                                 <section className="next-project">
                                    <div className="container next-project-inner">
                                        <div><p className="eyebrow">KEEP EXPLORING</p>
                                        <h2>More work,
                                             <span className="gradient-text">more ideas.</span>
                                             </h2></div><Link className="btn btn-primary" href="/#projects">All projects 
                                             <ArrowUpRight size={17}/></Link></div></section></main>;
}
