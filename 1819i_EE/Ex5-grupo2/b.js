function getTeamNameSuggestions(teamNameStart, teamCount) {
    const url = `/teams/search?name=${teamNameStart}&exact=false&limit=${teamCount}`
    
    const options = {
        method: 'GET',
        accept: 'application/json'
    }

    return fetch(url, options)
        .then(res => {
            if (res.status == 200) return res.json()

            throw res.status // return res.status ????
        })
}