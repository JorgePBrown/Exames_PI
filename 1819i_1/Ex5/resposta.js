/*
Implemente a função requestsToList(urls, listID) que realiza um pedido HTTP para cada um dos
caminhos presentes em urls e adiciona o corpo da resposta como li ao elemento HTML com id listId.
Os elementos li devem ser adicionados:
● pela mesma ordem do url correspondente em urls
● à medida que são recebidas as respostas para cada url.
Por exemplo, a resposta ao pedido do 3º url não pode ser inserida na lista antes da inserção da resposta do pedido
do 2º url, mesmo que este último chegue mais tarde.
A utilização de uma abordagem como a do Promise.all está errada. Pode usar o fetch ou request-promise.
*/

async function requestsToList(urls, listId) {
    const requests = urls.map(url => fetch(url))

    const list = document.querySelector(`#${listId}`)

    for(let request of requests) {
        const response = await request

        const responseBody = await response.text()

        list.innerHTML += `<li>${responseBody}</li>`
    }
}