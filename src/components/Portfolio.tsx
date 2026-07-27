export function Portfolio() {
  return (
    <section id="portfolio" className="py-28 max-w-6xl mx-auto px-6">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
        Portfolio
      </h2>

      <p className="text-xl text-gray-600 max-w-3xl mb-16">
        Aureva builds one focused product today, while exploring where else
        practical software can help.
      </p>

      {/* Current Product */}
      <div className="mb-20">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-5">
          Current Product
        </h3>

        <div className="border border-gray-200 rounded-xl p-8 md:p-10 bg-white shadow-sm">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h4 className="text-2xl font-semibold text-gray-900">
              IntelliLease
            </h4>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              Pilot
            </span>
          </div>

          <p className="text-gray-600 max-w-2xl mb-6 leading-relaxed">
            AI leasing assistant for self-storage operators. Helps facilities
            capture missed rental opportunities by answering calls,
            understanding renter needs, and creating actionable follow-up.
          </p>

          <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
          >
            Visit IntelliLease &rarr;
          </a>
        </div>
      </div>

      {/* Explorations */}
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
          Explorations
        </h3>
        <p className="text-sm text-gray-500 mb-8">
          Early ideas Aureva is exploring — not yet products.
        </p>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Business Software
            </h4>

            <ul className="space-y-5">
              <li className="border-b border-gray-100 pb-5">
                <h5 className="font-medium text-gray-900 mb-1">SupportOS</h5>
                <p className="text-gray-500 text-sm">
                  AI operations workspace for customer support teams.
                </p>
              </li>

              <li className="border-b border-gray-100 pb-5">
                <h5 className="font-medium text-gray-900 mb-1">BuildRail</h5>
                <p className="text-gray-500 text-sm">
                  AI tools designed around contractor workflows and field
                  service businesses.
                </p>
              </li>

              <li>
                <h5 className="font-medium text-gray-900 mb-1">LeadsList</h5>
                <p className="text-gray-500 text-sm">
                  Tools for discovering and organizing business opportunities.
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Personal &amp; Creative Software
            </h4>

            <ul className="space-y-5">
              <li className="border-b border-gray-100 pb-5">
                <h5 className="font-medium text-gray-900 mb-1">PianoOS</h5>
                <p className="text-gray-500 text-sm">
                  Personalized AI-powered piano learning.
                </p>
              </li>

              <li className="border-b border-gray-100 pb-5">
                <h5 className="font-medium text-gray-900 mb-1">AuthorOS</h5>
                <p className="text-gray-500 text-sm">
                  AI tools designed to support writers and creators.
                </p>
              </li>

              <li>
                <h5 className="font-medium text-gray-900 mb-1">LifeOS</h5>
                <p className="text-gray-500 text-sm">
                  AI tools for reflection, planning, and personal growth.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
