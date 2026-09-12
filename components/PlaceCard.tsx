"use client";

import type { Place } from "@/lib/options";
import { useState } from "react";

export function PlaceCard({ place }: { place: Place }) {
  const [play, setPlay] = useState(false);
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm">
      <img src={place.image} alt={place.imageAlt} className="h-48 w-full object-cover" />
      <div className="p-5">
        <h3 className="font-serif text-2xl">{place.name}</h3>
        <p className="mt-2 text-sm leading-6 text-ink-soft">{place.blurb}</p>
        <div className="mt-4 aspect-video overflow-hidden rounded-xl bg-night">
          {play ? (
            <iframe
              className="h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${place.video.id}?autoplay=1`}
              title={place.video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlay(true)}
              className="flex h-full w-full items-center justify-center px-4 text-center text-sm text-[#f4efe6]"
            >
              Play film — {place.video.title}
            </button>
          )}
        </div>
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
