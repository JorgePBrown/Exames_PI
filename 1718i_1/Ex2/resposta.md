# Para a seguinte definição do módulo wacky assinale com V as utilizações que executam sem erros e com F as utilizações que dão erro de execução.

```javascript
constwacky = nr => console.log(nr/3)
wacky.dup = nr => console.log(nr*2)
module.exports = wacky
```

[F] require('./wacky')(7).dup(3)

[V] require('./wacky')(7)

[F] require('./wacky')(7)(3)

[V] require('./wacky').dup(3)