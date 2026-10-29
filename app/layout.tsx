import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Rezaul Islam | Web Developer, SEO & Brand Marketing',
  description: 
  'Portfolio of Rezaul Islam — web development, SEO, digital marketing and brand strategy.',
  metadataBase: new URL('https://example.com'),
  openGraph: { title: 'Rezaul Islam — Portfolio', 
    description: 'Web development, SEO and brand marketing.',
     type: 'website' }
};
export default function RootLayout({ children }: Readonly<
  { children: React.ReactNode }>) {
  return <html lang="en"><body>
    <Navbar />
    {children}
    <Footer />
    </body></html>;
}
