import { Router } from "express";
import * as apiController from "../controllers/api.controller";
import multer from "multer";

const router = Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    //   cb(null, file.fieldname + '-' + uniqueSuffix);
        cb(null, file.originalname);
    }
  })

const upload = multer({ storage:storage });

router.post("/upload", upload.array("file"), apiController.upload);

router.get("/:id", apiController.getAlbum);

export default router