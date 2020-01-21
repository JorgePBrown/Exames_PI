/*
Seguindo a arquitetura de módulos da componente servidora definida para o trabalho prático, defina o
método do módulo yama-web-api, que implementa o endpoint definido na alínea anterior. Este módulo deve
usar um método do módulo yama-service , presente na variável yamaService global ao módulo, que será
implementado na alínea seguinte. Deste modo, a sua utilização deve ser coerente com a implementação a
realizar.
*/

// POST /playlists/:playlistId/songs/:songId

let yamaService

function addSongToPlaylist(req, res) {
    const playlistId = req.params.playlistId
    const songId = req.params.songId

    yamaService.addSongToPlaylist(playlistId, songId)
        .then(_ => {
            res.writeHead(200)
            res.end(JSON.stringify({
                status: 'ok',
                message: 'Song successfully added to playlist.'
            }))
        }).catch(err => {
            res.writeHead(err.statusCode)
            res.end(JSON.stringify({
                status: err.status,
                message: err.message
            }))
        })
}