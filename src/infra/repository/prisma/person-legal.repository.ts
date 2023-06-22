import { type PersonLegalEntity } from '@/core/entities/person-legal.entity'
import { type PersonLegalRepositoryPort } from '@/infra/port/person-legal.port'
import { Connection } from './connection'
import { right, type Either, left } from '@/shared/error/Either'

export class PersonLegalPrismaRepository implements PersonLegalRepositoryPort {
  async create (person: PersonLegalEntity): Promise<Either<Error, boolean>> {
    try {
      await Connection.person.create({
        data: {
          id: person.id,
          name: person.name,
          email: person.email,
          cpf: person.cpf,
          cnpj: person.cnpj,
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
