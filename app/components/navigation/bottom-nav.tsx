import React from "react";
import { Link, useLocation } from "@remix-run/react";
import { cn } from "~/lib/utils";
import { 
  HomeIcon, 
  ReceiptText, 
  PieChart,
  Wallet,
  Plus
} from "lucide-react";

const navItems = [
  {
    name: "Home",
    to: "/",
    icon: HomeIcon,
  },
  {
    name: "Transaction",
    to: "/transactions",
    icon: ReceiptText,
  },
  {
    name: "Categories",
    to: "/categories",
    icon: PieChart,
  },
  {
    name: "Accounts",
    to: "/accounts",
    icon: Wallet,
  },
] as const;

export function BottomNav() {
  const location = useLocation();
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-8">
      <nav className="relative flex items-center justify-between h-16 bg-white rounded-full shadow-lg px-6">
        {/* Left Items */}
        <div className="flex items-center space-x-8">
          {navItems.slice(0, 2).map((item) => (
            <NavItem key={item.to} item={item} isActive={location.pathname === item.to} />
          ))}
        </div>

        {/* Center Plus Button */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <button 
            className="w-14 h-14 rounded-full bg-[#86EFAC] flex items-center justify-center shadow-lg hover:bg-[#86EFAC]/90"
            onClick={() => {/* TODO */}}
          >
            <Plus className="w-7 h-7 text-[#1F2937]" />
          </button>
        </div>

        {/* Right Items */}
        <div className="flex items-center space-x-8">
          {navItems.slice(2).map((item) => (
            <NavItem key={item.to} item={item} isActive={location.pathname === item.to} />
          ))}
        </div>
      </nav>
    </div>
  );
}

function NavItem({ item, isActive }: { item: typeof navItems[number]; isActive: boolean }) {
  return (
    <Link
      to={item.to}
      className={cn(
        "flex flex-col items-center",
        isActive ? "text-[#86EFAC]" : "text-gray-400"
      )}
    >
      <item.icon className="w-6 h-6" />
      <span className="text-xs font-medium mt-1">{item.name}</span>
    </Link>
  );
} 