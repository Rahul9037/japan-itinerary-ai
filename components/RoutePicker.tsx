"use client";

import { placeById, places, routes, type Place } from "@/lib/options";
import { useMemo, useState } from "react";

function PlaceCard({ place }: { place: Place }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm">
      <img src={place.image} alt={place.imageAlt} className="h-48 w-full object-cover" />
      <div className="p-5">
        <h3 className="font-serif text-2xl">{place.name}</h3>
        <p className="mt-2 text-sm leading-6 text-ink-soft">{place.blurb}</p>
        <div className="mt-4 aspect-video overflow-hidden rounded-xl bg-night">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${place.video.id}`}
            title={place.video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p className="mt-2 text-xs text-ink-soft">{place.video.title}</p>
        <ul className="mt-3 space-y-1">
          {place.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-maple underline underline-offset-4"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function RoutePicker() {
  const [id, setId] = useState(routes[0].id);
  const route = useMemo(() => routes.find((r) => r.id === id) ?? routes[0], [id]);
  const routePlaces = route.placeIds.map(placeById);

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {routes.map((r) => {
          const on = r.id === id;
          return (
            <button
              key={r.id}
              type="button"
              onClick={() => setId(r.id)}
              className={`rounded-2xl border p-4 text-left transition ${
                on ? "border-maple bg-white shadow-sm" : "border-[#1c1410]/10 bg-white/50 hover:bg-white"
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-maple">{r.badge}</p>
              <p className="mt-1 font-serif text-lg leading-snug">{r.name}</p>
              <p className="mt-2 text-xs leading-5 text-ink-soft">{r.corePerAdult} core</p>
            </button>
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

        <h4 className="mt-8 font-serif text-xl">Days</h4>
        <ol className="mt-3 space-y-2">
          {route.days.map((d) => (
            <li key={d.date} className="rounded-xl bg-paper px-4 py-3 text-sm leading-6">
              <strong>{d.date}.</strong> {d.title}
            </li>
          ))}
        </ol>

        <h4 className="mt-8 font-serif text-xl">Places, films, official pages</h4>
        <div className="mt-4 grid gap-6 lg:grid-cols-3">
          {routePlaces.map((p) => (
            <PlaceCard key={p.id} place={p} />
          ))}
        </div>
      </div>

      <h3 className="mt-16 font-serif text-3xl">All places in the five routes</h3>
      <p className="mt-2 text-sm text-ink-soft">
        Photos are for planning. Videos are official tourism films where we could use them.
      </p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {places.map((p) => (
          <PlaceCard key={`all-${p.id}`} place={p} />
        ))}
      </div>
    </div>
  );
}
