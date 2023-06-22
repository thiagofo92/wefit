import { type Either } from '@/shared/error/Either'
import { type PersonLegalDto } from '../dto/person-legal.dto'

export interface PersonLegalUseCasePort {
  create: (personDto: PersonLegalDto) => Promise<Either<false, true>>
}
