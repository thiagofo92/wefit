import { type Result } from 'true-myth'
import { type PersonLegalDto } from '../dto/person-legal.dto'

export interface PersonLegalUseCasePort {
  create: (personDto: PersonLegalDto) => Promise<Result<true, false>>
}
