import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-gray-900"
        >
          Aureva
        </Link>
        <nav className="flex gap-6 text-sm font-medium text-gray-600">
          <Link
            href="#vision"
            className="hover:text-gray-900 transition-colors"
          >
            Vision
          </Link>
          <Link
            href="#portfolio"
            className="hover:text-gray-900 transition-colors"
          >
            Portfolio
          </Link>
          <Link href="#about" className="hover:text-gray-900 transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
