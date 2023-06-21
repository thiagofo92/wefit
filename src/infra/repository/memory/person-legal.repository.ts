
import { type PersonLegalEntity } from '@/core/entities'
import { type PersonLegalRepositoryPort } from '@/infra/port'
import { Result } from 'true-myth'

const Data: PersonLegalEntity [] = []
export class PersonLegalMemoryRepository implements PersonLegalRepositoryPort {
  async create (input: PersonLegalEntity): Promise<Result<boolean, Error>> {
    Data.push(input)

    return Result.ok(true)
  }
}
