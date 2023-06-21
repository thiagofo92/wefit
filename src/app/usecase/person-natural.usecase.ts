import { Result } from 'true-myth'
import { type PersonNaturalUseCasePort } from '../port/person-natural.usecase.port'
import { type PersonNaturalDto } from '../dto/person-natural.dto'
import { type PersonNaturalRepositoryPort } from '@/infra/port/person-natural.port'
import { PersonNaturalEntity } from '@/core/entities/person-natural.entity'
import { type PersonEntity } from '@/core/entities/person.entity'
import { PhoneType, type PhoneEntity } from '@/core/entities/phone.entity'

export class PersonNaturalUseCase implements PersonNaturalUseCasePort {
  constructor (private readonly service: PersonNaturalRepositoryPort) {}
  async create (personDto: PersonNaturalDto): Promise<Result<true, false>> {
    const person = this.factoryPersonNatural(personDto)
    const result = await this.service.create(person)

    if (result.isErr) return Result.err(false)

    return Result.ok(true)
  }

  private factoryPersonNatural (personDto: PersonNaturalDto): PersonNaturalEntity {
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
    return new PersonNaturalEntity(person, personDto.address, phone)
  }
}
