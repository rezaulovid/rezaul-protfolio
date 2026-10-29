export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  issueDate?: string;
  skills?: string[];
  file: string; // local public path to the PNG preview image, e.g. /certificates/example.png
  pdfFile: string; // local public path to the original PDF for download
  verificationUrl?: string; // external verification link, optional
  description?: string;
};

/**
 * Editable list of certificates.
 * To add, edit, or remove a certificate, modify this array only.
 *
 * Notes:
 * - `file` must point to a PNG image inside `public/certificates/` for inline viewing.
 * - `pdfFile` must point to the original PDF inside `public/certificates/` for download.
 * - `verificationUrl` is only set when there is direct evidence linking this
 *   certificate to a verification page. Unmatched certificates intentionally
 *   omit it so no false verification links are created.
 */
export const certificates: Certificate[] = [
  {
    id: 'ai-seo-geo-skill-up',
    title: 'AI SEO Mastering Generative Engine Optimization (GEO)',
    issuer: 'Skill-up',
    issueDate: undefined,
    skills: ['Generative AI', 'SEO', 'GEO'],
    file: '/certificates/ai-seo-geo-skill-up.png',
    pdfFile: '/certificates/AI SEO Mastering Generative Engine Optimization (GEO)– Skill-up.pdf',
    description: 'Certificate in AI-powered SEO and Generative Engine Optimization.',
  },
  {
    id: 'brand-management-aligning-business',
    title: 'Brand Management Aligning Business, Brand and Behaviour',
    issuer: 'Not specified',
    issueDate: undefined,
    skills: ['Brand Management', 'Brand Strategy'],
    file: '/certificates/brand-management-aligning-business.png',
    pdfFile: '/certificates/Brand Management Aligning Business, Brand and Behaviour.pdf',
    description: 'Certificate in brand management and brand behaviour alignment.',
  },
  {
    id: 'brand-marketing-seo-tools-wix-coursera',
    title: 'Brand Marketing and SEO Tools using Wix',
    issuer: 'Coursera',
    issueDate: undefined,
    skills: ['Brand Marketing', 'SEO', 'Wix'],
    file: '/certificates/brand-marketing-seo-tools-wix-coursera.png',
    pdfFile: '/certificates/Brand Marketing and SEO Tools using Wix Coursera 7LS1WDJVJHOZ.pdf',
    verificationUrl:
      'https://www.coursera.org/account/accomplishments/verify/7LS1WDJVJHOZ',
    description:
      'Verified Coursera certificate in Brand Marketing and SEO Tools using Wix.',
  },
  {
    id: 'customer-understanding-digital-marketing-channels',
    title: 'Customer Understanding and Digital Marketing Channels',
    issuer: 'Not specified',
    issueDate: undefined,
    skills: ['Digital Marketing', 'Customer Insight'],
    file: '/certificates/customer-understanding-digital-marketing-channels.png',
    pdfFile: '/certificates/Customer Understanding and Digital Marketing Channels  -certification.pdf',
    description: 'Certificate in customer understanding and digital marketing channels.',
  },
  {
    id: 'foundations-of-cybersecurity',
    title: 'Foundations of Cybersecurity',
    issuer: 'Not specified',
    issueDate: undefined,
    skills: ['Cybersecurity', 'Information Security'],
    file: '/certificates/foundations-of-cybersecurity.png',
    pdfFile: '/certificates/Foundations of Cybersecurity.pdf',
    description: 'Certificate in cybersecurity foundations.',
  },
  {
    id: 'foundations-of-digital-marketing-e-commerce',
    title: 'Foundations of Digital Marketing and E-commerce',
    issuer: 'Not specified',
    issueDate: undefined,
    skills: ['Digital Marketing', 'E-commerce'],
    file: '/certificates/foundations-of-digital-marketing-e-commerce.png',
    pdfFile: '/certificates/Foundations of Digital Marketing and E-commerce.pdf',
    description: 'Certificate in digital marketing and e-commerce foundations.',
  },
  {
    id: 'from-likes-to-leads-interact-with-customers-online',
    title: 'From Likes to Leads Interact with Customers Online',
    issuer: 'Not specified',
    issueDate: undefined,
    skills: ['Social Media Marketing', 'Lead Generation'],
    file: '/certificates/from-likes-to-leads-interact-with-customers.png',
    pdfFile: '/certificates/From Likes to Leads Interact with Customers Online.pdf',
    description: 'Certificate in customer interaction and lead generation.',
  },
  {
    id: 'generative-ai-content-creation',
    title: 'Generative AI Content Creation',
    issuer: 'Not specified',
    issueDate: undefined,
    skills: ['Generative AI', 'Content Creation'],
    file: '/certificates/generative-ai-content-creation.png',
    pdfFile: '/certificates/Generative AI Content Creation.pdf',
    description: 'Certificate in generative AI content creation.',
  },
  {
    id: 'google-ads-for-beginners',
    title: 'Google Ads for Beginners Master Essentials & Fundamentals',
    issuer: 'Not specified',
    issueDate: undefined,
    skills: ['Google Ads', 'PPC', 'Search Advertising'],
    file: '/certificates/google-ads-for-beginners.png',
    pdfFile: '/certificates/Google Ads for Beginners Master Essentials & Fundamentals.pdf',
    description: 'Certificate in Google Ads essentials and fundamentals.',
  },
  {
    id: 'introduccion-a-facebook-ads-manager',
    title: 'Introducción a Facebook Ads Manager',
    issuer: 'Not specified',
    issueDate: undefined,
    skills: ['Facebook Ads', 'Social Advertising'],
    file: '/certificates/introduccion-a-facebook-ads-manager.png',
    pdfFile: '/certificates/Introducción a Facebook Ads Manager.pdf',
    description: 'Certificate in Facebook Ads Manager (Spanish).',
  },
  {
    id: 'seo-university-of-california-davis',
    title: 'Search Engine Optimization (SEO)',
    issuer: 'University of California, Davis',
    issueDate: undefined,
    skills: ['SEO', 'Search Optimization'],
    file: '/certificates/seo-university-of-california-davis.png',
    pdfFile: '/certificates/Search Engine Optimization (SEO) –  University of California, Davis..pdf',
    description: 'Certificate in SEO from University of California, Davis.',
  },
];
