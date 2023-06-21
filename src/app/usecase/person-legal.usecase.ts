
import { Result } from 'true-myth'
import { type PersonLegalUseCasePort } from '../port/person-legal.usecase.port'
import { type PersonLegalDto } from '../dto/person-legal.dto'
import { type PersonLegalRepositoryPort } from '@/infra/port/person-legal.port'
import { PersonLegalEntity } from '@/core/entities/person-legal.entity'
import { type PersonEntity } from '@/core/entities/person.entity'
import { PhoneType, type PhoneEntity } from '@/core/entities/phone.entity'

export class PersonLegalUseCase implements PersonLegalUseCasePort {
  constructor (private readonly service: PersonLegalRepositoryPort) {}
  async create (personDto: PersonLegalDto): Promise<Result<true, false>> {
    const person = this.factoryPersonLegal(personDto)
    const result = await this.service.create(person)

    if (result.isErr) return Result.err(false)

    return Result.ok(true)
  }

  private factoryPersonLegal (personDto: PersonLegalDto): PersonLegalEntity {
    const person: PersonEntity = {
      name: personDto.name,
      cpf: personDto.cpf,
      email: personDto.email
    }
    const phone: PhoneEntity [] = [
      {
        number: personDto.cellPhone,
        type: PhoneType.cell
      },
      {
        number: personDto.phone,
        type: PhoneType.phone
      }
    ]
    return new PersonLegalEntity(person, personDto.address, phone, personDto.cnpj)
  }
}
