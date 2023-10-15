declare module 'react-percentage-bar' {
  export type CircularProgressBarProps = {
    percentage: number
    color?: string
    trackColor?: string
    size?: string
    radius?: string
    percentageStyle?: React.CSSProperties
  }

  export const CircularProgressBar: ({ percentage }: CircularProgressBarProps) => React.JSX
}
