import { validationResult } from "express-validator";

export const login = (req, res) => {

  res.json({"ok": "all ok"})
}

export const register =  (req, res) => {


  res.json({"ok": "all ok"})
    console.log(req.body);
}
