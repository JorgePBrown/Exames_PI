## Justifique se a utilização do webpack pode ajudar a reduzir o número de pedidos HTTP de 4.a? Em caso afirmativo quais as modificações necessárias no front-end mantendo o mesmo comportamento de 4.a)

O webpack diminuiria o número de pedidos porque iria juntar os ficheiros javascript pedidos. Assim, se o webpack gerar um ficheiro merged.js, o código html passará a:

```html
<html>
    <head>
        <link rel="stylesheet" href="bootstrap.css">
        <script src="merged.js"></script>
    </head>
    <body>
        <a href="https://www.gutenberg.org/" >
            Project Gutenberg
            <img src="Gutenberg-logo.png">
        </a>
    </body>
</html>
```