async function getAllBundlesBookTitles () {
    const bookUrlBase = 'http://localhost:9200/books/book/'

    const response = await fetch('http://localhost:9200/b4/bundle/_search')

    let bundles = await response.json()

    const requests = bundles.hits.hits
        .flatMap(bundle => bundle._source.books)
        .map(b => fetch(bookUrlBase + b.id))

    const responses = await Promise.all(requests)

    const responseBodies = responses.map(resp => resp.json())

    const books = await Promise.all(responseBodies)

    const titles = books.map(b => b._source.title)

    return titles
}