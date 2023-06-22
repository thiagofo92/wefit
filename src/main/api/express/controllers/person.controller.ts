/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { type PersonLegalUseCasePort } from '@/app/port/person-legal.usecase.port'
import { type PersonNaturalUseCasePort } from '@/app/port/person-natural.usecase.port'
import { Logger } from '@/shared/logs/logger'
import { HTTP_STATUS } from '@/shared/util/http-status'
import { type Request, type Response } from 'express'

export class PersonController {
  constructor (
    private readonly personLegalUseCase: PersonLegalUseCasePort,
    private readonly personNaturalUseCase: PersonNaturalUseCasePort) {}

  async create (req: Request, res: Response): Promise<void> {
    const data = req.body
    Logger.info(`Start to create the person, type ${data.name}`)
    if (data.personType === 'natural') {
      const result = await this.personNaturalUseCase.create(data)
      if (result.isLeft()) {
        Logger.warn(`Error to create person ${data.name}`)
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: 'Error to create the person' })
        return
      }
    } else {
      const result = await this.personLegalUseCase.create(data)

      if (result.isLeft()) {
        Logger.warn(`Error to create person ${data.name}`)
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: 'Error to create the person' })
        return
      }
    }
    Logger.info(`Success to create the ${data.name}`)
    res.status(HTTP_STATUS.CREATED).json({ message: 'Success' })
  }
}
