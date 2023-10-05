import express from 'express'
import dotenv from 'dotenv'
import { scrappingData } from './scrapping/scrappingFunctions.js'

const port = 8002
const app = express()
app.use(express.json())

app.get('/', async(req,res) => {
    
    const response = await scrappingData('https://empresite.eleconomista.es/Actividad/SOFTWARE-FACTORY/provincia/MADRID/')
    res.json({data : response })


})

app.listen(port , () => {
    console.log('Listening in port : ' + port);
})