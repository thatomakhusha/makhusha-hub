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

const Sidebar = () => {
    const pathname = usePathname();
    return ( 
        <aside>
            <div>
                <div>
                    
                </div>
                <div>

                </div>
            </div>
        </aside>
     );
}
 
export default Sidebar;