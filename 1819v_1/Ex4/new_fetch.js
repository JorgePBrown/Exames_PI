(
    function setNewFetch() {
        const oldFetch = fetch
        fetch = newFetch

        const cacheHeaderName = 'Cache-Control'

        const cache = {}

        async function newFetch(url) {
            const cachedResult = cache[url]

            if (cachedResult) return cachedResult

            const response = await oldFetch.apply(arguments)

            let data = await response.json()

            const headers = response.headers

            if (headers.has(cacheHeaderName)) {
                const headerValue = headers.get(cacheHeaderName)

                if (headerValue == 'public' || headerValue == 'private') {
                    cache[url] = data
                } else {
                    if (headerValue != 'no-cache') {
                        // 400: BAD Request. Header value is not one of the three established.
                    }
                }
                    
            }

            return data
        }
    }
)()