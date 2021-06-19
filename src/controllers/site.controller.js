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

            home = home.map((title) => ({
                title,
                list: songs.slice(index, (index += 20)),
            }))

            res.json({ ...pluralResponse, data: home })
        } catch (error) {
            res.json({ ...failedResponse, message: error.message })
        }
    }
}

export default new SiteController()
