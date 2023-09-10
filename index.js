import express from 'express';
import "dotenv/config";
import "./database/connect_db.js";
import authRouter from "./routes/auth.route.js";


const app = express();


const PORT = process.env.PORT || 3000;
app.use(express.json())
app.listen(PORT, () => console.log("https://localhost:3000/ " + PORT));


app.use("/api/v1", authRouter);


app.get("/h", (req, res) => {
    res.json({state: "true"});
});


