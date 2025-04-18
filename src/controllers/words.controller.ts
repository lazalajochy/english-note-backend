import { Response, Request } from 'express'

export const words = async (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Hello from words controller!'
  })
}
