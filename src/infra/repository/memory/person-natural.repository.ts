import { type PersonNaturalEntity } from '@/core/entities/person-natural.entity'
import { type PersonNaturalRepositoryPort } from '@/infra/port/person-natural.port'
import { type Either, right } from '@/shared/error/Either'

const Data: PersonNaturalEntity [] = []
export class PersonNaturalMemoryRepository implements PersonNaturalRepositoryPort {
  async create (input: PersonNaturalEntity): Promise<Either<Error, boolean>> {
    Data.push(input)

    return right(true)
  }
}
