let​ dataSource

/*
data source:
[
    {
        heading1: value1,
        heading2: value2,
        ...
    },
    {
        heading1: valueN,
        heading2: valueM,
        ...
    }
]
*/

function listenerOnHeading(th, colIdx) {
    const heading = th.innerHtml || Object.keys(dataSource[0])[colIdx]

    dataSource.sort((o1, o2) => {
        const value1 = o1[heading]
        const value2 = o2[heading]

        if (value1 == value2) return 0
        return value1 > value2 ? 1 : -1
    })

    render()
}
