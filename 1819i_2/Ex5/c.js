/*
Complete as linhas assinaladas de 1 a 10 da função ​renderInput() ​que é chamada por acção do ​click​ sobre um elemento ​td​ da tabela, implementando o comportamento descrito no início desta questão. Caso falhe a actualização do recurso no URL, deve ser reposto o valor original de acordo com ​exemplo​ apresentado na Figura 2 do Anexo. 
*/

function​ renderInput(td, rowIdx,  colIdx) {
    td.innerHTML = `<input id='currInput' value=${td.innerHTML}/>`
    td.querySelector('#currInput')
    .addEventListener('submit', ev ​=>​ {
        ev.preventDefault()​
        const​ val = ev.target.value
        td.innerHTML = val​
        const​ item = dataSource[rowIdx]
        ​const​ prop = Object.keys(item)[colIdx]
        ​const​ backup = item[prop]
        item[prop] = isNaN(val) ? val : Number(val)
        listenerOnData(td, rowIdx, colIdx)​
        const​ options = {
            method: 'PUT',
            credentials: 'same-origin'
        }
        ​const​ path = `/api/${window.location.hash}`
        ​const​ resp = ​await​ fetch(path, options)​
        if​(resp.status != ​200​) {
            item[prop] = backup
            td.innerHTML = backup
        }            
    })    
}