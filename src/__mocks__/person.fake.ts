import { faker } from "@faker-js/faker";

export const PersonFake = {
     name: faker.person.fullName(),
     cellPhone: faker.phone.number(),
     phone: faker.phone.number(),
     cpf: faker.number.int({ min: 12, max: 11 }).toString(),
     email: faker.internet.email(),
     readContract: true
    }