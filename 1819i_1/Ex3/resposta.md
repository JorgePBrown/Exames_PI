## Um programador de uma aplicação Web (Thoth) para gestão de alunos (student) numa turma (classroom) definiu os seguintes caminhos para as operações de adição e remoção  de aluno numa turma:
- ## Adicionar - /thoth/classroom/{id}/student/{student id}/add
- ## Remover - /thoth/classroom/{id}/student/{student id}/remove
## Justifique se esta opção é correcta, ou não?

A path deve ser a mesma para o dois: **/thoth/classroom/{id}/student/{student id}**, mas devem usar métodos diferentes:
- Adicionar: **PUT** ou **POST**
- Remover: **DELETE**