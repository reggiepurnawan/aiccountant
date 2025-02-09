import React from "react";
import { Link } from "@remix-run/react";
import { cn } from "~/lib/utils";
import type { Icon } from "@phosphor-icons/react";

interface NavMenuItemProps {
  to: string;
  label: string;
  isActive: boolean;
  Icon: Icon;
}

export function NavMenuItem({ 
  to, 
  label, 
  isActive, 
  Icon
}: NavMenuItemProps) {
  return (
    <Link 
      to={to} 
      className="flex flex-col items-center w-[60px] h-[40px] p-0 gap-[2px]"
    >
      <Icon 
        className={cn(
          "w-7 h-7", // w-7 = 28px, h-7 = 28px
          isActive 
            ? "text-[#617F67]"
            : "text-[#838383]"
        )}
        weight={isActive ? "fill" : "regular"}
      />
      <span 
        className={cn(
          "h-[10px] text-[10px] leading-[10px] font-medium",
          isActive ? "text-[#617F67]" : "text-[#838383]"
        )}
      >
        {label}
      </span>
    </Link>
  );
} 