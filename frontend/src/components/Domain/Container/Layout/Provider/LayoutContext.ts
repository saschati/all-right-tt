import { createContext } from 'react'

export const enum Device {
  DESKTOP = 'desktop',
  TABLET = 'tablet',
  MOBILE = 'mobile',
}
export interface LayoutContextValue {
  device: Device
  size: {
    width: number
    height: number
  }
}

export const LayoutContext = createContext<LayoutContextValue | null>(null)
