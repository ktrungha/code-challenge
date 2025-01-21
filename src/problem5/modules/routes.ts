import { Router } from 'express'
import { personController } from './sampleResource/controller'

export const personRouter = Router()

personRouter.post('', personController.create)
personRouter.get('', personController.list)
personRouter.get('/:id', personController.read)
personRouter.put('/:id', personController.update)
personRouter.delete('/:id', personController.delete)
