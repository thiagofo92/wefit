
import { type PersonLegalEntity } from '@/core/entities'
import { type PersonLegalRepositoryPort } from '@/infra/port'
import { type Either, right } from '@/shared/error/Either'

const Data: PersonLegalEntity [] = []
export class PersonLegalMemoryRepository implements PersonLegalRepositoryPort {
  async create (input: PersonLegalEntity): Promise<Either<Error, boolean>> {
    Data.push(input)

    return right(true)
  }
}
