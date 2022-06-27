export interface Dataset {
  data: number[],
  borderColor: string[],
  backgroundColor: string[]
}

export interface ChartData {
  labels: string[] | number[]
  datasets: Dataset[]
}

export interface ChartOptions {
  responsive?: boolean
  maintainAspectRatio: boolean
  color: string
  strokeWidth: string
  easing: string
}