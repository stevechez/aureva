import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-20 pb-20 lg:pt-28 lg:pb-22 max-w-6xl mx-auto px-6">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-900 max-w-3xl mb-8 leading-[1.05]">
            Building focused software for people doing real work.
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mb-10 leading-relaxed">
            Aureva creates focused software products that solve real problems
            for businesses and individuals.
          </p>
          <Link
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
          >
            Explore our products
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="hidden lg:flex relative h-72 items-center justify-center">
          <div className="absolute w-64 h-44 rounded-xl border border-gray-200 bg-white shadow-sm -rotate-6 translate-x-6 opacity-60" />
          <div className="absolute w-64 h-44 rounded-xl border border-gray-200 bg-white shadow-sm rotate-3 -translate-x-4 opacity-80" />
          <div className="relative w-64 h-44 rounded-xl border border-gray-200 bg-white shadow-lg p-5 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gray-900" />
              <span className="h-2 w-16 rounded-full bg-gray-900" />
            </div>
            <span className="h-2 w-full rounded-full bg-gray-100" />
            <span className="h-2 w-4/5 rounded-full bg-gray-100" />
            <span className="h-2 w-3/5 rounded-full bg-gray-100" />
            <span className="mt-auto h-6 w-20 rounded-md bg-gray-900" />
          </div>
        </div>
      </div>
    </section>
  );
}
