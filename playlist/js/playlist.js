/**
 * @typedef {Object} Song
 * @property {string} title - The title of the song.
 * @property {string} artist - The artist of the song.
 * @property {string} genre - The genre of the song.
 * @property {number} duration - The duration of the song in seconds.
 * @property {boolean} favorite - Whether the song is marked as a favorite.
 */
// Example: { title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }

/**
 * @typedef {Object} Playlist
 * @property {string} name - The name of the playlist.
 * @property {Song[]} songs - The list of songs in the playlist.
 */
// Example: { name: 'Playlist Name', songs: [{ title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }] }

const musicCatalog = () => {
  /**
   * Array of playlists in the catalog.
   * @type {Playlist[]}
   */
  let playlists = [];

  /**
   * Find a playlist by its name in playlists list
   * @param {string} playlistName - The name of the playlist 
   * @throws {Error} If the playlist is not found
   * @returns {Playlist} The finded playlist
   */
  const findPlaylist = (playlistName) => {
    // 1) buscar nombre de playlist en lista playlists
    const findedPlaylist = playlists.find(({ name }) => name === playlistName);
    // 2) si no encuentra playlist lanza error
    if (!findedPlaylist) {
      throw new Error('Playlist not found');
    }
    return findedPlaylist
  };

  /**
   * Find a song in a playlist
   * @param {string} playlist - The playlist
   * @param {string} songTitle - The name of the song
   * @throws {Error} If the song  is not found
   * @returns {Song} The finded song
   */
  const findSong = (playlist, songTitle) => {
    const findedSong = (playlist.songs.find(({ title }) => title === songTitle))
    if (!findedSong) {
      throw new Error('Song not found');
    }
    return findedSong
  };

  /**
   * Adds a new playlist to the catalog.
   * @param {string} playlistName - The name of the new playlist.
   */
  const createPlaylist = (playlistName) => {
    // creo una nueva variable objeto y le cambio los parametros 
    let nuevaPlaylist = { name: playlistName, songs: [] };
    //añade ese objeto a la lista de playlist
    playlists = [...playlists, nuevaPlaylist]
  };

  /**
   * Gets all playlists in the catalog.
   * @returns {Playlist[]} The list of all playlists.
   Esta constante almacena una función flecha que devuelve simplemente playlists
   */
  const getAllPlaylists = () => playlists;

  /**
   * Removes a playlist from the catalog.
   * @param {string} playlistName - The name of the playlist to remove.
   */
  const removePlaylist = (playlistName) => {
    // borrar la playlist
    playlists = playlists.filter(playlist => playlist.name !== playlistName);
  };

  /**
   * Adds a song to a specific playlist.
   * @param {string} playlistName - The name of the playlist to add the song to.
   * @param {{ title: string, artist: string, genre: string, duration: number }} song - The song to add to the playlist.
   * @throws {Error} If the playlist is not found.
   */
  const addSongToPlaylist = (playlistName, song) => {
    const findedPlaylist = findPlaylist(playlistName)

    song.favorite = false

    findedPlaylist.songs = [...findedPlaylist.songs, song]
  };

  /**
   * Removes a song from a specific playlist.
   * @param {string} playlistName - The name of the playlist to remove the song from.
   * @param {string} title - The title of the song to remove.
   * @throws {Error} If the playlist or song is not found.
   */
  const removeSongFromPlaylist = (playlistName, songTitle) => {
    const findedPlaylist = findPlaylist(playlistName)

    if (!findedPlaylist.songs.find((song) => song.songTitle === title)) {
      throw new Error('Song not found');
    }
    // uso maps para crear una nueva versión 
    playlists = playlists.map((playlist) => {
      if (playlist.name === playlistName) {
        return {
          ...playlist,
          songs: playlist.songs.filter((song) => song.title !== title),
        };
      }
      return playlist;
    });
  };

  //const findedSong = findSong(findedPlaylist, songTitle);
  //findedPlaylist.songs = findedPlaylist.songs.filter(({ title }) => title !== songTitle)
  //};

  /**
   * Marks a song as a favorite or removes the favorite status.
   * @param {string} playlistName - The name of the playlist containing the song.
   * @param {string} title - The title of the song to mark as a favorite.
   */
  const favoriteSong = (playlistName, songTitle) => {
    playlists = playlists.map((playlist) => {
      if (playlist.name === playlistName) {
        return {
          ...playlist,
          songs: playlist.songs.map((song) => {
            if (song.title === songTitle) {
              return {
                ...song,
                favorite: !song.favorite,
              };
            }
            return song;
          }),
        };
      }
      return playlist;
    });
  };

  /**
   * Sorts songs in a specific playlist by a given criterion (title, artist, or duration).
   * @param {string} playlistName - The name of the playlist to sort songs in.
   * @param {'title' | 'artist' | 'duration'} criterion - The criterion to sort by.
   * @returns {Song[]} The list of sorted songs.
   * @throws {Error} If the playlist is not found or the criterion is invalid.
   */
  const sortSongs = (playlistName, criterion) => { };

  return { createPlaylist, addSongToPlaylist, removeSongFromPlaylist, sortSongs, getAllPlaylists, removePlaylist, favoriteSong };
};

export default musicCatalog; 