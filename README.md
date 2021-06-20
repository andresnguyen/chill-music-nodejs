# Chillmusic Nodejs

A backend API. Chillmusic is music app similar Spotify.

## Authors

-   [@thuongnguyen.it78](https://www.github.com/thuongnguyen-it78)
-   [@quocthuan251](https://www.github.com/quocthuan251)

## Demo

https://chill-music-nodejs.herokuapp.com/

## API Reference

1. [Songs](#songs)
1. [Users](#users)
1. [Playlists](#playlists)
1. [Albums](#albums)
1. [Artists](#artists)
1. [Collection](#collection)
1. [Auths](#auths)
 <div id='songs' />

### 1. Songs

#### Get all songs

```http
  GET /api/songs
```

#### Get a song

```http
  GET /api/songs/{id}
```

#### Post a song

```http
  POST /api/songs/{id}
```

#### Update a song

```http
  PATCH /api/songs/{id}
```

#### Delete a song

```http
  DELETE /api/songs/{id}
```

 <div id='users' />

### 2. Users

#### Get all users

```http
  GET /api/users
```

#### Get a user

```http
  GET /api/users/{id}
```

#### Post a user

```http
  POST /api/users/{id}
```

#### Update a user

```http
  PATCH /api/users/{id}
```

#### Delete a user

```http
  DELETE /api/users/{id}
```

 <div id='playlists' />

### 3. Playlists

#### Get all playlists

```http
  GET /api/playlists
```

#### Get a playlist

```http
  GET /api/playlists/{id}
```

#### Post a playlist

```http
  POST /api/playlists/{id}
```

#### Update a playlist

```http
  PATCH /api/playlists/{id}
```

#### Delete a playlist

```http
  DELETE /api/playlists/{id}
```

 <div id='albums' />

### 4. Albums

#### Get all albums

```http
  GET /api/albums
```

#### Get a album

```http
  GET /api/albums/{id}
```

#### Post a album

```http
  POST /api/albums/{id}
```

#### Update a album

```http
  PATCH /api/albums/{id}
```

#### Delete a album

```http
  DELETE /api/albums/{id}
```

 <div id='artists' />

### 5. Artists

#### Get all artists

```http
  GET /api/artists
```

#### Get a artist

```http
  GET /api/artists/{id}
```

#### Post a artist

```http
  POST /api/artists/{id}
```

#### Update a artist

```http
  PATCH /api/artists/{id}
```

#### Delete a artist

```http
  DELETE /api/artists/{id}
```

 <div id='collection' />

### 6. Collection

#### Get liked songs

```http
  GET /api/collection/songs
```

#### Post a song to liked songs

```http
  POST /api/collection/songs
```

#### Delete a song from liked songs

```http
  DELETE /api/collection/songs/{id}
```

#### Get playlists

```http
  GET /api/collection/playlists
```

#### Get a playlist

```http
  GET /api/collection/playlists/{id}
```

#### Post a playlist

```http
  POST /api/collection/playlists
```

#### Update a playlist

```http
  PATCH /api/collection/playlists/{id}
```

#### Delete a playlist

```http
  DELETE /api/collection/playlists/{id}
```

#### Add a song to a playlist

```http
  UPDATE /api/collection/playlists/{id}/songs
```

#### Delete a song from a playlist

```http
  DELETE /api/collection/playlists/{id}/songs
```

#### Get albums

```http
  GET /api/collection/albums
```

#### Get a album

```http
  GET /api/collection/albums/{id}
```

#### Add a album to collection

```http
  POST /api/collection/albums/{id}
```

#### Delete a album from collection

```http
  GET /api/collection/albums/{id}
```

#### Get artists

```http
  GET /api/collection/artists
```

#### Add a artists to collection

```http
  POST /api/collection/artists
```

#### Delete a artists from collection

```http
  DELETE /api/collection/artists/{id}
```

#### Get my songs

```http
  GET /api/collection/my-song
```

#### Post my song

```http
  POST /api/collection/my-song
```

 <div id='auths' />

### 7. Auths

#### Sign in

```http
  POST /api/auths/sign-in
```

#### Sign up

```http
  POST /api/auth/sign-up
```

#### Sign out

```http
  GET /api/auths/sign-out
```

#### Change password

```http
  POST /api/auths/change-pw
```

#### Change infomation

```http
  POST /api/auths/change-info
```
