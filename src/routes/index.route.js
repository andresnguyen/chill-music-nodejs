const siteRoute = require('./site.route');

const userRoute = require('./user.route');
const songRoute = require('./song.route');
const playlistRoute = require('./playlist.route');
const albumRoute = require('./album.route');
const artistRoute = require('./artist.route');

function route(app) {
	app.use('/users', userRoute);
	app.use('/songs', songRoute);
	app.use('/playlists', playlistRoute);
	app.use('/albums', albumRoute);
	app.use('/artists', artistRoute);
	app.use('/', siteRoute);
}

module.exports = route;
