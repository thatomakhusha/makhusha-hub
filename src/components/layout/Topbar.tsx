"use client";

import { usePathname } from "next/navigation";
import { Bell, Search, ChevronDown } from "lucide-react";

const PAGE_TITLES: Record<string, string> = {
  "/dashboard": "Overview",
  "/dashboard/overview": "Overview",
  "/dashboard/projects": "Projects",
  "/dashboard/tasks": "Tasks",
  "/dashboard/team": "Team",
  "/dashboard/clients": "Clients",
  "/dashboard/knowledge": "Knowledge",
  "/dashboard/operations": "Operations",
  "/dashboard/operations/finance": "Finance",
  "/dashboard/operations/invoices": "Invoices",
  "/dashboard/operations/contracts": "Contracts",
  "/dashboard/operations/administration": "Administration",
  "/dashboard/settings": "Settings",
};

export default function Topbar() {
  const pathname = usePathname();

  const pageTitle =
    PAGE_TITLES[pathname] ??
    pathname
      .split("/")
      .filter(Boolean)
      .pop()
      ?.replace(/-/g, " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase()) ??
    "Overview";

  return (
    <header className="fixed inset-x-0 top-0 z-30 ml-64 h-16.25 border-b border-white/8 bg-[#050506]">
      <div className="flex h-full items-center justify-between px-6">
        {/* Page title */}
        <h1 className="text-sm font-medium text-white">
          {pageTitle}
        </h1>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <button
            type="button"
            className="flex h-9 w-46.25 items-center gap-2 rounded-md border border-white/10 bg-[#0a0a0c] px-3 text-left transition-colors hover:border-white/16"
          >
            <Search
              size={14}
              strokeWidth={1.8}
              className="text-slate-500"
            />

            <span className="flex-1 text-xs text-slate-500">
              Search anything...
            </span>

            <kbd className="rounded border border-white/10 px-1.5 py-0.5 font-mono text-[9px] text-slate-500">
              ⌘K
            </kbd>
          </button>

          {/* Notifications */}
          <button
            type="button"
            aria-label="Notifications"
            className="relative flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-[#0a0a0c] text-slate-400 transition-colors hover:border-white/16 hover:text-white"
          >
            <Bell size={16} strokeWidth={1.7} />

            {/* Notification indicator */}
            <span className="absolute right-2 top-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </button>

          {/* Profile */}
          <button
            type="button"
            className="flex h-9 items-center gap-2 rounded-md border border-white/10 bg-[#0a0a0c] px-2.5 transition-colors hover:border-white/16"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-[9px] font-semibold text-white">
              TM
            </div>

            <span className="text-xs font-medium text-white">
              Thato
            </span>

            <ChevronDown
              size={13}
              strokeWidth={1.8}
              className="text-slate-500"
            />
          </button>
        </div>
      </div>
    </header>
  );
}