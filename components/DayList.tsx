"use client";

import type { TripDay } from "@/lib/trip";
import { useState } from "react";

export function DayList({
  days,
  routeName,
}: {
  days: TripDay[];
  routeName: string;
}) {
  const [open, setOpen] = useState(days[0]?.id ?? "");

  return (
    <div className="space-y-3">
      <p className="rounded-xl bg-maple-deep px-4 py-3 text-sm text-[#f4efe6]">
        Showing: <strong>{routeName}</strong>
      </p>
      {days.map((d) => {
        const isOpen = open === d.id;
        return (
          <article
            key={d.id}
            className="overflow-hidden rounded-2xl border border-[#1c1410]/10 bg-white/70 shadow-sm"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? "" : d.id)}
              className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-maple">
                  {d.date} · {d.city}
                </p>
                <h3 className="mt-1 font-serif text-xl text-ink">{d.title}</h3>
                <p className="mt-1 text-sm text-ink-soft">
                  {d.pace} · {d.spend}
                </p>
              </div>
              <span className="mt-1 text-sm text-ink-soft">{isOpen ? "Hide" : "Open"}</span>
            </button>
            {isOpen ? (
              <div className="grid gap-5 border-t border-[#1c1410]/8 px-5 py-5 md:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-pine">Hour by hour</p>
                  <ul className="mt-2 list-disc space-y-2 pl-4 text-sm leading-6 text-ink">
                    {d.plan.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4 text-sm leading-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-pine">Eat</p>
                    <p className="mt-1 text-ink">{d.eat}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-pine">Move</p>
                    <p className="mt-1 text-ink">{d.move}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-pine">With the baby</p>
                    <p className="mt-1 text-ink">{d.baby}</p>
                  </div>
                </div>
              </div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
