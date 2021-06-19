import {
    singleResponse,
    pluralResponse,
    failedResponse,
} from '../constants/response.constant'
import Song from '../models/song.model'

let home = [
    'Lựa chọn của Chillmusic',
    'Made for you',
    'Best of soundtracks',
    'More like Peaceful Piano',
    'Best K-Pop of 2020',
    'Based on your recent listening',
    'All about Viet hip-hop',
    'Sleep tight',
]

class SiteController {
    async home(req, res, next) {
        try {
            let songs = await Song.find({}).lean()
            let index = 0

            let homeResult = home.map((title) => ({
                title,
                list: songs.slice(index, (index += 2)),
            }))

            res.status(200).json({ ...pluralResponse, data: homeResult })
        } catch (error) {
            res.status(500).json({ ...failedResponse, message: error.message })
        }
    }
}

export default new SiteController()
