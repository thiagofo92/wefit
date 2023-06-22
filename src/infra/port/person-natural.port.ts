import { type PersonNaturalEntity } from '@/core/entities/person-natural.entity'
import { type Either } from '@/shared/error/Either'

export interface PersonNaturalRepositoryPort {
  create: (input: PersonNaturalEntity) => Promise<Either<Error, boolean>>
}
