export type TabType = { id: number; name: string }

export type SelectOption = {
  for?: stirng
  label: string
  value: string | number
}

export type DesignOptionProps = {
  revision: number
  mockup: boolean
  responsive: boolean
  prototype: boolean
  animation: boolean
  branding: boolean
  testing: boolean
  maintenance: boolean
}

export type WebOptionProps = {
  pages: number
  seo: boolean
  responsive: boolean
  cms: boolean
  ecommerce: boolean
  payment: boolean
  hosting: boolean
  testing: boolean
  maintenance: boolean
}

export type MobileOptionProps = {
  platform: SelectOption | null
  type: SelectOption | null
  design: boolean
  auth: boolean
  notification: boolean
  purchase: boolean
  backend: boolean
  testing: boolean
  maintenance: boolean
}
