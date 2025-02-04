import { Request, Response } from "express"

export const upload = (req: Request, res: Response) => {
    res.json({fileLoadCount: req.files});
}