# Considere  o  pedido  HTTP  e  a  correspondente  resposta,  na  Listagem  1.  O  código  que  processou  o  pedido encontra-se  na  Listagem  2.  Pretende-se que a resposta contenha o valor da chave ‘a’ presente no pedido. Identifique  os  problemas    que  encontra,  quer  provoquem  erros  funcionais  ou  não,  e  proponha  as  respetivas correções.

Listagem 1
```
POST 3000/tasks HTTP/1.1
Accept: */*
Host: localhost:3000
Content-Length: 7
a=value
-------------------------------------------------------------
HTTP/1.1 200
Date: Wed, 17 Jan 2018 23:14:41 GMT
Content-Type: text/html

a = undefined
```

Listagem 2
```javascript
const express= require('express')
const bodyParser = require('body-parser')
const app= express()
app.use(bodyParser.urlencoded())

app.post('/tasks', function(req, rsp) {
    rsp.end(`a = ${req.body.a}`)
})
```

O pedido feito precisa de ter o header de content-type: x-www-form-urlenconded para que o middleware body-parser afete a propriedade body do objecto req com o corpo do pedido.