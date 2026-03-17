"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface Stats {
  totalReservations: number;
  pendingReservations: number;
  monthRevenueMXN: number;
  monthRevenueUSD: number;
  totalActivities: number;
  totalProviders: number;
  totalClients: number;
}

interface RecentReservation {
  id: string;
  date: string;
  guests: number;
  status: string;
  total_amount: number;
  currency: string;
  created_at: string;
  clients: { name: string } | null;
  activities: { name_es: string; emoji: string } | null;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({
    totalReservations: 0,
    pendingReservations: 0,
    monthRevenueMXN: 0,
    monthRevenueUSD: 0,
    totalActivities: 0,
    totalProviders: 0,
    totalClients: 0,
  });
  const [recent, setRecent] = useState<RecentReservation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    const now = new Date();
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).toISOString();

    const [resAll, resPending, resMonth, actCount, provCount, clientCount, recentRes] =
      await Promise.all([
        supabase.from("reservations").select("id", { count: "exact", head: true }),
        supabase
          .from("reservations")
          .select("id", { count: "exact", head: true })
          .eq("status", "pending"),
        supabase
          .from("reservations")
          .select("total_amount, currency")
          .in("status", ["paid", "completed"])
          .gte("created_at", monthStart),
        supabase.from("activities").select("id", { count: "exact", head: true }),
        supabase.from("providers").select("id", { count: "exact", head: true }),
        supabase.from("clients").select("id", { count: "exact", head: true }),
        supabase
          .from("reservations")
          .select("id, date, guests, status, total_amount, currency, created_at, clients(name), activities(name_es, emoji)")
          .order("created_at", { ascending: false })
          .limit(5),
      ]);

    let mxn = 0;
    let usd = 0;
    if (resMonth.data) {
      for (const r of resMonth.data) {
        if (r.currency === "MXN") mxn += Number(r.total_amount);
        else usd += Number(r.total_amount);
      }
    }

    setStats({
      totalReservations: resAll.count ?? 0,
      pendingReservations: resPending.count ?? 0,
      monthRevenueMXN: mxn,
      monthRevenueUSD: usd,
      totalActivities: actCount.count ?? 0,
      totalProviders: provCount.count ?? 0,
      totalClients: clientCount.count ?? 0,
    });

    setRecent((recentRes.data as unknown as RecentReservation[]) ?? []);
    setLoading(false);
  }

  if (loading) {
    return (
      <div style={{ color: "#52525b", padding: "3rem", textAlign: "center" }}>
        Cargando dashboard...
      </div>
    );
  }

  return (
    <>
      <div className="admin-header">
        <h1>Dashboard</h1>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-label">Reservaciones totales</div>
          <div className="stat-value">{stats.totalReservations}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Pendientes</div>
          <div className="stat-value">{stats.pendingReservations}</div>
          <div className="stat-sub">Requieren atencion</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Ingresos del mes</div>
          <div className="stat-value">
            {stats.monthRevenueMXN > 0 ? `$${stats.monthRevenueMXN.toLocaleString()} MXN` : "$0"}
          </div>
          {stats.monthRevenueUSD > 0 && (
            <div className="stat-sub">+ ${stats.monthRevenueUSD.toLocaleString()} USD</div>
          )}
        </div>
        <div className="stat-card">
          <div className="stat-label">Actividades</div>
          <div className="stat-value">{stats.totalActivities}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Proveedores</div>
          <div className="stat-value">{stats.totalProviders}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Clientes</div>
          <div className="stat-value">{stats.totalClients}</div>
        </div>
      </div>

      <h2 style={{ color: "#fff", fontSize: "1.1rem", fontWeight: 600, marginBottom: "1rem" }}>
        Reservaciones recientes
      </h2>
      <div className="admin-table-wrap">
        {recent.length === 0 ? (
          <div className="empty-state">
            <p>No hay reservaciones aun</p>
          </div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Actividad</th>
                <th>Cliente</th>
                <th>Fecha</th>
                <th>Personas</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {recent.map((r) => (
                <tr key={r.id}>
                  <td>
                    {r.activities?.emoji} {r.activities?.name_es ?? "—"}
                  </td>
                  <td>{r.clients?.name ?? "—"}</td>
                  <td>{r.date}</td>
                  <td>{r.guests}</td>
                  <td>
                    ${Number(r.total_amount).toLocaleString()} {r.currency}
                  </td>
                  <td>
                    <span className={`badge badge-${r.status}`}>{r.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
