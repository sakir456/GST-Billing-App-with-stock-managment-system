import express from "express"
import { saveSettings, updateSettings } from "../controllers/setting.controller.js"

const router = express.Router()

router.post("/savesettings", saveSettings)
router.put("/updatesettings/:id", updateSettings)

export default router