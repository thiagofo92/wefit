import { describe, it, vi, expect } from 'vitest'
import { Result } from 'true-myth'
import { faker } from '@faker-js/faker'

interface PersonEntity {
  name: string
  cellPhone: string
  phone: string
  email: string
}

type PersonNaturalEntity = {
  cpf: string
} & PersonEntity

type Address = {
  addressLine1: string
  addressLine2: string
  addressNumber: number
  neighbourhood:string
  zipcode: string
  city: string
  state: string
}
const Data: PersonNaturalEntity [] = []

interface PersonNaturalServicePort {
  create: (input: PersonNaturalEntity) => Promise<Result<boolean, Error>>
}

class PersonNaturalService implements PersonNaturalServicePort {
  async create(input: PersonNaturalEntity): Promise<Result<boolean, Error>> {
    Data.push(input)
    return Result.ok(true)
  }

  async findAll(): Promise<PersonNaturalEntity []> {
    return Data
  }
}

describe('# Register person', () => { 
  it('Register natural person', async () => {
    const service = new PersonNaturalService()
    const personNatural: PersonNaturalEntity = {
     name: faker.person.fullName(),
     cellPhone: faker.phone.number(),
     phone: faker.phone.number(),
     cpf: faker.number.int({ min: 12, max: 11 }).toString(),
     email: faker.internet.email()
    }
    
    const result = await service.create(personNatural)
    if(result.isErr) throw Error('Register natural person Error')

    expect(result.value).toBeTruthy()
  })
})