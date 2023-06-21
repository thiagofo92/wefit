
import { faker } from '@faker-js/faker'
import { type PersonLegalDto } from '../dto/person-legal.dto'

export const personLegalFakeDto: PersonLegalDto = {
  personType: 'natural',
  cpf: faker.string.numeric({ length: 11 }),
  cnpj: faker.string.numeric({ length: 14 }),
  name: faker.person.fullName(),
  cellPhone: faker.string.numeric({ length: 10 }),
  phone: faker.string.numeric({ length: 9 }),
  email: faker.internet.email(),
  address: {
    zipcode: faker.location.zipCode(),
    addressLine1: faker.location.street(),
    addressNumber: Number(faker.location.buildingNumber()),
    addressLine2: faker.location.street(),
    city: faker.location.city(),
    state: faker.location.state(),
    neighborhood: faker.location.street()
  },
  contractRead: true
}
