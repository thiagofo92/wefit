
import { type PersonLegalUseCasePort } from '../port/person-legal.usecase.port'
import { type PersonLegalDto } from '../dto/person-legal.dto'
import { type PersonLegalRepositoryPort } from '@/infra/port/person-legal.port'
import { PersonLegalEntity } from '@/core/entities/person-legal.entity'
import { type PersonEntity } from '@/core/entities/person.entity'
import { PhoneType, type PhoneEntity } from '@/core/entities/phone.entity'
import { type Either, left, right } from '@/shared/error/Either'

export class PersonLegalUseCase implements PersonLegalUseCasePort {
  constructor (private readonly service: PersonLegalRepositoryPort) {}
  async create (personDto: PersonLegalDto): Promise<Either<false, true>> {
    const person = this.factoryPersonLegal(personDto)
    const result = await this.service.create(person)

    if (result.isLeft()) return left(false)

    return right(true)
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
