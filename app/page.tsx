import { DayList } from "@/components/DayList";
import {
  babyKit,
  bookingOrder,
  budgetRows,
  doNotBook,
  flights,
  foodRules,
  hotels,
  inr,
  optionalExtras,
  packingAdult,
  perPerson,
  transportCheat,
  trip,
  visaDocs,
} from "@/lib/trip";

const nav = [
  ["decision", "Dates"],
  ["budget", "Budget"],
  ["book", "Book this"],
  ["days", "Days"],
  ["stay", "Hotel"],
  ["move", "Trains"],
  ["baby", "Baby"],
  ["paper", "Visa"],
];

export default function Home() {
  return (
    <div className="min-h-full">
      <nav className="no-print sticky top-0 z-20 border-b border-[#1c1410]/10 bg-[#f4efe6]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 overflow-x-auto px-4 py-3">
          <a href="#top" className="shrink-0 font-serif text-lg text-maple-deep">
            Kansai · Nov 2026
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
              Locked family plan · Bangalore origin
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">
              Eight nights in Osaka.
              <span className="block text-gold">Kyoto when the maples turn.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#f4efe6]/80">
              For 4 adults and a 1½-year-old. One hotel. No Shinkansen. No JR Pass. Second half of
              November, not the first week. Planned so you book the list below and stop comparing
              tabs.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
              <div>
                <dt className="text-[#f4efe6]/50">In Japan</dt>
                <dd className="mt-1 font-serif text-xl">{trip.window}</dd>
              </div>
              <div>
                <dt className="text-[#f4efe6]/50">Leave BLR</dt>
                <dd className="mt-1 font-serif text-xl">19 Nov night</dd>
              </div>
              <div>
                <dt className="text-[#f4efe6]/50">Per adult</dt>
                <dd className="mt-1 font-serif text-xl">{inr(trip.perAdult)}</dd>
              </div>
              <div>
                <dt className="text-[#f4efe6]/50">Family all-in</dt>
                <dd className="mt-1 font-serif text-xl">{inr(trip.familyTotal)}</dd>
              </div>
            </dl>
          </div>
          <aside className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.2em] text-gold">Do this, not that</p>
            <ul className="mt-4 space-y-3 text-sm leading-6">
              <li>
                <strong className="text-white">Fly into Kansai (KIX).</strong> Tokyo would add a
                bullet-train bill you cannot afford on this cap.
              </li>
              <li>
                <strong className="text-white">Sleep in Namba for all 8 nights.</strong> Day-trip
                Kyoto, Nara, Kobe.
              </li>
              <li>
                <strong className="text-white">Book 20–28 Nov.</strong> First week of November is
                the wrong foliage for city temples.
              </li>
              <li>
                <strong className="text-white">Ceiling {inr(trip.ceiling)} / adult.</strong> If a
                flight quote is over ₹55k, wait 48 hours or change the stop, do not add Tokyo.
              </li>
            </ul>
          </aside>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-20 px-4 py-16">
        <section id="decision">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-maple">The call</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">Why this week, why only Kansai</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white/80 p-6 shadow-sm">
              <h3 className="font-serif text-xl">Second half of November</h3>
              <p className="mt-3 text-sm leading-7 text-ink-soft">{trip.whyWindow}</p>
              <p className="mt-3 text-sm leading-7 text-ink-soft">{trip.whyNotFirstWeek}</p>
              <p className="mt-3 text-sm leading-7 text-ink">
                23 Nov 2026 is a Japanese national holiday. That day is locked as an indoor Osaka
                aquarium day so you are not standing in a Kyoto queue with a toddler.
              </p>
            </div>
            <div className="rounded-2xl bg-pine text-[#f4efe6] p-6">
              <h3 className="font-serif text-xl">What you will actually remember</h3>
              <ul className="mt-4 list-disc space-y-2 pl-4 text-sm leading-6">
                <li>Dotonbori at night, without dragging suitcases to a second city</li>
                <li>Nara deer — the baby’s favourite hour of the trip</li>
                <li>Fushimi gates in the morning, Kiyomizu maples, Arashiyama river</li>
                <li>Whale shark at Kaiyukan on the holiday Monday</li>
                <li>One shared Kobe steak, not four ruinous plates</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="budget">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-maple">Money</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">Family total {inr(trip.familyTotal)}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-ink-soft">
            Split four ways: {inr(trip.perAdult)} per adult. The infant is folded into the family
            total (lap fare, visa, snacks). Yen converted at ¥1 ≈ ₹0.56. Recheck the rate when you
            pay hotels.
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
                  <td className="px-4 py-3">Family all-in</td>
                  <td className="px-4 py-3">{inr(trip.familyTotal)}</td>
                  <td className="px-4 py-3">{inr(trip.perAdult)} × 4 adults</td>
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

        <section id="book">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-maple">Sequence</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">Book in this order. Stop shopping.</h2>
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
            <h3 className="font-serif text-2xl">Flights — exact brief for the ticket desk</h3>
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
                <strong>Do not buy:</strong> {flights.avoid}
              </li>
            </ul>
          </div>
        </section>

        <section id="days">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-maple">Itinerary</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">Open a day. Follow it.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-ink-soft">
            Each Japan day has a nap window. If you skip the nap, the evening in Dotonbori will
            fail. Kyoto is two separate days so you are not crossing the city with a tired child.
          </p>
          <div className="mt-8">
            <DayList />
          </div>
        </section>

        <section id="stay">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-maple">Beds</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">{hotels.primary.name}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6">
              <dl className="space-y-3 text-sm leading-6">
                <div>
                  <dt className="text-ink-soft">Stay</dt>
                  <dd>{hotels.primary.stay}</dd>
                </div>
                <div>
                  <dt className="text-ink-soft">Rooms</dt>
                  <dd>{hotels.primary.rooms}</dd>
                </div>
                <div>
                  <dt className="text-ink-soft">Nightly</dt>
                  <dd>{hotels.primary.nightly}</dd>
                </div>
                <div>
                  <dt className="text-ink-soft">Trip total</dt>
                  <dd className="font-medium">{hotels.primary.total}</dd>
                </div>
                <div>
                  <dt className="text-ink-soft">Walk</dt>
                  <dd>{hotels.primary.walk}</dd>
                </div>
                <div>
                  <dt className="text-ink-soft">How to book</dt>
                  <dd>{hotels.primary.book}</dd>
                </div>
                <div>
                  <dt className="text-ink-soft">If sold out</dt>
                  <dd>{hotels.primary.alt}</dd>
                </div>
              </dl>
            </div>
            <div className="rounded-2xl bg-maple-deep p-6 text-[#f4efe6]">
              <h3 className="font-serif text-2xl">Why this hotel, not a nicer one</h3>
              <ul className="mt-4 list-disc space-y-2 pl-4 text-sm leading-6">
                {hotels.primary.why.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
              <h3 className="mt-6 font-serif text-xl">Do not book</h3>
              <ul className="mt-2 list-disc space-y-2 pl-4 text-sm leading-6 text-[#f4efe6]/85">
                {hotels.skip.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
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
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">How you eat for ₹12,750 / adult</h2>
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
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">Baby kit and rules of the road</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {babyKit.map((b) => (
              <div key={b.item} className="rounded-2xl bg-white p-5">
                <p className="font-medium">{b.item}</p>
                <p className="mt-1 text-sm leading-6 text-ink-soft">{b.note}</p>
              </div>
            ))}
          </div>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-7 text-ink">
            <li>Two adults on ‘baby duty’, two on bags/tickets, rotate each day.</li>
            <li>Public toilets in stations have changing tables more often than temples do.</li>
            <li>Most trains: children under 6 ride free if they sit on a lap and do not take a reserved seat of their own.</li>
            <li>Pharmacies: look for a green cross. For fever after hours, the hotel will call a clinic; insurance PDF on the phone.</li>
          </ul>
        </section>

        <section id="paper">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-maple">Paperwork</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">Visa file for VFS Bangalore</h2>
          <p className="mt-3 text-sm leading-7 text-ink-soft">
            Indians still pay ₹500 + ₹800 VFS even after the 2026 global fee hike. Apply about 6–8
            weeks out. Baby needs a full application. No visa on arrival.
          </p>
          <ul className="mt-6 grid gap-2 md:grid-cols-2">
            {visaDocs.map((v) => (
              <li key={v} className="rounded-xl bg-white px-4 py-3 text-sm">
                {v}
              </li>
            ))}
          </ul>
          <h3 className="mt-10 font-serif text-2xl">Adult packing (keep it small)</h3>
          <ul className="mt-4 list-disc pl-5 text-sm leading-7">
            {packingAdult.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </section>

        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-maple">If someone insists</p>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl">The only extras, with prices</h2>
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
        Planning figures for 4 adults + infant, Bangalore → Kansai, 19–28 Nov 2026. Confirm live
        fares, hotel calendars and VFS document lists before you pay. Not a booking agency.
      </footer>
    </div>
  );
}
