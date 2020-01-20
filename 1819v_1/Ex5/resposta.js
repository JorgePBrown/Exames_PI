// 5.2

function getArtistsNames(nameStart, resultCount) {
    return fetch(`/artists/search?name=${nameStart}&limit=${resultCount}`).then(res => res.json())
}


// 5.3

window.addEventListener('load', () => {
    const input = document.querySelector('#artists')

    input.addEventListener('input', async (event) => {
        const autoCompleteDiv = document.querySelector('#suggestions')

        const text = event.target.value

        console.log(`New input = ${text}`);

        if (text.length > 3) {

            const artists = await getArtistsNames(text, 10)

            let newHtml = artists.reduce((acc, cur) => {
                acc += `<div>${cur}</div>`
                return acc
            }, '')

            autoCompleteDiv.innerHTML = newHtml

            autoCompleteDiv.classList.replace('hiddenAutoComplete', 'visibleAutoComplete')
        } else {
            autoCompleteDiv.classList.replace('visibleAutoComplete', 'hiddenAutoComplete')
        }
    })
})