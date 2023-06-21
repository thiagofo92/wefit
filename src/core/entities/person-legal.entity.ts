import { randomUUID } from 'crypto'
import { type AddressEntity } from './addess.entity'
import { type PersonEntity } from './person.entity'
import { type PhoneEntity } from './phone.entity'

type Address = Omit<AddressEntity, 'personId'>

export class PersonLegalEntity implements PersonEntity, Omit<AddressEntity, 'personId'> {
  readonly id: string

  readonly name: string
  readonly email: string
  readonly cpf: string
  readonly cnpj: string
  readonly addressLine1: string
  readonly addressLine2: string
  readonly addressNumber: number
  readonly neighborhood: string
  readonly zipcode: string
  readonly city: string
  readonly state: string
  readonly phone: PhoneEntity[]
  readonly contractRead: boolean
  readonly personType: string

  constructor (person: PersonEntity, address: Address, phone: PhoneEntity[], cnpj: string) {
    this.id = randomUUID()

    this.name = person.name
    this.email = person.email
    this.cpf = person.cpf
    this.cnpj = cnpj
    this.personType = 'legal'
    this.addressLine1 = address.addressLine1
    this.addressLine2 = address.addressLine2
    this.addressNumber = address.addressNumber
    this.city = address.city
    this.state = address.state
    this.zipcode = address.zipcode
    this.neighborhood = address.neighborhood
    this.phone = phone.map(item => ({
      number: item.number,
      type: item.type
    }))
    this.contractRead = true
  }
}
