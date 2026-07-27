import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-32 pb-24 max-w-5xl mx-auto px-6">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 max-w-3xl mb-8 leading-tight">
        Building focused software for a changing world.
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
        Aureva creates practical AI products that solve real problems for
        businesses and individuals.
      </p>
      <Link
        href="#portfolio"
        className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
      >
        Explore our products
        <ArrowRight size={18} />
      </Link>
    </section>
  );
}
