"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface Reservation {
  id: string;
  date: string;
  guests: number;
  status: string;
  total_amount: number;
  currency: string;
  stripe_payment_id: string | null;
  notes: string | null;
  created_at: string;
  clients: { name: string; phone: string | null } | null;
  activities: { name_es: string; emoji: string } | null;
  providers: { name: string } | null;
}

const statuses = ["all", "pending", "confirmed", "paid", "completed", "cancelled"];
const statusLabels: Record<string, string> = {
  all: "Todos",
  pending: "Pendiente",
  confirmed: "Confirmado",
  paid: "Pagado",
  completed: "Completado",
  cancelled: "Cancelado",
};

export default function ReservationsPage() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  useEffect(() => {
    loadReservations();
  }, [statusFilter, dateFrom, dateTo]);

  async function loadReservations() {
    setLoading(true);
    let query = supabase
      .from("reservations")
      .select(
        "id, date, guests, status, total_amount, currency, stripe_payment_id, notes, created_at, clients(name, phone), activities(name_es, emoji), providers(name)"
      )
      .order("created_at", { ascending: false });

    if (statusFilter !== "all") {
      query = query.eq("status", statusFilter);
    }
    if (dateFrom) {
      query = query.gte("date", dateFrom);
    }
    if (dateTo) {
      query = query.lte("date", dateTo);
    }

    const { data } = await query;
    setReservations((data as unknown as Reservation[]) ?? []);
    setLoading(false);
  }

  async function updateStatus(id: string, newStatus: string) {
    await supabase.from("reservations").update({ status: newStatus }).eq("id", id);
    loadReservations();
  }

  return (
    <>
      <div className="admin-header">
        <h1>Reservaciones</h1>
      </div>

      <div className="admin-filters">
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          {statuses.map((s) => (
            <option key={s} value={s}>
              {statusLabels[s]}
            </option>
          ))}
        </select>
        <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
        <input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
        {(statusFilter !== "all" || dateFrom || dateTo) && (
          <button
            className="btn btn-ghost btn-sm"
            onClick={() => {
              setStatusFilter("all");
              setDateFrom("");
              setDateTo("");
            }}
          >
            Limpiar filtros
          </button>
        )}
      </div>

      <div className="admin-table-wrap">
        {loading ? (
          <div className="empty-state">
            <p>Cargando...</p>
          </div>
        ) : reservations.length === 0 ? (
          <div className="empty-state">
            <p>No hay reservaciones {statusFilter !== "all" ? `con status "${statusLabels[statusFilter]}"` : ""}</p>
          </div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Actividad</th>
                <th>Cliente</th>
                <th>Proveedor</th>
                <th>Fecha</th>
                <th>Personas</th>
                <th>Total</th>
                <th>Status</th>
                <th>Cambiar status</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((r) => (
                <tr key={r.id}>
                  <td>
                    {r.activities?.emoji} {r.activities?.name_es ?? "—"}
                  </td>
                  <td>
                    <div style={{ color: "#fff", fontWeight: 600 }}>{r.clients?.name ?? "—"}</div>
                    {r.clients?.phone && (
                      <div style={{ fontSize: ".75rem", color: "#52525b" }}>{r.clients.phone}</div>
                    )}
                  </td>
                  <td>{r.providers?.name ?? "—"}</td>
                  <td>{r.date}</td>
                  <td>{r.guests}</td>
                  <td style={{ fontWeight: 600, color: "#e4e4e7" }}>
                    ${Number(r.total_amount).toLocaleString()} {r.currency}
                  </td>
                  <td>
                    <span className={`badge badge-${r.status}`}>{r.status}</span>
                  </td>
                  <td>
                    <select
                      value={r.status}
                      onChange={(e) => updateStatus(r.id, e.target.value)}
                      style={{
                        background: "#0f1117",
                        border: "1px solid rgba(255,255,255,.1)",
                        color: "#e4e4e7",
                        padding: ".3rem .5rem",
                        borderRadius: "6px",
                        fontSize: ".75rem",
                        fontFamily: "inherit",
                      }}
                    >
                      {statuses.filter((s) => s !== "all").map((s) => (
                        <option key={s} value={s}>
                          {statusLabels[s]}
                        </option>
                      ))}
                    </select>
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
