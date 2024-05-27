import express from 'express'
import User from './usermodel.js'
import cors from 'cors'


const app = express()
const router = express.Router()
app.use(cors())
app.use(express.json());

router.post('/', async (req ,res ) => {
    
    const {email,password,role} = req.body
    console.log({email},{password},{role})
    try {
        let user = await User.findOne({email})
        if (user) {
            return res.status(400).json({ message : 'salahh,  eamil yang sama telah terdaftar'})
        }
        user = new User ({
            email,
            password,
            role
        })
        await user.save()
        res.json({ message : "Email berhasil mendaftar"})
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error')
    }
})

export default router