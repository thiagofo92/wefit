import { describe, it, vi, expect } from 'vitest'
import { Result } from 'true-myth'
import { PersonFake } from 'src/__mocks__/person.fake'

interface PersonEntity {
  name: string
  cellPhone: string
  phone: string
  email: string
  readContract: boolean
}

type PersonNaturalEntity = {
  cpf: string
} & PersonEntity

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
    const personNatural: PersonNaturalEntity = PersonFake
    
    const result = await service.create(personNatural)
    if(result.isErr) throw Error('Register natural person Error')

    expect(result.value).toBeTruthy()
  })
})