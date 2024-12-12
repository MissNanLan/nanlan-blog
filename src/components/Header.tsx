import Link from "next/link";

export default function Header() {
    return (
        <header className="border-b">
            <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                    Nanlan Blog
                </Link>
                <nav className="space-x-4">
                    <Link href="/login" className="hover:text-gray-600">
                        Login
                    </Link>
                </nav>
            </div>
        </header>
    );
} 