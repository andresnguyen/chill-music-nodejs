import Song from '../models/song.model'

class SongService {
    async getOneSong(songId) {
        try {
            return Song.findById(songId)
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async getAllSong() {
        try {
            return Song.find({})
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async createOneSong(newSong) {
        try {
            return new Song({ ...newSong }).save()
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async updateOneSong(songId, songUpdate) {
        try {
            console.log(songId)

            const song = await Song.findById(songId)
            console.log({ song })
            song.name = songUpdate.name
            return song.save()
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async deleteOneSong(songId) {
        try {
            return Song.findByIdAndDelete(songId)
        } catch (error) {
            throw new Error(error.message)
        }
    }
}

export default new SongService()
