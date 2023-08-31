import dotenv from "dotenv";
import roteadorUsuario from "./routes/usuario.js";
import express from "express";      

dotenv.config();

const app = express();              
const port = 3000;  
//index.js
app.use(express.json()); 
app.use(roteadorUsuario);               

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







