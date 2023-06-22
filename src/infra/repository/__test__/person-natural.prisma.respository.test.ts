import { describe, it, expect, beforeAll } from 'vitest'
import { PersonNaturalFake } from '@/infra/repository/__mocks__/person-natural.fake'
import { Connection } from '@/infra/repository/prisma/connection'
import { type PersonNaturalEntity } from '@/core/entities/person-natural.entity'
import { PersonNaturalPrismaRepository } from '@/infra/repository/prisma/person-natural.repository'

describe('# Register person', () => {
  beforeAll(async () => {
    await Connection.phone.deleteMany()
    await Connection.person.deleteMany()
  })

  it('Register natural person', async () => {
    const service = new PersonNaturalPrismaRepository()
    const personNatural: PersonNaturalEntity = PersonNaturalFake

    const result = await service.create(personNatural)
    if (result.isLeft()) throw result.value

    expect(result.value).toBeTruthy()
  })
})
