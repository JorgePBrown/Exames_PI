## Indique os pre-requisitos deste middleware , nomeadamente que middleware(s) têm que ser instalados antes deste, justificando.

Passport para adicionar a API de autenticação ao object Request. Neste caso, usamos o método *isAuthenticated* dessa API.

## A implementação deste módulo está incorreta. Indique os problemas estes podem provocar nas aplicações cliente.

Para haver um redireccionamento é necessário definir um código de resposta HTTP 3xx, o que não está a ser feito.