import { type Either } from '@/shared/error/Either'
import { type PersonNaturalDto } from '../dto/person-natural.dto'

export interface PersonNaturalUseCasePort {
  create: (data: PersonNaturalDto) => Promise<Either<false, true>>
}
