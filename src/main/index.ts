import { Logger } from '@/shared/logs/logger'
import { StartServer } from './api/express'

process.on('SIGTERM', () => {
  Logger.warn('Server was shutdown')
  process.exit()
})

StartServer()
