import { PersonType } from '@/core/entities/person-type.entity'
import { HTTP_STATUS } from '@/shared/util/http-status'
import { type NextFunction, type Request, type Response } from 'express'
import * as Yup from 'yup'
import { Logger } from '@/shared/logs/logger'

const personSchema = Yup.object().shape({
  personType: Yup.string().required(),
  cpf: Yup.string().required(),
  cnpj: Yup.string(),
  name: Yup.string().required(),
  cellPhone: Yup.string().required(),
  phone: Yup.string().required(),
  email: Yup.string().required().email(),
  confirmeEmail: Yup.string().required().email(),
  address: Yup.object().shape({
    zipcode: Yup.string().required().min(8).max(8),
    addressLine1: Yup.string().required(),
    addressNumber: Yup.number().required(),
    addressLine2: Yup.string().required(),
    city: Yup.string().required(),
    state: Yup.string().required(),
    neighborhood: Yup.string().required()
  }),
  contractRead: Yup.boolean().required().isTrue()
})

export function personCreateMiddleware (request: Request, response: Response, next: NextFunction): void {
  Logger.info('Start person create middleware')
  const { email, confirmeEmail, personType } = request.body

  if (email !== confirmeEmail) {
    response.status(HTTP_STATUS.BAD_REQUEST).json({ message: 'Email fields not is the same' })
    return
  }

  if (personType !== PersonType.natural && personType !== PersonType.legal) {
    response.status(HTTP_STATUS.BAD_REQUEST).json({ message: 'The person type field most be legal or natural' })
    return
  }

  personSchema.validate(request.body, { abortEarly: false })
    .then(_ => { next() })
    .catch(({ errors }) => {
      const params: string = errors.map((item: any) => item).join(', ')
      const message = `Invalid parameter ${params}`
      response.status(HTTP_STATUS.BAD_REQUEST).json(message)
    })
}
