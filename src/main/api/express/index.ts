import Express from 'express'
import { Router } from './routers/router'

export const app = Express()
const port = process.env.PORT || '4568'
const host = '0.0.0.0'

const router = new Router(Express.Router())

app.use('/api', router.build())

export function StartServer (): void {
  app.listen(Number(port), host, () => {
    console.log(`Server is running on ${host}:${port}`)
  })
}
