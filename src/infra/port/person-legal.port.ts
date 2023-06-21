import { type PersonLegalEntity } from '@/core/entities/person-legal.entity'
import { type Result } from 'true-myth'

export interface PersonLegalRepositoryPort {
  create: (person: PersonLegalEntity) => Promise<Result<boolean, Error>>
}
