import { type PersonNaturalEntity } from '@/core/entities/person-natural.entity'
import { type Result } from 'true-myth'

export interface PersonNaturalRepositoryPort {
  create: (input: PersonNaturalEntity) => Promise<Result<boolean, Error>>
}
