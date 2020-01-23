## Dadas um método HTTP e ação/característica do pedido ou resposta que se segue, crie uma frase usandoapenas uma das seguintes palavras: SEMPRE, PODE, NUNCA.Exºs:  GET - criação de um recurso: O método GET NUNCA deve ser usado para criar um recurso.
- ## a. POST - Atualização de um recurso
- ## b. PUT - Criação de um recurso
- ## c. GET - ​body​ da resposta sem conteúdo
- ## d. PUT - ​body​ do pedido sem conteúdo
- ## e. DELETE - ​body​ da resposta com conteúdo

- a : NUNCA - POST não é idempotente e a atualização de um recurso deve ser, logo nunca se deve atualizar um recurso com um POST
- b : PODE
- c : PODE - Se o status code chegar para resposta
- d : PODE
- e : NUNCA?