"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./admin.css";

const navItems = [
  {
    href: "/admin",
    label: "Dashboard",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    href: "/admin/activities",
    label: "Actividades",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    href: "/admin/providers",
    label: "Proveedores",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    href: "/admin/reservations",
    label: "Reservaciones",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <Link href="/admin" className="admin-sidebar-logo">
          Cabo<span>Vivo</span>
          <small>Admin Panel</small>
        </Link>
        <div className="admin-sidebar-label">Menu</div>
        <nav className="admin-nav">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "active" : ""}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div style={{ padding: "0 .75rem", marginTop: "auto" }}>
          <Link href="/" className="btn btn-ghost btn-sm" style={{ width: "100%", justifyContent: "center" }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 14, height: 14 }}>
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Ver sitio</span>
          </Link>
        </div>
      </aside>
      <main className="admin-main">{children}</main>
    </div>
  );
}
