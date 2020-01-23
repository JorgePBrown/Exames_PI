## Para a seguinte definição do módulo ​wacky assinale com V as utilizações que executam sem erros e com F as utilizações que dão erro na execução. Para as respostas V, indique o resultado na consola dessa execução.

```javascript
const​ ​wacky​ = ​nr ​​=>​ () => console​.​log​(​nr​/​3​)
wacky​.​dup​ = ​nr ​​=> ​console.log(nr*2)
module.exports = wacky
```

- a : F
- b : V - 6
- c : V - não há output
- d : V - 3
