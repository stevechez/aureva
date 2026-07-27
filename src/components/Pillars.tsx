import { Briefcase, UserCheck, BookOpen } from "lucide-react";

export function Pillars() {
  const pillars = [
    {
      icon: <Briefcase className="w-6 h-6 text-gray-900 mb-4" />,
      title: "Business Tools",
      description:
        "Tools that help businesses capture opportunities, reduce repetitive work, and operate more efficiently.",
    },
    {
      icon: <UserCheck className="w-6 h-6 text-gray-900 mb-4" />,
      title: "Personal Productivity",
      description:
        "Software that helps people learn, organize, and accomplish meaningful goals.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-gray-900 mb-4" />,
      title: "AI Education",
      description: "Helping people understand and use AI without hype.",
    },
  ];

  return (
    <section className="py-24 max-w-5xl mx-auto px-6 border-b border-gray-100">
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
