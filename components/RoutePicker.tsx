import { PlaceCard } from "@/components/PlaceCard";
import { places, routes, type RouteOption } from "@/lib/options";
import Link from "next/link";

export function RoutePicker({ route }: { route: RouteOption }) {
  const routePlaces = route.placeIds.map((id) => places.find((p) => p.id === id)!);

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {routes.map((r) => {
          const on = r.id === route.id;
          return (
            <Link
              key={r.id}
              href={`/?route=${r.id}#days`}
              scroll
              className={`rounded-2xl border p-4 text-left transition ${
                on
                  ? "border-maple bg-maple-deep text-[#f4efe6] shadow-sm"
                  : "border-[#1c1410]/10 bg-white hover:border-maple/50"
              }`}
            >
              <p className={`text-xs font-semibold uppercase tracking-wider ${on ? "text-gold" : "text-maple"}`}>
                {r.badge}
              </p>
              <p className="mt-1 font-serif text-lg leading-snug">{r.name}</p>
              <p className={`mt-2 text-xs leading-5 ${on ? "text-[#f4efe6]/75" : "text-ink-soft"}`}>
                {r.corePerAdult} core
              </p>
            </Link>
          );
        })}
      </div>

      <div className="mt-8 rounded-3xl border border-[#1c1410]/10 bg-white p-6 md:p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-gold">{route.badge}</p>
        <h3 className="mt-2 font-serif text-3xl">{route.name}</h3>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-ink-soft">{route.tagline}</p>

        <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <dt className="text-ink-soft">Stay</dt>
            <dd className="font-medium">{route.stays.join(" → ")}</dd>
          </div>
          <div>
            <dt className="text-ink-soft">When</dt>
            <dd className="font-medium">{route.when}</dd>
          </div>
          <div>
            <dt className="text-ink-soft">Core / adult</dt>
            <dd className="font-medium">{route.corePerAdult}</dd>
          </div>
          <div>
            <dt className="text-ink-soft">Snow</dt>
            <dd>{route.snow}</dd>
          </div>
          <div>
            <dt className="text-ink-soft">Shopping (extra wallet)</dt>
            <dd>{route.shopping}</dd>
          </div>
          <div>
            <dt className="text-ink-soft">With the baby</dt>
            <dd>{route.baby}</dd>
          </div>
        </dl>

        <p className="mt-6 text-sm leading-7">{route.why}</p>
        <p className="mt-2 text-sm leading-7 text-maple">{route.watchOut}</p>

        <h4 className="mt-8 font-serif text-xl">Places, films, official pages</h4>
        <div className="mt-4 grid gap-6 lg:grid-cols-3">
          {routePlaces.map((p) => (
            <PlaceCard key={`${route.id}-${p.id}`} place={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
