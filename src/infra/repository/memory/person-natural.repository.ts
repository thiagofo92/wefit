import { type PersonNaturalEntity } from '@/core/entities/person-natural.entity'
import { type PersonNaturalRepositoryPort } from '@/infra/port/person-natural.port'
import { Result } from 'true-myth'

const Data: PersonNaturalEntity [] = []
export class PersonNaturalMemoryRepository implements PersonNaturalRepositoryPort {
  async create (input: PersonNaturalEntity): Promise<Result<boolean, Error>> {
    Data.push(input)

    return Result.ok(true)
  }
}
