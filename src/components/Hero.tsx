import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-40 pb-28 max-w-6xl mx-auto px-6">
      <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 max-w-3xl mb-8 leading-[1.05]">
        Building practical software for the AI era.
      </h1>
      <p className="text-xl text-gray-500 max-w-2xl mb-10 leading-relaxed">
        Aureva creates focused software products that solve real problems for
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
