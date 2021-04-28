import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
    res.send('just 4 more months')
})

export default router
