const express = require('express');
const app = express();
const cors = require('cors')

const conversorTemperatura = require('./funcoes');

app.use(cors({
    origin:'*',
}))

app.get('/', (req, res) => {     // recebendo dados 
    let temperatura = req.query.temperatura; // chave 
    let conversor = req.query.conversor; // chave 

    let temperaturaGraus = conversorTemperatura.converteTemperatura(temperatura, conversor);
  

    let json = {temperatura: temperaturaGraus}; // padrao json 

    res.json(json);
});

app.listen(8080 , () => {
    let data = new Date();
    console.log( `Servidor node iniciado em: ${data}`);
})