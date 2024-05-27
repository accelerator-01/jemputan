import express from 'express'
import connectDb from './config/db.js'
import dotenv from 'dotenv'
import authRegister from './models/authRegister.js'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()
app.use(express.json());
dotenv.config()
app.use(cors())
app.use(bodyParser.json());

app.get('/', (req , res) =>{
    res.send('berhasil')
})

app.use('/register', authRegister)

connectDb()
const port = process.env.PORT

app.listen(port, () => {
    console.log('server runn..')
})