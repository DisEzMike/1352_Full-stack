import { Request, Response } from "express"

export const upload = (req: Request, res: Response) => {
    console.log(req.files)
    res.json({fileLoadCount: req.files});
}