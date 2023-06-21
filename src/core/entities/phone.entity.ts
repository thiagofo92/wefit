export interface PhoneEntity {
  id?: number
  number: string
  type: string
}

export enum PhoneType {
  cell = 'cell-phone',
  phone = 'phone'
}
