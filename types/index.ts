import type { ReactNode } from "react"


export type Category = {
    displayName: string
    slug: string
}


export type NavLinkProps = {
    href: string
    children: ReactNode
    isActive?: boolean
}