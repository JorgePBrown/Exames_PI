async function getAllBundlesBookTitles () {
    const bookUrlBase = 'http://localhost:9200/books/book/'
    return fetch('http://localhost:9200/b4/bundle/_search')
    .then(response => response.json())
    .then(bundles =>
        bundles.hits.hits
            .flatMap(bundle => bundle._source.books)
            .map(b => fetch(bookUrlBase + b.id)))
    .then(requests => Promise.all(requests) ) // 1
    .then(responses => responses.map(resp => resp.json()))
    .then(responseBodies => Promise.all(responseBodies)) // 2
    .then(books => books.map(b => b._source.title))
}