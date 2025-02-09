import React from "react";
import { useLocation } from "@remix-run/react";
import { 
  House,
  Receipt,
  ChartPie,
  Wallet,
  Plus
} from "@phosphor-icons/react";
import { NavMenuItem } from "./nav-menu-item";

export function BottomNav() {
  const location = useLocation();
  
  return (
    <div className="fixed bottom-0 left-0 right-0">
      <div className="max-w-md mx-auto">
        {/* Outer container with top padding to accommodate floating button */}
        <div className="pt-5">
          <nav className="relative flex h-[60px] bg-white">
            <div className="flex justify-between items-center w-full px-3">
              <NavMenuItem
                to="/"
                label="Home"
                isActive={location.pathname === "/"}
                Icon={House}
              />
              
              <NavMenuItem
                to="/transactions"
                label="Transaction"
                isActive={location.pathname === "/transactions"}
                Icon={Receipt}
              />

              {/* Spacer for the plus button */}
              <div className="relative w-[50px]">
                <button 
                  className="absolute left-1/2 -translate-x-1/2 -top-12 w-[50px] h-[50px] rounded-full bg-[#AED1AE] flex items-center justify-center border-2 border-white shadow-lg hover:bg-[#AED1AE]/90 transition-colors z-10"
                  onClick={() => {/* TODO */}}
                >
                  <Plus className="w-7 h-7 text-white" />
                </button>
              </div>

              <NavMenuItem
                to="/categories"
                label="Categories"
                isActive={location.pathname === "/categories"}
                Icon={ChartPie}
              />
              
              <NavMenuItem
                to="/accounts"
                label="Accounts"
                isActive={location.pathname === "/accounts"}
                Icon={Wallet}
              />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}