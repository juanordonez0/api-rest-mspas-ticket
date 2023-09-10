import express  from "express";
import {login, register} from "../controllers/auth.controller.js";
import { body } from "express-validator";
import { validateResult} from "../middlewares/validatonResult.js";
const router = express.Router();


router.post("/login",[
    body("email", "Formato de email incorrecto").isEmail().normalizeEmail(),
    body("password", "Minimo 6 caracteres").trim().isLength({min: 6})
], validateResult ,login);


router.post("/register", [
    body("email", "Formato de email incorrecto").isEmail().normalizeEmail(),
    body("password", "Minimo 6 caracteres").trim().isLength({min: 6})
],validateResult ,register);


export default router;