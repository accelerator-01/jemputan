import express from 'express'
import User from './usermodel.js'
import cors from 'cors'


const app = express()
const router = express.Router()
app.use(cors())
app.use(express.json());

router.post('/', async (req ,res ) => {
    
    const {nomorhp,password,role} = req.body
    console.log({email},{password},{role})
    try {
        let user = await User.findOne({nomorhp})
        if (user) {
            return res.status(400).json({ message : 'nomor hp ini sudah terdaftar'})
        }
        user = new User ({
            nomorhp,
            password,
            role
        })
        await user.save()
        res.json({ message : "nomor hp succesfully register"})
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error')
    }
})

export default router