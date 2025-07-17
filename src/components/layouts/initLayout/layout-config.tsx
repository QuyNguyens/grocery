import { AUTH_ROUTES } from "constants/routes"
import { ComponentType } from "react"
import AuthLayout from "../authLayout"

export type TLayoutConfig = {
    pathname?: string[],
    prefixPathname?: string,
    Layout: ComponentType<{ children: React.ReactNode }>
}


export const LAYOUT_CONFIG: TLayoutConfig[] = [
    {
        pathname: [...AUTH_ROUTES],
        Layout: AuthLayout
    },
]