import React from "react"
import Sidebar from "../components/SideBar"

export default function ModelsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative flex flex-col min-h-screen md:flex-row">
      <Sidebar />
      <main className="flex-1 p-4 md:ml-64 mt-[8ch]">{children}</main>
    </div>
  )
}