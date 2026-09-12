import { DayList } from "@/components/DayList";
import { RoutePicker } from "@/components/RoutePicker";
import { itineraries } from "@/lib/itineraries";
import { routes } from "@/lib/options";
import {
  babyKit,
  bookingOrder,
  budgetRows,
  doNotBook,
  flights,
  foodRules,
  hotelSkip,
  inr,
  optionalExtras,
  packingAdult,
  perPerson,
  shopping,
  stays,
  transportCheat,
  trip,
  visaDocs,
} from "@/lib/trip";

const nav = [
  ["october", "If 16 Oct"],
  ["october", "16 Oct"],
  ["routes", "6 routes"],
  ["decision", "Why"],
  ["budget", "Budget"],
  ["shop", "Shopping"],
  ["book", "Book"],
  ["days", "Days"],
  ["stay", "Hotels"],
  ["move", "Trains"],
  ["baby", "Baby"],
  ["paper", "Visa"],
];

export default async function Home({ searchParams }: PageProps<"/">) {
  const params = await searchParams;
  const requested = typeof params.route === "string" ? params.route : "";
  const route = routes.find((r) => r.id === requested) ?? routes[0];
  const days = itineraries[route.id] ?? itineraries["route-fuji"];

  return (
    <div className="min-h-full">
      <nav className="no-print sticky top-0 z-20 border-b border-[#1c1410]/10 bg-[#f4efe6]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 overflow-x-auto px-4 py-3">
          <a href="#top" className="shrink-0 font-serif text-lg text-maple-deep">
            5 Japan routes
          </a>
          <div className="flex gap-4 text-xs font-medium uppercase tracking-wider text-ink-soft">
            {nav.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="whitespace-nowrap hover:text-maple">
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <header id="top" className="relative overflow-hidden bg-night text-[#f4efe6]">
        <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
          <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-maple/50 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-gold/30 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1.2fr_0.8fr] md:py-24">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-gold">
              Revised family plan · Bangalore origin
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">
              Five ways to do this trip.
              <span className="block text-gold">Pick one. Then book.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#f4efe6]/80">
              Same family, same 8–10 days from Bangalore. Each route keeps Tokyo, a second city,
              shopping time, and a slow pace. Snow is honest: likely only at Fuji or Nikko, never
              in the shopping streets.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
              <div>
                <dt className="text-[#f4efe6]/50">In Japan</dt>
                <dd className="mt-1 font-serif text-xl">{trip.window}</dd>
              </div>
              <div>
                <dt className="text-[#f4efe6]/50">Leave BLR</dt>
                <dd className="mt-1 font-serif text-xl">18 Nov night</dd>
              </div>
              <div>
                <dt className="text-[#f4efe6]/50">Core / adult</dt>
                <dd className="mt-1 font-serif text-xl">{inr(trip.perAdult)}</dd>
              </div>
              <div>
                <dt className="text-[#f4efe6]/50">Shopping</dt>
                <dd className="mt-1 font-serif text-xl">Extra</dd>
              </div>
            </dl>
          </div>
          <aside className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.2em] text-gold">What every route keeps</p>
            <ul className="mt-4 space-y-3 text-sm leading-6">
              <li>
                <strong className="text-white">Tokyo.</strong> Hotel in Asakusa, one shopping day
                (money extra).
              </li>
              <li>
                <strong className="text-white">A second city, then Kyoto.</strong> Never 9 nights
                in one place. Never four hotel changes.
              </li>
              <li>
                <strong className="text-white">Slow days.</strong> Nap window. One district at a
                time with the baby.
              </li>
              <li>
                <strong className="text-white">Core ~₹1.16–1.22 lakh / adult.</strong> Shopping on
                top. Snow only on Fuji or Nikko routes.
              </li>
            </ul>
          </aside>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-20 px-4 py-16">
        <section id="october" className="rounded-3xl bg-maple-deep p-6 text-[#f4efe6] md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">If you go 16 October</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">Switch the route. Keep the pace.</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#f4efe6]/85">
            Friday 16 Oct 2026 is a good family start date, but it is the wrong week for Kyoto
            maples and for Fuji snow. Colour is in the mountains near Tokyo — especially Nikko’s
            Lake Chuzenji / Kegon Falls (typical peak about 15–22 Oct). Cities will still look
            mostly green. Mornings are jacket weather, not snow.
          </p>
          <div className="mt-6 overflow-x-auto rounded-2xl bg-black/20">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="text-gold">
                  <th className="px-4 py-3">Need</th>
                  <th className="px-4 py-3">Late November plan</th>
                  <th className="px-4 py-3">16 October instead</th>
                </tr>
              </thead>
              <tbody className="text-[#f4efe6]/90">
                <tr className="border-t border-white/10">
                  <td className="px-4 py-3">Foliage</td>
                  <td className="px-4 py-3">Kyoto + Tokyo gardens</td>
                  <td className="px-4 py-3">Nikko highlands. Kyoto still green.</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-4 py-3">Snow</td>
                  <td className="px-4 py-3">Fuji white summit, maybe lake flurries</td>
                  <td className="px-4 py-3">Do not plan on snow at all.</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-4 py-3">Shopping</td>
                  <td className="px-4 py-3">Sat 21 Nov</td>
                  <td className="px-4 py-3">Sat 17 Oct in Tokyo. Still extra wallet.</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-4 py-3">Baby / weather</td>
                  <td className="px-4 py-3">Lake 2–6°C mornings</td>
                  <td className="px-4 py-3">Tokyo ~18°C. Nikko cooler, kinder than November.</td>
                </tr>
                <tr className="border-t border-white/10">
                  <td className="px-4 py-3">Book this</td>
                  <td className="px-4 py-3">Fuji-lake or Hakone route</td>
              <td className="px-4 py-3">
                Card: <strong>16 Oct 2026</strong> · 16–25 Oct · ~₹1.15 lakh core
              </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm leading-7">
            Locked Oct dates: leave Bangalore <strong>Thu 15 Oct night</strong>, Japan{" "}
            <strong>Fri 16 – Sun 25 Oct</strong>, Asakusa 3N → Nikko 2N → Kyoto 4N. Go up to
            Chuzenji on Monday 19–Tuesday 20 so you miss weekend Irohazaka traffic.
          </p>
          <a
            href="/?route=route-oct16#days"
            className="mt-4 inline-block rounded-full bg-gold px-5 py-2 text-sm font-semibold text-night"
          >
            Open the 16 Oct itinerary
          </a>
        </section>

        <section id="routes">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-maple">Choose</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">Six itineraries — November stays as they were</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-ink-soft">
            The first five cards are the November plans. The sixth card is only for a 16 October
            start. Click a card; the days below follow that route.
          </p>
          <div className="mt-8">
            <RoutePicker route={route} />
          </div>
        </section>

        <section id="decision">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-maple">The call</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">Why this shape</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white/80 p-6 shadow-sm">
              <h3 className="font-serif text-xl">Dates</h3>
              <p className="mt-3 text-sm leading-7 text-ink-soft">{trip.whyWindow}</p>
              <p className="mt-3 text-sm leading-7 text-ink-soft">{trip.whyNotFirstWeek}</p>
            </div>
            <div className="rounded-2xl bg-pine p-6 text-[#f4efe6]">
              <h3 className="font-serif text-xl">Snow, honestly</h3>
              <p className="mt-3 text-sm leading-7">{trip.snowTruth}</p>
              <p className="mt-3 text-sm leading-7 text-[#f4efe6]/80">
                23 Nov 2026 is a national holiday. You spend it at the lake, not in a Tokyo shop or
                a Kyoto queue.
              </p>
            </div>
          </div>
        </section>

        <section id="budget">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-maple">Money</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">
            Core {inr(trip.familyTotal)} · {inr(trip.perAdult)} each
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-ink-soft">
            This is flights, visas, hotels, trains, food, and tickets. It is above ₹1 lakh because
            Tokyo + Fuji + Kyoto with four adults cannot be done slowly for less. Shopping is{" "}
            {trip.shoppingExtra} Yen at ¥1 ≈ ₹0.56.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-[#1c1410]/10 bg-white">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-[#1c1410] text-[#f4efe6]">
                <tr>
                  <th className="px-4 py-3 font-medium">Line</th>
                  <th className="px-4 py-3 font-medium">INR</th>
                  <th className="px-4 py-3 font-medium">Note</th>
                </tr>
              </thead>
              <tbody>
                {budgetRows.map((row) => (
                  <tr key={row.item} className="border-t border-[#1c1410]/8">
                    <td className="px-4 py-3 font-medium">{row.item}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{inr(row.inr)}</td>
                    <td className="px-4 py-3 text-ink-soft">{row.note}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-maple bg-maple/8 font-semibold">
                  <td className="px-4 py-3">Family core (no shopping)</td>
                  <td className="px-4 py-3">{inr(trip.familyTotal)}</td>
                  <td className="px-4 py-3">{inr(trip.perAdult)} × 4</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {perPerson.map((p) => (
              <div key={p.label} className="rounded-xl bg-white/80 px-4 py-3">
                <p className="text-xs text-ink-soft">{p.label}</p>
                <p className="font-serif text-2xl">{inr(p.inr)}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="shop">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-maple">Own wallet</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">Shopping — outside the trip budget</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-ink-soft">{shopping.note}</p>
          <p className="mt-2 text-sm font-medium text-maple">{shopping.budgetHint}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {shopping.days.map((s) => (
              <div key={s.where} className="rounded-2xl bg-white p-5">
                <p className="text-xs uppercase tracking-wider text-gold">{s.when}</p>
                <p className="mt-1 font-serif text-xl">{s.where}</p>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{s.what}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="book">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-maple">Sequence</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">Book in this order</h2>
          <ol className="mt-8 space-y-4">
            {bookingOrder.map((b, i) => (
              <li key={b.title} className="rounded-2xl border border-[#1c1410]/10 bg-white/80 p-6">
                <p className="text-xs uppercase tracking-wider text-gold">
                  {i + 1}. {b.when}
                </p>
                <h3 className="mt-1 font-serif text-2xl">{b.title}</h3>
                <p className="mt-2 text-sm leading-7 text-ink-soft">{b.detail}</p>
                {b.links ? (
                  <div className="mt-3 flex flex-wrap gap-3">
                    {b.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        className="text-sm font-medium text-maple underline underline-offset-4"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </li>
            ))}
          </ol>

          <div className="mt-8 rounded-2xl bg-white p-6">
            <h3 className="font-serif text-2xl">Flights</h3>
            <ul className="mt-4 space-y-2 text-sm leading-7">
              <li>
                <strong>Route:</strong> {flights.routing}
              </li>
              <li>
                <strong>Airlines:</strong> {flights.book}
              </li>
              <li>
                <strong>Price:</strong> {flights.target}
              </li>
              <li>
                <strong>Infant:</strong> {flights.infant}
              </li>
              <li>
                <strong>Bags:</strong> {flights.bags}
              </li>
              <li>
                <strong>Avoid:</strong> {flights.avoid}
              </li>
            </ul>
          </div>
        </section>

        <section id="days">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-maple">Itinerary</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">One neighbourhood a day</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-ink-soft">
            Nap windows stay in. This list is for <strong>{route.name}</strong>.
          </p>
          <div className="mt-8">
            <DayList key={route.id} days={days} routeName={route.name} />
          </div>
        </section>

        <section id="stay">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-maple">Beds</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">Three hotels, two rooms each</h2>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            This route: <strong>{route.stays.join(" → ")}</strong>
            {route.id !== "route-fuji"
              ? " Book the same class of hotel (Toyoko Inn / Super Hotel, 2 rooms, breakfast) in each city. The named hotels below are the Fuji-route example."
              : null}
          </p>
          <div className="mt-8 grid gap-6">
            {stays.map((h) => (
              <div key={h.city} className="grid gap-4 rounded-2xl bg-white p-6 md:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-wider text-maple">{h.city}</p>
                  <h3 className="mt-1 font-serif text-2xl">{h.name}</h3>
                  <dl className="mt-4 space-y-2 text-sm leading-6">
                    <div>
                      <dt className="text-ink-soft">Stay</dt>
                      <dd>{h.stay}</dd>
                    </div>
                    <div>
                      <dt className="text-ink-soft">Rooms</dt>
                      <dd>{h.rooms}</dd>
                    </div>
                    <div>
                      <dt className="text-ink-soft">Nightly / trip</dt>
                      <dd>
                        {h.nightly} · {h.total}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-ink-soft">If sold out</dt>
                      <dd>{h.alt}</dd>
                    </div>
                  </dl>
                </div>
                <div className="text-sm leading-7">
                  <p>{h.why}</p>
                  <p className="mt-3 text-ink-soft">{h.walk}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-maple-deep p-6 text-[#f4efe6]">
            <h3 className="font-serif text-xl">Do not book</h3>
            <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-6">
              {hotelSkip.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id="move">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-maple">Getting about</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">Every hop, one mode</h2>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-[#1c1410]/10 bg-white">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-night text-[#f4efe6]">
                <tr>
                  <th className="px-4 py-3">Leg</th>
                  <th className="px-4 py-3">Take</th>
                  <th className="px-4 py-3">Time</th>
                  <th className="px-4 py-3">Cost</th>
                  <th className="px-4 py-3">Why</th>
                </tr>
              </thead>
              <tbody>
                {transportCheat.map((t) => (
                  <tr key={t.leg} className="border-t border-[#1c1410]/8 align-top">
                    <td className="px-4 py-3 font-medium">{t.leg}</td>
                    <td className="px-4 py-3">{t.mode}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{t.time}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{t.cost}</td>
                    <td className="px-4 py-3 text-ink-soft">{t.tip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {doNotBook.map((d) => (
              <div key={d.no} className="rounded-xl border border-maple/30 bg-white p-4">
                <p className="text-sm font-semibold text-maple">Skip: {d.no}</p>
                <p className="mt-1 text-sm leading-6 text-ink-soft">{d.why}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-maple">Food</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">How you eat for {inr(12600)} / adult</h2>
          <ul className="mt-6 space-y-2 text-sm leading-7">
            {foodRules.map((r) => (
              <li key={r} className="rounded-xl bg-white/80 px-4 py-3">
                {r}
              </li>
            ))}
          </ul>
        </section>

        <section id="baby">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-maple">18 months</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">Baby kit</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {babyKit.map((b) => (
              <div key={b.item} className="rounded-2xl bg-white p-5">
                <p className="font-medium">{b.item}</p>
                <p className="mt-1 text-sm leading-6 text-ink-soft">{b.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="paper">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-maple">Paperwork</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">Visa file for VFS Bangalore</h2>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            ₹500 + ₹800 VFS each, including the baby. Apply 6–8 weeks out. No visa on arrival.
          </p>
          <ul className="mt-6 grid gap-2 md:grid-cols-2">
            {visaDocs.map((v) => (
              <li key={v} className="rounded-xl bg-white px-4 py-3 text-sm">
                {v}
              </li>
            ))}
          </ul>
          <h3 className="mt-10 font-serif text-2xl">Adult packing</h3>
          <ul className="mt-4 list-disc pl-5 text-sm leading-7">
            {packingAdult.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </section>

        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-maple">Only if</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">Extras that still fit the pace</h2>
          <div className="mt-6 space-y-3">
            {optionalExtras.map((o) => (
              <div key={o.extra} className="rounded-2xl border border-[#1c1410]/10 bg-white p-5">
                <p className="font-medium">{o.extra}</p>
                <p className="text-sm text-maple">{o.cost}</p>
                <p className="mt-1 text-sm text-ink-soft">{o.when}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-[#1c1410]/10 px-4 py-10 text-center text-sm text-ink-soft">
        Core figures for 4 adults + infant. Photos: Unsplash. Films: official tourism YouTube.
        Confirm live fares before you pay.
      </footer>
    </div>
  );
}
