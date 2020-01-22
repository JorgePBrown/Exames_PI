## Uma Web API tem a seguinte documentação relativos aos seus endpoints:

- ## a. Obtem o recurso com identificador id - GET ​/api/resources/{id}
  - Body​ do pedido: vazio
  - Status codes​:
    - 201 Sucesso. A representação do recurso segue no body no formato application/json
    - 404 Erro no pedido. O cliente enviou um pedido inválido
    - 400 Erro no pedido. Não existe o recurso com o identificador id

- ## b. Cria ou atualiza um novo recurso com identificador id - PUT /api/resources/{id}
  - Body do pedido: A representação do recurso a criar
  - Status codes:
    - 200 Sucesso. O recurso foi criado com sucesso
    - 404 Erro no pedido. O cliente enviou um pedido inválido
    - 409 Conflito. O recurso com o identificador id já existe


## Para cada endpoint indique as incorreções e omissões que deteta na documentação.


- ### a. Obtem o recurso com identificador id - GET ​/api/resources/{id}
  - Body​ do pedido: vazio
  - Status codes​:
    - 200 Sucesso. A representação do recurso segue no body no formato application/json -> Passou a ser 200 porque não foi criado nenhum recurso, ou pelo menos não devia num pedido GET.
    - 400 Erro no pedido. O cliente enviou um pedido inválido -> Passou a ser 400
    - 404 Erro no pedido. Não existe o recurso com o identificador id -> Passou a ser 404

- ### b. Cria ou atualiza um novo recurso com identificador id - PUT /api/resources/{id}
  - Body do pedido: A representação do recurso a criar
  - Status codes:
    - 200 Sucesso. O recurso foi atualizado com sucesso
    - 201 Sucesso. O recurso não existia por isso foi criado com sucesso
    - 400 Erro no pedido. O cliente enviou um pedido inválido