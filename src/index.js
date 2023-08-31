import express from "express";      
const app = express();              
const port = 3000;                  

app.get("/", (req, res) => {        
  res.json({
    nome: "Stefanny Corsino",      
  });
  console.log("Rota / solicitada");
});

app.listen(port, () => {            
  console.log(`Serviço escutando na porta:  ${port}`);
});
//index.js
import dotenv from "dotenv";

dotenv.config();
import roteadorUsuario from "./routes/usuario.js";



app.use(roteadorUsuario);