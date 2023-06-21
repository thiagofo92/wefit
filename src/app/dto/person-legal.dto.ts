export interface PersonLegalDto {
  personType: string
  cpf: string
  cnpj: string
  name: string
  cellPhone: string
  phone: string
  email: string
  address: {
    zipcode: string
    addressLine1: string
    addressNumber: number
    addressLine2: string
    city: string
    state: string
    neighborhood: string
  }
  contractRead: true
}
