import { type PersonLegalEntity } from '@/core/entities/person-legal.entity'
import { type Either } from '@/shared/error/Either'
export interface PersonLegalRepositoryPort {
  create: (person: PersonLegalEntity) => Promise<Either<Error, boolean>>
}
