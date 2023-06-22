import { type PersonNaturalEntity } from '@/core/entities/person-natural.entity'
import { type PersonNaturalRepositoryPort } from '../../port/person-natural.port'
import { Connection } from './connection'
import { right, type Either, left } from '@/shared/error/Either'

export class PersonNaturalPrismaRepository implements PersonNaturalRepositoryPort {
  async create (person: PersonNaturalEntity): Promise<Either<Error, boolean>> {
    try {
      await Connection.person.create({
        data: {
          id: person.id,
          name: person.name,
          email: person.email,
          cpf: person.cpf,
          address_line1: person.addressLine1,
          address_line2: person.addressLine2,
          address_numer: person.addressNumber,
          city: person.city,
          neighborhood: person.neighborhood,
          contract_read: Number(person.contractRead),
          zipcode: person.zipcode,
          state: person.state,
          person_type: person.personType,
          phone: {
            createMany: {
              data: person.phone
            }
          }
        }
      })

      return right(true)
    } catch (error: any) {
      return left(error)
    }
  }
}
