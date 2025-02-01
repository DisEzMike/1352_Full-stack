import { Router } from "express";
import * as apiController from "../controllers/api.controller";

const router = Router();

router.get("/test", apiController.test)

export default router