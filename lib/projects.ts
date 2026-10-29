export type Project = {
  slug: string; name: string; eyebrow: string; description: string; image: string;
  stack: string[]; live: string; github: string; features: string[]; challenges: string[]; future: string[];
};
export const projects: Project[] = [
  {
    slug: 'movie-explorer', name: 'Movie Explorer', eyebrow: 'MOVIE DISCOVERY · WEB APP',
    description: 'A movie discovery experience built to make browsing and exploring film titles straightforward. The interface focuses on clear content presentation and navigation.',
    image: '/images/project-movie.svg', stack: ['React', 'JavaScript', 'React Router'],
    live: 'https://movie-explorer-pied-two.vercel.app/', github: 'https://github.com/rezaulovid/movie-explorer',
    features: ['Movie-focused browsing interface', 'Client-side navigation with React Router', 'Responsive layout for different screen sizes'],
    challenges: ['Keeping navigation and page state predictable across routes', 'Presenting poster-led content clearly on smaller screens'],
    future: ['Add richer search and filtering', 'Improve loading, empty and error states', 'Review accessibility and performance']
  },
  {
    slug: 'fitlog', name: 'FitLog', eyebrow: 'FITNESS · TRACKING APP',
    description: 'A fitness-focused project designed to bring workout and plan information into one clear interface. Confirm the final feature list and technology versions against the submitted repository before publishing.',
    image: '/images/project-fitlog.svg', stack: ['Next.js', 'React', 'Tailwind CSS'],
    live: 'https://fit-log-ashy-two.vercel.app/', github: 'https://github.com/rezaulovid/B14-A6-Fit-Log',
    features: ['Fitness and plan-focused experience', 'Structured dashboard-style information', 'Responsive-first UI direction'],
    challenges: ['Organizing information so key plan details are easy to scan', 'Keeping the experience usable across viewport sizes'],
    future: ['Add the verified live deployment URL', 'Document the final API and data flow', 'Add progress visualizations and stronger form feedback']
  },
  {
    slug: 'bazardor', name: 'BazarDor (বাজার দর)', eyebrow: 'BANGLADESH · MARKET PRICE INFO',
    description: 'A Bengali-first web application concept that helps people explore essential commodity prices across local markets in Bangladesh.',
    image: '/images/project-bazardor.svg', stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    live: 'https://bazar-dor14.vercel.app/', github: 'https://github.com/rezaulovid/bazar-dorA7',
    features: ['33 essential commodities across 8 categories', 'Market-price comparison and trend presentation', 'Responsive Bengali-first interface'],
    challenges: ['Presenting multiple commodity categories in a clear structure', 'Making price movement understandable at a glance'],
    future: ['Add more verified market and date coverage', 'Improve filters and price history views', 'Expand accessibility and data-source transparency']
  }
];
