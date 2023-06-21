import { describe, it, expect } from 'vitest'
import { PersonLegalPrismaRepository } from '../prisma/person-legal.repository'
import { PersonLegalFake } from '../__mocks__/person-legal.fake'

describe('# Legal person prisma reposityro', () => {
  it('Create the legal person', async () => {
    const person = PersonLegalFake
    const repository = new PersonLegalPrismaRepository()

    const result = await repository.create(person)

    if (result.isErr) throw result.error

    expect(result.value).toStrictEqual(true)
  })
})
