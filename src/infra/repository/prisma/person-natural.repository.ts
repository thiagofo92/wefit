import { randomUUID } from 'crypto'
import { type PersonNaturalEntity } from '@/entities/person-natural.entity'
import { Result } from 'true-myth'
import { type PersonNaturalRepositoryPort } from '../../port/person-natural.port'
import { Connection } from './connection'

export class PersonNaturalRepository implements PersonNaturalRepositoryPort {
  async create (person: PersonNaturalEntity): Promise<Result<boolean, Error>> {
    try {
      const id = randomUUID()

      await Connection.person.create({
        data: {
          id,
          name: person.name,
          email: person.email,
          document: person.document,
          document_type: person.documentType,
          address_line1: person.addressLine1,
          address_line2: person.addressLine2,
          address_numer: person.addressNumber,
          city: person.city,
          neighborhood: person.neighborhood,
          contract_read: Number(person.contractRead),
          zipcode: person.zipcode,
          state: person.state,
          phone: {
            createMany: {
              data: person.phone
            }
          }
        }
      })

      return Result.ok(true)
    } catch (error: any) {
      return Result.err(error)
    }
  }
}
