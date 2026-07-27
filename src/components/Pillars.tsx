import { Briefcase, UserCheck, BookOpen } from "lucide-react";

export function Pillars() {
  const pillars = [
    {
      icon: <Briefcase className="w-5 h-5 text-gray-900 mb-4" />,
      title: "Business Software",
      description:
        "Products that help businesses capture opportunities, improve workflows, and operate more effectively.",
    },
    {
      icon: <UserCheck className="w-5 h-5 text-gray-900 mb-4" />,
      title: "Personal Software",
      description:
        "Tools that help people learn, organize, create, and accomplish meaningful goals.",
    },
    {
      icon: <BookOpen className="w-5 h-5 text-gray-900 mb-4" />,
      title: "AI Education",
      description: "Helping people understand and use AI without hype.",
    },
  ];

  return (
    <section
      id="what-we-do"
      className="py-24 max-w-6xl mx-auto px-6 border-b border-gray-100"
    >
      <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-12">
        What We Do
      </h2>
      <div className="grid md:grid-cols-3 gap-12">
        {pillars.map((pillar, index) => (
          <div key={index}>
            {pillar.icon}
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              {pillar.title}
            </h4>
            <p className="text-gray-600 leading-relaxed">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
