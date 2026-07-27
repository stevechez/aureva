export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 max-w-5xl mx-auto px-6">
      <h2 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">
        Portfolio
      </h2>

      {/* ADD: explains why these products exist */}
      <p className="text-xl text-gray-600 max-w-3xl mb-12">
        Aureva explores focused software ideas and builds products where
        thoughtful technology can solve meaningful problems.
      </p>

      <div className="grid md:grid-cols-2 gap-16">
        {/* Current Product */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Current Product
          </h3>

          <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
            <div className="flex items-start justify-between mb-2">
              <h4 className="text-lg font-bold text-gray-900">IntelliLease</h4>

              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Pilot
              </span>
            </div>

            <p className="text-gray-600 mb-4">
              AI leasing assistant for self-storage operators. Helps facilities
              capture missed rental opportunities by answering calls and turning
              conversations into actionable follow-up.
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
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Explorations
          </h3>

          <div className="space-y-8">
            {/* ADD: Business category */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                Business Software
              </h4>

              <ul className="space-y-6">
                <li className="border-b border-gray-100 pb-6">
                  <div className="flex items-center justify-between mb-1">
                    <h5 className="font-bold text-gray-900">SupportOS</h5>
                    <span className="text-xs text-gray-400">Exploration</span>
                  </div>

                  <p className="text-gray-600 text-sm">
                    AI operations workspace for customer support teams.
                  </p>
                </li>

                <li className="border-b border-gray-100 pb-6">
                  <div className="flex items-center justify-between mb-1">
                    <h5 className="font-bold text-gray-900">BuildRail</h5>
                    <span className="text-xs text-gray-400">Exploration</span>
                  </div>

                  <p className="text-gray-600 text-sm">
                    AI tools designed around contractor workflows and field
                    service businesses.
                  </p>
                </li>

                <li className="border-b border-gray-100 pb-6">
                  <div className="flex items-center justify-between mb-1">
                    <h5 className="font-bold text-gray-900">LeadsList</h5>
                    <span className="text-xs text-gray-400">Exploration</span>
                  </div>

                  <p className="text-gray-600 text-sm">
                    Tools for discovering and organizing business opportunities.
                  </p>
                </li>
              </ul>
            </div>

            {/* ADD: Personal category */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
                Personal & Creative Software
              </h4>

              <ul className="space-y-6">
                <li className="border-b border-gray-100 pb-6">
                  <div className="flex items-center justify-between mb-1">
                    <h5 className="font-bold text-gray-900">PianoOS</h5>
                    <span className="text-xs text-gray-400">Exploration</span>
                  </div>

                  <p className="text-gray-600 text-sm">
                    Personalized AI-powered piano learning.
                  </p>
                </li>

                <li className="border-b border-gray-100 pb-6">
                  <div className="flex items-center justify-between mb-1">
                    <h5 className="font-bold text-gray-900">AuthorOS</h5>
                    <span className="text-xs text-gray-400">Exploration</span>
                  </div>

                  <p className="text-gray-600 text-sm">
                    AI tools designed to support writers and creators.
                  </p>
                </li>

                <li>
                  <div className="flex items-center justify-between mb-1">
                    <h5 className="font-bold text-gray-900">LifeOS</h5>
                    <span className="text-xs text-gray-400">Exploration</span>
                  </div>

                  <p className="text-gray-600 text-sm">
                    AI tools for reflection, planning, and personal growth.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
