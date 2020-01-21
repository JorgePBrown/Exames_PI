## Uma aplicação Express configurada com o middleware dado por passport.initialize(), disponibiliza os métodos login() e logout() no objeto Request. Explique detalhadamente todos os passos executados pela chamada do método logout().

O método logout destrói a sessão do utilizador currente e remove a propriedade user do objecto Request.

[Fonte](https://github.com/jwalton/passport-api-docs#reqlogout)