import { PersonLegalUseCase } from '@/app/usecase/person-legal.usecase'
import { PersonNaturalUseCase } from '@/app/usecase/person-natural.usecase'
import { PersonLegalPrismaRepository, PersonNaturalPrismaRepository } from '@/infra/repository/prisma'
import { PersonController } from '../express/controllers/person.controller'

export function FactoryControllerPerson (): PersonController {
  const naturalRepository = new PersonNaturalPrismaRepository()
  const personNatural = new PersonNaturalUseCase(naturalRepository)

  const legalRepository = new PersonLegalPrismaRepository()
  const personLegal = new PersonLegalUseCase(legalRepository)

  const controller = new PersonController(personLegal, personNatural)

  return controller
}
