"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { Database } from "@/types/database";

type Provider = Database["public"]["Tables"]["providers"]["Row"];

const emptyForm = {
  name: "",
  contact_phone: "",
  contact_email: "",
  activity_ids: [] as string[],
  price_to_us: 0,
  notes: "",
  active: true,
};

interface ActivityOption {
  id: string;
  name_es: string;
  emoji: string;
}

export default function ProvidersPage() {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [activities, setActivities] = useState<ActivityOption[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<Provider | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const [provRes, actRes] = await Promise.all([
      supabase.from("providers").select("*").order("created_at", { ascending: false }),
      supabase.from("activities").select("id, name_es, emoji").eq("active", true),
    ]);
    setProviders(provRes.data ?? []);
    setActivities(actRes.data ?? []);
    setLoading(false);
  }

  function openCreate() {
    setEditing(null);
    setForm(emptyForm);
    setShowModal(true);
  }

  function openEdit(p: Provider) {
    setEditing(p);
    setForm({
      name: p.name,
      contact_phone: p.contact_phone ?? "",
      contact_email: p.contact_email ?? "",
      activity_ids: p.activity_ids ?? [],
      price_to_us: Number(p.price_to_us) || 0,
      notes: p.notes ?? "",
      active: p.active,
    });
    setShowModal(true);
  }

  async function handleSave() {
    setSaving(true);
    const payload = {
      name: form.name,
      contact_phone: form.contact_phone || null,
      contact_email: form.contact_email || null,
      activity_ids: form.activity_ids,
      price_to_us: form.price_to_us || null,
      notes: form.notes || null,
      active: form.active,
    };

    if (editing) {
      await supabase.from("providers").update(payload).eq("id", editing.id);
    } else {
      await supabase.from("providers").insert(payload);
    }
    setSaving(false);
    setShowModal(false);
    loadData();
  }

  async function handleDelete(p: Provider) {
    if (!confirm(`Eliminar "${p.name}"?`)) return;
    await supabase.from("providers").delete().eq("id", p.id);
    loadData();
  }

  function toggleActivity(actId: string) {
    setForm((prev) => ({
      ...prev,
      activity_ids: prev.activity_ids.includes(actId)
        ? prev.activity_ids.filter((id) => id !== actId)
        : [...prev.activity_ids, actId],
    }));
  }

  function getActivityNames(ids: string[]) {
    return ids
      .map((id) => {
        const a = activities.find((act) => act.id === id);
        return a ? `${a.emoji} ${a.name_es}` : null;
      })
      .filter(Boolean)
      .join(", ");
  }

  if (loading) {
    return <div style={{ color: "#52525b", padding: "3rem", textAlign: "center" }}>Cargando...</div>;
  }

  return (
    <>
      <div className="admin-header">
        <h1>Proveedores</h1>
        <div className="admin-header-actions">
          <button className="btn btn-primary" onClick={openCreate}>
            + Nuevo proveedor
          </button>
        </div>
      </div>

      <div className="admin-table-wrap">
        {providers.length === 0 ? (
          <div className="empty-state">
            <p>No hay proveedores. Agrega el primero.</p>
          </div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Telefono</th>
                <th>Email</th>
                <th>Actividades</th>
                <th>Precio para nosotros</th>
                <th>Status</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {providers.map((p) => (
                <tr key={p.id}>
                  <td style={{ color: "#fff", fontWeight: 600 }}>{p.name}</td>
                  <td>{p.contact_phone ?? "—"}</td>
                  <td>{p.contact_email ?? "—"}</td>
                  <td style={{ maxWidth: 200, overflow: "hidden", textOverflow: "ellipsis" }}>
                    {getActivityNames(p.activity_ids) || "—"}
                  </td>
                  <td>{p.price_to_us ? `$${Number(p.price_to_us).toLocaleString()}` : "—"}</td>
                  <td>
                    <span className={`badge ${p.active ? "badge-active" : "badge-inactive"}`}>
                      {p.active ? "Activo" : "Inactivo"}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: "flex", gap: ".4rem" }}>
                      <button className="btn btn-ghost btn-sm" onClick={() => openEdit(p)}>
                        Editar
                      </button>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDelete(p)}>
                        Eliminar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{editing ? "Editar proveedor" : "Nuevo proveedor"}</h2>

            <div className="form-group">
              <label>Nombre</label>
              <input
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder="Nombre del proveedor"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Telefono</label>
                <input
                  value={form.contact_phone}
                  onChange={(e) => setForm((f) => ({ ...f, contact_phone: e.target.value }))}
                  placeholder="+52 624..."
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  value={form.contact_email}
                  onChange={(e) => setForm((f) => ({ ...f, contact_email: e.target.value }))}
                  placeholder="correo@ejemplo.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Actividades que ofrece</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".4rem", marginTop: ".25rem" }}>
                {activities.map((a) => (
                  <button
                    key={a.id}
                    type="button"
                    className={`btn btn-sm ${form.activity_ids.includes(a.id) ? "btn-primary" : "btn-ghost"}`}
                    onClick={() => toggleActivity(a.id)}
                  >
                    {a.emoji} {a.name_es}
                  </button>
                ))}
                {activities.length === 0 && (
                  <span style={{ color: "#52525b", fontSize: ".82rem" }}>
                    Crea actividades primero
                  </span>
                )}
              </div>
            </div>

            <div className="form-group">
              <label>Precio para nosotros (MXN)</label>
              <input
                type="number"
                value={form.price_to_us}
                onChange={(e) => setForm((f) => ({ ...f, price_to_us: Number(e.target.value) }))}
              />
            </div>

            <div className="form-group">
              <label>Notas</label>
              <textarea
                value={form.notes}
                onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
                placeholder="Notas internas sobre este proveedor..."
              />
            </div>

            <div className="modal-actions">
              <button className="btn btn-ghost" onClick={() => setShowModal(false)}>
                Cancelar
              </button>
              <button className="btn btn-primary" onClick={handleSave} disabled={saving}>
                {saving ? "Guardando..." : editing ? "Guardar cambios" : "Crear proveedor"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
