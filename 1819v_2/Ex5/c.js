/*
yama-db tem os métodos:
getPlaylist que recebe o id da playlist e retorna uma Promise<Playlist>. Playlist = {
    name: String,
    allowsDuplicates: Boolean
    songs: Array<Number>
}

updatePlaylist que recebe o id da playlist e o novo objecto Playlist para afetar na base de dados e retorna uma Promise<Boolean> para dizer se a afetação foi bem sucedida.
*/

function addSongToPlaylist(playlistId, songId) {
    return yamaDb.getPlaylist(playlistId)
        .then(playlist => {
            
            if (!playlist.allowsDuplicates && playlist.songs.some(song => song === songId)) {
                throw {
                    statusCode: 403,
                    status: 'Forbidden',
                    message: 'This playlist does not allow duplicates.'
                }
            }

            playlist.songs.push(songId)
            return playlist
        })
        .then(playlist => yamaDb.updatePlaylist(playlistId, playlist))
}