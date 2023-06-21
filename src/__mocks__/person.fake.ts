import { type AddressEntity } from '@/entities/addess.entity'
import { PersonNaturalEntity } from '@/entities/person-natural.entity'
import { type PersonEntity } from '@/entities/person.entity'
import { type PhoneEntity } from '@/entities/phone.entity'
import { faker } from '@faker-js/faker'

const phone: PhoneEntity [] = [{
  number: faker.phone.number(),
  type: 'cell-phone'
},
{
  number: faker.phone.number(),
  type: 'phone'
}]

const person: PersonEntity = {
  name: faker.person.fullName(),
  email: faker.internet.email()
}
const document = faker.number.int({ min: 11, max: 11 }).toString()

const address: Omit<AddressEntity, 'personId'> = {
  addressLine1: faker.location.streetAddress(),
  addressLine2: faker.location.street(),
  addressNumber: Number(faker.location.buildingNumber()),
  city: faker.location.city(),
  state: faker.location.state(),
  zipcode: faker.location.zipCode(),
  neighborhood: faker.location.street()
}

export const PersonNaturalFake = new PersonNaturalEntity(person, document, address, phone)
