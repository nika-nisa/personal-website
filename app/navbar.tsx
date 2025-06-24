import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="position: fixed w-full flex justify-center gap-9 py-4 font-mono text-lg border-b">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/projects" className="hover:underline">Projects</Link>
        <Link href="/about" className="hover:underline">About</Link>
        </nav>
    );
}