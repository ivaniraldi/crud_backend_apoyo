import router from "./routes/router.js";
import express from "express";
const app = express();

const PORT = process.env.PORT || 3000 ;

app.use(express.json());

app.use("/", router)

app.listen(PORT, () =>{
    console.log("SERVIDOR ENCENDIDO")
});