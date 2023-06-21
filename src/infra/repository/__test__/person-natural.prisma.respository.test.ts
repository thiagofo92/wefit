import { describe, it, expect, beforeAll } from 'vitest'
import { PersonNaturalFake } from '@/infra/repository/__mocks__/person-natural.fake'
import { Connection } from '@/infra/repository/prisma/connection'
import { type PersonNaturalEntity } from '@/core/entities/person-natural.entity'
import { PersonNaturalRepository } from '@/infra/repository/prisma/person-natural.repository'

describe('# Register person', () => {
  beforeAll(async () => {
    await Connection.phone.deleteMany()
    await Connection.person.deleteMany()
  })

  it('Register natural person', async () => {
    const service = new PersonNaturalRepository()
    const personNatural: PersonNaturalEntity = PersonNaturalFake

    const result = await service.create(personNatural)
    if (result.isErr) throw result.error

    expect(result.value).toBeTruthy()
  })
})
