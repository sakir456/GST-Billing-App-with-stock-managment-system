import express from "express"
import { saveSettings, updateSettings } from "../controllers/setting.controller.js"
import { authUser } from "../middleware/authUser.js"

const router = express.Router()

router.post("/savesettings",authUser, saveSettings)
router.put("/updatesettings/:id",authUser, updateSettings)

export default router