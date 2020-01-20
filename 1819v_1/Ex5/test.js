module.exports = function({express, app}) {
    app.use('/', express.static('.'))

    app.get('/artists/search', searchArtists)
}


const artists = [
    'Michael Jackson',
    'Prince',
    'Beatles',
    'Queen'
]

function searchArtists(req, res) {
    res.end(JSON.stringify(artists))
}