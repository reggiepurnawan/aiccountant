import React, { type PropsWithChildren } from "react"
import { BottomNav } from "../navigation/bottom-nav"

interface MobileLayoutProps extends PropsWithChildren {
  header?: React.ReactNode
}

export function MobileLayout({ children, header }: MobileLayoutProps) {
  return (
    <div className="min-h-screen max-w-md mx-auto flex flex-col bg-background">
      {/* Fixed Header */}
      {header && (
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="h-14 px-4 flex items-center">
            {header}
          </div>
        </header>
      )}

      {/* Main Content */}
      <main className="flex-1 px-4 pb-24">
        {children}
      </main>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  )
}
