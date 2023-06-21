import { describe, it, vi, expect } from 'vitest'
import { Result } from 'true-myth'
import { PersonFake } from '@/__mocks__/person.fake'
import { Connection } from '@/infra/repository/prisma/connection'
import { PersonNaturalEntity } from '@/entities/person-natural.entity'
import { PersonNaturalServicePort } from '@/infra/port/person-natural.port'


class PersonNaturalService implements PersonNaturalServicePort {
  async create(person: PersonNaturalEntity): Promise<Result<boolean, Error>> {
    try {
     const result = await Connection.person(person)
     return Result.ok(true) 
    } catch (error: any) {
     return Result.err(error) 
    }
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