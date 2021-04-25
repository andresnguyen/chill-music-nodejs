import userRoute from './user.route';
import siteRoute from './site.route';
import songRoute from './song.route';
import playlistRoute from './playlist.route';
import albumRoute from './album.route';
import artistRoute from './artist.route';

function route(app) {
	app.use('/users', userRoute);
	app.use('/songs', songRoute);
	app.use('/playlists', playlistRoute);
	app.use('/albums', albumRoute);
	app.use('/artists', artistRoute);
	app.use('/', siteRoute);
}

export default route;
