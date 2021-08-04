import express from 'express'
const router = express.Router()
import CollectionController from '../controllers/collection.controller'

// FAVORITE
router.get('/favorite-songs', CollectionController.getFavoriteSongList)
router.post('/favorite-songs', CollectionController.createFavoriteSong)
router.delete(
    '/favorite-songs/:songId',
    CollectionController.deleteFavoriteSong
)

// PLAYLIST
router.get('/playlists', CollectionController.getPlaylistList)
router.get('/playlists/:playlistId', CollectionController.getPlaylistById)
router.post('/playlists', CollectionController.createPlaylist)
router.patch('/playlists/:playlistId', CollectionController.updatePlaylist)
router.delete('/playlists/:playlistId', CollectionController.deletePlaylist)
router.patch(
    '/playlists/:playlistId/add',
    CollectionController.addSongToPlaylist
)
router.delete(
    '/playlists/:id/delete',
    CollectionController.deleteSongFromPlaylist
)

// ALBUMS
router.get('/albums', CollectionController.getAlbumList)
router.get('/albums/:albumId', CollectionController.getAlbumById)
router.post('/albums', CollectionController.addAlbumToCollection)
router.delete(
    '/albums/:albumId',
    CollectionController.deleteAlbumFromCollection
)

// ARTIST
router.get('/artists', CollectionController.getArtistList)
router.post('/artists', CollectionController.addArtistToCollection)
router.delete(
    '/artists/:artistId',
    CollectionController.deleteArtistFromCollection
)

// MY SONG
router.get('/my-songs', CollectionController.getMySongList)
router.post('/my-songs', CollectionController.createMySong)

export default router
