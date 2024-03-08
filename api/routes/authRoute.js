import express from  'express';
import { google, signup, singin,signout } from '../controllers/authController.js';

var router = express.Router();

router.post("/signup",signup)
router.post("/signin",singin)
router.post("/google",google)
router.post("/signout",signout)

export default router;