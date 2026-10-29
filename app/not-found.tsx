import Link from 'next/link';
export default function NotFound()
 { return <main className="not-found container">
    <p className="eyebrow">404 / NOT FOUND</p>
    <h1>This page went off-script.</h1>
    <p>The page you are looking for does not exist.</p>
    <Link className="btn btn-primary" href="/">Back to homepage</Link>
    </main>; }
