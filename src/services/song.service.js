import Song from '../models/song.model'

class SongService {
    async getOneSong(songId) {
        try {
            return Song.findById(songId).lean()
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async getAllSong() {
        try {
            return Song.find({}).lean()
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
