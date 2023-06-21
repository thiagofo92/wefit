import { type AddressEntity } from '@/core/entities/addess.entity'
import { PersonNaturalEntity } from '@/core/entities/person-natural.entity'
import { type PersonEntity } from '@/core/entities/person.entity'
import { PhoneType, type PhoneEntity } from '@/core/entities/phone.entity'
import { faker } from '@faker-js/faker'

const phone: PhoneEntity [] = [{
  number: faker.phone.number(),
  type: PhoneType.cell
},
{
  number: faker.phone.number(),
  type: PhoneType.phone
}]

const person: PersonEntity = {
  name: faker.person.fullName(),
  email: faker.internet.email(),
  cpf: faker.string.numeric({ length: 11 })
}

const address: Omit<AddressEntity, 'personId'> = {
  addressLine1: faker.location.streetAddress(),
  addressLine2: faker.location.street(),
  addressNumber: Number(faker.location.buildingNumber()),
  city: faker.location.city(),
  state: faker.location.state(),
  zipcode: faker.location.zipCode(),
  neighborhood: faker.location.street()
}

export const PersonNaturalFake = new PersonNaturalEntity(person, address, phone)
