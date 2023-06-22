import { PersonLegalMemoryRepository } from '@/infra/repository/memory/person-legal.repository'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { PersonLegalUseCase } from '../usecase/person-legal.usecase'
import { personLegalFakeDto } from '../__mocks__/person-legal.fake.dto'
import { type PersonLegalRepositoryPort } from '@/infra/port'
import { left } from '@/shared/error/Either'

interface FactoryUseCase {
  usecase: PersonLegalUseCase
  repository: PersonLegalRepositoryPort
}

function factoryUsecase (): FactoryUseCase {
  const repository = new PersonLegalMemoryRepository()
  const usecase = new PersonLegalUseCase(repository)
  return { usecase, repository }
}

describe('# Use case legal person test', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })
  it('Success case to create the legal person', async () => {
    const { usecase } = factoryUsecase()
    const person = personLegalFakeDto
    const result = await usecase.create(person)

    if (result.isLeft()) throw Error('Error in teste to create the legal person - Success Case')

    expect(result.value).toStrictEqual(true)
  })

  it('Fail case to create the legal person', async () => {
    const { usecase, repository } = factoryUsecase()
    const person = personLegalFakeDto

    vi.spyOn(repository, 'create').mockResolvedValueOnce(left(new Error('Fail case to create legal person')))
    const result = await usecase.create(person)

    if (result.isRight()) throw Error('Error in test to create the legal person - Fail Case')

    expect(result.value).toStrictEqual(false)
  })
})
