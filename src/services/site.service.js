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

class SiteService {
    async home(req, res, next) {
        try {
            let songs = await Song.find({}).lean()

            home = home.map((title) => ({
                title,
                list: songs.slice(index, (index += 30)),
            }))

            res.json({ data: home })
        } catch (error) {
            console.log(error)
        }
    }
}

export default new SiteService()
