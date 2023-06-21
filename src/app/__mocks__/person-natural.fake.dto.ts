import { faker } from '@faker-js/faker'
import { type PersonNaturalDto } from '../dto/person-natural.dto'

export const personNaturalDtoFake: PersonNaturalDto = {
  personType: 'natural',
  cpf: faker.string.numeric({ length: 11 }),
  cnpj: '',
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
