"use client";

import { itineraries } from "@/lib/itineraries";
import { routes, type RouteOption } from "@/lib/options";
import type { TripDay } from "@/lib/trip";
import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type PlannerValue = {
  routeId: string;
  route: RouteOption;
  days: TripDay[];
  selectRoute: (id: string) => void;
};

const PlannerContext = createContext<PlannerValue | null>(null);

export function PlannerProvider({ children }: { children: ReactNode }) {
  const [routeId, setRouteId] = useState(routes[0].id);
  const value = useMemo(() => {
    const route = routes.find((r) => r.id === routeId) ?? routes[0];
    const days = itineraries[route.id] ?? itineraries["route-fuji"];
    return {
      routeId: route.id,
      route,
      days,
      selectRoute: (id: string) => setRouteId(id),
    };
  }, [routeId]);

  return <PlannerContext.Provider value={value}>{children}</PlannerContext.Provider>;
}

export function usePlanner() {
  const ctx = useContext(PlannerContext);
  if (!ctx) throw new Error("usePlanner must be inside PlannerProvider");
  return ctx;
}
