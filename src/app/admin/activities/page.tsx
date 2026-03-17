"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { Database } from "@/types/database";

type Activity = Database["public"]["Tables"]["activities"]["Row"];
type ActivityInsert = Database["public"]["Tables"]["activities"]["Insert"];
type ActivityUpdate = Database["public"]["Tables"]["activities"]["Update"];

const emptyForm: ActivityInsert = {
  name_es: "",
  name_en: "",
  description_es: "",
  description_en: "",
  category: "boat",
  price_mxn: 0,
  price_usd: 0,
  emoji: "🚤",
  image_url: null,
  active: true,
};

const categories = [
  { value: "boat", label: "Tour en barco" },
  { value: "adventure", label: "Aventura" },
  { value: "fishing", label: "Pesca" },
  { value: "food", label: "Gastronomia" },
  { value: "yacht", label: "Yate" },
];

export default function ActivitiesPage() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<Activity | null>(null);
  const [form, setForm] = useState<ActivityInsert>(emptyForm);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadActivities();
  }, []);

  async function loadActivities() {
    const { data } = await supabase
      .from("activities")
      .select("*")
      .order("created_at", { ascending: false });
    setActivities(data ?? []);
    setLoading(false);
  }

  function openCreate() {
    setEditing(null);
    setForm(emptyForm);
    setShowModal(true);
  }

  function openEdit(a: Activity) {
    setEditing(a);
    setForm({
      name_es: a.name_es,
      name_en: a.name_en,
      description_es: a.description_es,
      description_en: a.description_en,
      category: a.category,
      price_mxn: a.price_mxn,
      price_usd: a.price_usd,
      emoji: a.emoji,
      image_url: a.image_url,
      active: a.active,
    });
    setShowModal(true);
  }

  async function handleSave() {
    setSaving(true);
    if (editing) {
      await supabase.from("activities").update(form as ActivityUpdate).eq("id", editing.id);
    } else {
      await supabase.from("activities").insert(form);
    }
    setSaving(false);
    setShowModal(false);
    loadActivities();
  }

  async function handleToggle(a: Activity) {
    await supabase.from("activities").update({ active: !a.active }).eq("id", a.id);
    loadActivities();
  }

  async function handleDelete(a: Activity) {
    if (!confirm(`Eliminar "${a.name_es}"?`)) return;
    await supabase.from("activities").delete().eq("id", a.id);
    loadActivities();
  }

  function updateForm(field: string, value: string | number | boolean | null) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  if (loading) {
    return <div style={{ color: "#52525b", padding: "3rem", textAlign: "center" }}>Cargando...</div>;
  }

  return (
    <>
      <div className="admin-header">
        <h1>Actividades</h1>
        <div className="admin-header-actions">
          <button className="btn btn-primary" onClick={openCreate}>
            + Nueva actividad
          </button>
        </div>
      </div>

      <div className="admin-table-wrap">
        {activities.length === 0 ? (
          <div className="empty-state">
            <p>No hay actividades. Crea la primera.</p>
          </div>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th></th>
                <th>Nombre (ES)</th>
                <th>Nombre (EN)</th>
                <th>Categoria</th>
                <th>Precio MXN</th>
                <th>Precio USD</th>
                <th>Status</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((a) => (
                <tr key={a.id}>
                  <td style={{ fontSize: "1.5rem", width: 50 }}>{a.emoji}</td>
                  <td style={{ color: "#fff", fontWeight: 600 }}>{a.name_es}</td>
                  <td>{a.name_en}</td>
                  <td>{categories.find((c) => c.value === a.category)?.label ?? a.category}</td>
                  <td>${Number(a.price_mxn).toLocaleString()}</td>
                  <td>${Number(a.price_usd).toLocaleString()}</td>
                  <td>
                    <span className={`badge ${a.active ? "badge-active" : "badge-inactive"}`}>
                      {a.active ? "Activa" : "Inactiva"}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: "flex", gap: ".4rem" }}>
                      <button className="btn btn-ghost btn-sm" onClick={() => openEdit(a)}>
                        Editar
                      </button>
                      <button className="btn btn-ghost btn-sm" onClick={() => handleToggle(a)}>
                        {a.active ? "Desactivar" : "Activar"}
                      </button>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDelete(a)}>
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
            <h2>{editing ? "Editar actividad" : "Nueva actividad"}</h2>

            <div className="form-row">
              <div className="form-group">
                <label>Nombre (ES)</label>
                <input
                  value={form.name_es}
                  onChange={(e) => updateForm("name_es", e.target.value)}
                  placeholder="Tours en Barco"
                />
              </div>
              <div className="form-group">
                <label>Nombre (EN)</label>
                <input
                  value={form.name_en}
                  onChange={(e) => updateForm("name_en", e.target.value)}
                  placeholder="Boat Tours"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Descripcion (ES)</label>
              <textarea
                value={form.description_es}
                onChange={(e) => updateForm("description_es", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Descripcion (EN)</label>
              <textarea
                value={form.description_en}
                onChange={(e) => updateForm("description_en", e.target.value)}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Categoria</label>
                <select
                  value={form.category}
                  onChange={(e) => updateForm("category", e.target.value)}
                >
                  {categories.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Emoji</label>
                <input
                  value={form.emoji}
                  onChange={(e) => updateForm("emoji", e.target.value)}
                  placeholder="🚤"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Precio MXN</label>
                <input
                  type="number"
                  value={form.price_mxn}
                  onChange={(e) => updateForm("price_mxn", Number(e.target.value))}
                />
              </div>
              <div className="form-group">
                <label>Precio USD</label>
                <input
                  type="number"
                  value={form.price_usd}
                  onChange={(e) => updateForm("price_usd", Number(e.target.value))}
                />
              </div>
            </div>

            <div className="form-group">
              <label>URL de imagen (opcional)</label>
              <input
                value={form.image_url ?? ""}
                onChange={(e) => updateForm("image_url", e.target.value || null)}
                placeholder="https://..."
              />
            </div>

            <div className="modal-actions">
              <button className="btn btn-ghost" onClick={() => setShowModal(false)}>
                Cancelar
              </button>
              <button className="btn btn-primary" onClick={handleSave} disabled={saving}>
                {saving ? "Guardando..." : editing ? "Guardar cambios" : "Crear actividad"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
