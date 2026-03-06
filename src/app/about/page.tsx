export default function AboutPage() {
  return (
    <main className="w-full">
      {/* H1 */}
      <section className="w-full">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-5xl">
              About PluggedIn Pros
            </h1>
          </div>
        </div>
      </section>

      {/* Our Focus */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-3xl">
              Our Focus
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              PluggedIn Pros specializes in Wi-Fi and network infrastructure for
              small businesses in San Francisco.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Too often, network systems are treated as afterthoughts — until
              something breaks. Equipment gets added over time. Access points
              are placed for convenience. Guest and POS traffic share the same
              network without clear separation.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              The result is instability that surfaces during the worst possible
              moments.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Our focus is simple: design and maintain reliable infrastructure
              so business owners can focus on running their operations.
            </p>
          </div>
        </div>
      </section>

      {/* Why Infrastructure Matters */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-3xl">
              Why Infrastructure Matters
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              In restaurants, retail spaces, offices, and service-based
              businesses, connectivity is operational.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              When the network is unstable:
            </p>

            <ul className="mt-4 space-y-3 text-base leading-relaxed text-slate-700">
              {[
                "Transactions slow or fail",
                "Staff workflows are interrupted",
                "Guest experiences suffer",
                "Owners lose time diagnosing issues",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--pip-navy)] opacity-70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-base leading-relaxed text-slate-700">
              Reliable infrastructure reduces stress and prevents recurring
              problems.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              We approach network design with long-term stability in mind — not
              quick fixes.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-3xl">
              How We Work
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              We prioritize:
            </p>

            <ul className="mt-4 space-y-3 text-base leading-relaxed text-slate-700">
              {[
                "Clear explanations",
                "Practical recommendations",
                "Clean installations and organization",
                "Proper segmentation between guest and operational systems",
                "Infrastructure sized appropriately for real-world usage",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--pip-navy)] opacity-70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
              <p>No unnecessary complexity.</p>
              <p>No overbuilt enterprise architecture.</p>
              <p>No pressure to purchase hardware that isn’t needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Experience */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-3xl">
              Local Experience
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              San Francisco presents unique network challenges:
            </p>

            <ul className="mt-4 space-y-3 text-base leading-relaxed text-slate-700">
              {[
                "Dense wireless interference",
                "Multi-tenant buildings",
                "Older construction and thick walls",
                "Outdoor seating and patio coverage",
                "High peak-hour device density",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--pip-navy)] opacity-70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-base leading-relaxed text-slate-700">
              We design and optimize networks for these real-world conditions —
              not ideal lab environments.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-3xl">
              Our Commitment
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              We aim to be steady, reliable, and easy to work with.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Most businesses don’t want to think about their network every day.
              They just want it to work.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              That’s the standard we design for.
            </p>
          </div>
        </div>
      </section>

      {/* Serving San Francisco Small Businesses */}
      <section className="w-full border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-6 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--pip-navy)] sm:text-3xl">
              Serving San Francisco Small Businesses
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              PluggedIn Pros provides on-site Wi-Fi and network infrastructure
              services throughout San Francisco.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
