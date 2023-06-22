import { type PersonLegalUseCasePort } from '@/app/port/person-legal.usecase.port'
import { type PersonNaturalUseCasePort } from '@/app/port/person-natural.usecase.port'
import { HTTP_STATUS } from '@/shared/util/http-status'
import { type Request, type Response } from 'express'

export class PersonController {
  constructor (
    private readonly personLegalUseCase: PersonLegalUseCasePort,
    private readonly personNaturalUseCase: PersonNaturalUseCasePort) {}

  async create (req: Request, res: Response): Promise<void> {
    const data = req.body

    if (data.personType === 'natural') {
      const result = await this.personNaturalUseCase.create(data)
      if (result.isLeft()) {
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: 'Error to create the person' })
        return
      }
    } else {
      const result = await this.personLegalUseCase.create(data)

      if (result.isLeft()) {
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: 'Error to create the person' })
        return
      }
    }

    res.status(HTTP_STATUS.CREATED).json({ message: 'Success' })
  }
}
