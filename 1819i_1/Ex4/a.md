## Justifique quantos pedidos HTTP resultam do carregamento do seguinte documento HTML no browser:

```html
<html>
    <head>
        <link rel="stylesheet" href="bootstrap.css">
        <script src="handlebars.js"></script>
        <script src="bookSearch.js"></script>
    </head>
    <body>
        <a href="https://www.gutenberg.org/" >
            Project Gutenberg
            <img src="Gutenberg-logo.png">
        </a>
    </body>
</html>
```

Pedidos:
- GET handlebars.js
- GET bookSearch.js
- GET Gutenberg-logo.png

3 pedidos.