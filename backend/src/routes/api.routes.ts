import { Router } from "express";
import * as apiController from "../controllers/api.controller";
import multer from "multer";

const router = Router();

const upload = multer({dest: "./uploads/"})

router.post("/upload", upload.array("file"), apiController.upload)

export default router