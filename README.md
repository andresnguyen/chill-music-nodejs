## API Reference

### 1. SONG

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

### 2. USER

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

### 3. PLAYLIST

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

### 4. ALBUM

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

### 5. ARTIST

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

### 6. COLECTION

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

### 7. AUTHS

#### 1. Sign in

```http
  POST /api/auths/sign-in
```

#### 2. Sign up

```http
  POST /api/auth/sign-up
```

#### 3. Sign out

```http
  GET /api/auths/sign-out
```

#### 4. Change password

```http
  POST /api/auths/change-pw
```

#### 5. Change infomation

```http
  POST /api/auths/change-info
```
