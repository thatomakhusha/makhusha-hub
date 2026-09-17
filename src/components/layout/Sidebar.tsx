"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  Folder,
  ListTodo,
  Users,
  BriefcaseBusiness,
  FileText,
  Settings,
} from "lucide-react";

const NAVIGATION = [
  {
    label: "Overview",
    href: "/dashboard",
    icon: LayoutGrid,
  },
  {
    label: "Projects",
    href: "/dashboard/projects",
    icon: Folder,
  },
  {
    label: "Tasks",
    href: "/dashboard/tasks",
    icon: ListTodo,
  },
  {
    label: "Team",
    href: "/dashboard/team",
    icon: Users,
  },
  {
    label: "Clients",
    href: "/dashboard/clients",
    icon: BriefcaseBusiness,
  },
  {
    label: "Knowledge",
    href: "/dashboard/knowledge",
    icon: FileText,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-white/8 bg-[#050506]">
      {/* Brand */}
      <div className="flex h-21.25 items-center border-b border-white/8 px-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4ade80] text-lg font-bold text-black">
            M
          </div>

          <div className="leading-tight">
            <div className="font-display text-[15px] font-semibold text-white">
              Makhusha
            </div>
            <div className="font-mono text-[11px] text-slate-500">
              Technologies
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-3">
        <div className="space-y-1">
          {NAVIGATION.map((item) => {
            const Icon = item.icon;

            const isActive =
              item.href === "/dashboard"
                ? pathname === "/dashboard"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex h-10 items-center gap-3 rounded-md px-3 text-sm transition-colors ${
                  isActive
                    ? "bg-[#0b2619] text-[#4ade80]"
                    : "text-slate-400 hover:bg-white/4 hover:text-white"
                }`}
              >
                <Icon
                  size={17}
                  strokeWidth={1.7}
                  className={
                    isActive
                      ? "text-[#4ade80]"
                      : "text-slate-500 group-hover:text-slate-300"
                  }
                />

                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Divider */}
        <div className="my-4 border-t border-white/8" />

        {/* Settings */}
        <Link
          href="/dashboard/settings"
          className={`group flex h-10 items-center gap-3 rounded-md px-3 text-sm transition-colors ${
            pathname.startsWith("/dashboard/settings")
              ? "bg-[#0b2619] text-[#4ade80]"
              : "text-slate-400 hover:bg-white/4 hover:text-white"
          }`}
        >
          <Settings
            size={17}
            strokeWidth={1.7}
            className={
              pathname.startsWith("/dashboard/settings")
                ? "text-[#4ade80]"
                : "text-slate-500 group-hover:text-slate-300"
            }
          />

          <span>Settings</span>
        </Link>
      </nav>

      {/* Current User */}
      <div className="border-t border-white/8 p-3">
        <button className="flex w-full items-center gap-3 rounded-md px-2 py-2 text-left transition-colors hover:bg-white/4">
          <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-xs font-semibold text-white">
            TM

            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-[#050506] bg-emerald-500" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-medium text-white">
              Thato Makhusha
            </div>
            <div className="truncate text-[11px] text-slate-500">
              CEO / Lead Engineer
            </div>
          </div>

          <span className="text-slate-500">⌄</span>
        </button>
      </div>
    </aside>
  );
}