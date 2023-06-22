import { beforeEach, describe, expect, it, vi } from 'vitest'
import { PersonNaturalUseCase } from '../usecase/person-natural.usecase'
import { personNaturalDtoFake } from '../__mocks__/person-natural.fake.dto'
import { PersonNaturalMemoryRepository } from '@/infra/repository/memory/person-natural.repository'
import { type PersonNaturalRepositoryPort } from '@/infra/port/person-natural.port'
import { left } from '@/shared/error/Either'

interface FactoryPerson {
  usecase: PersonNaturalUseCase
  service: PersonNaturalRepositoryPort
}

function factoryPersonUsecase (): FactoryPerson {
  const service = new PersonNaturalMemoryRepository()
  const usecase = new PersonNaturalUseCase(service)
  return { usecase, service }
}

describe('# Usecase PersonNatural', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })
  it('Create person natural', async () => {
    const { usecase } = factoryPersonUsecase()
    const person = personNaturalDtoFake
    const result = await usecase.create(person)
    if (result.isLeft()) throw Error('Error to create natural person UseCase')

    expect(result.value).toStrictEqual(true)
  })

  it('Fail to create natural person', async () => {
    const { usecase, service } = factoryPersonUsecase()
    const person = personNaturalDtoFake

    vi.spyOn(service, 'create').mockResolvedValueOnce(left(new Error('Error test')))

    const result = await usecase.create(person)
    if (result.isRight()) throw Error('Error to generate fail test in create natural person UseCase')

    expect(result.value).toBeFalsy()
  })
})
