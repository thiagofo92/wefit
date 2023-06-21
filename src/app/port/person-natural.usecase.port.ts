import { type Result } from 'true-myth'
import { type PersonNaturalDto } from '../dto/person-natural.dto'

export interface PersonNaturalUseCasePort {
  create: (data: PersonNaturalDto) => Promise<Result<true, false>>
}
