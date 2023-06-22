/* eslint-disable @typescript-eslint/no-misused-promises */
import Express from 'express'
import { helmetConfig, rateLimit } from '../../middlewares'
import { FactoryControllerPerson } from '../../factory/person.controller.factory'
import { personCreateMiddleware } from '../../middlewares/schema/person.schema'
export class Router {
  constructor (private readonly routers: Express.Router) {}

  private pingpong (): void {
    this.routers.get('/ping', (req, res) => res.end('pong'))
  }

  private person (): void {
    const controller = FactoryControllerPerson()
    this.routers.post('/person', personCreateMiddleware, controller.create.bind(controller))
  }

  private middleware (): void {
    this.routers.use([
      Express.json(),
      rateLimit,
      helmetConfig
    ])
  }

  build (): Express.Router {
    this.middleware()

    this.pingpong()
    this.person()

    return this.routers
  }
}
