window.addEventListener('load', () => {
    document.querySelector('#teamName').addEventListener('input', onInputEvent)

    function onInputEvent(event) {
        const teamName = event.target.value

        const div = document.querySelector('#suggestions')

        const visibleClass = 'visibleAutoComplete'
        const hiddenClass = 'hiddenAutoComplete'

        if (teamName.length > 1) {
            getTeamNameSuggestions(teamName, 10)
                .then(res => {
                    if(Array.isArray(res)) {
                        let newHtml = ''
                        for(let team of res) {
                            newHtml += `<div>${team.name}</div>`
                        }
                        div.innerHTML = newHtml
                        div.classList.replace(hiddenClass, visibleClass)
                    } else {
                        // something went wrong with the suggestion request
                        div.classList.replace(visibleClass, hiddenClass)
                    }
                })
        } else {
            div.classList.replace(visibleClass, hiddenClass)
        }
    }
})