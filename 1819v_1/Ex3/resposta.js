async function getAllBundlesBookTitles () {
    let response = await fetch ( 'http://localhost:9200/b4/bundle/_search' )
    let bundles = await response . json ();
    const bookUrlBase = 'http://localhost:9200/books/book/'
    const requests = bundles
        .flatMap( bundle => bundle.books)
    . map ( b => fetch ( bookUrlBase + b . id ))
    const responses = await Promise . all ( requests );
    const books = await Promise.all(responses.map (async resp => await resp.json()))
    const booksTitles = books . map ( b => b . _source . title )
    return booksTitles ;
}

function getAllBundlesBookTitles(){
    return fetch('http://localhost:9200/b4/bundle/_search')
        .then(res => res.json())
        .then(bundles => bundles
            .flatMap(bundle => bundle.books)
            .map(b => fetch(bookUrlBase + b.id)))
        .then(requests => Promise.all(requests))
        .then(responses => Promise.all(responses.map(resp => resp.json())))
        .then(books => books.map (b => b._source.title))
}