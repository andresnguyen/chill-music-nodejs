import express from 'express'
const router = express.Router()

import Song from '../models/song.model'
import SiteController from '../controllers/site.controller'

let homePlaylist = [
    'Lựa chọn của ChillMusic',
    'Made for',
    'Best of soundtracks',
    'More like Peaceful Piano',
    'Best K-Pop of 2020',
    'Based on your recent listening',
    'All about Viet hip-hop',
    'Sleep tight',
]

router.get('/', async (req, res, next) => {
    try {
        let songs = await Song.find({}).lean()

        let index = 0

        homePlaylist = homePlaylist.map((title) => {
            return {
                title,
                playlist: songs.slice(index, (index += 30)),
            }
        })
        res.json({ data: homePlaylist })
    } catch (error) {
        console.log(error)
    }
})

export default router
