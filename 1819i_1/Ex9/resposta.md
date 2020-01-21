## Porque motivo as Single Page Applications apenas mudam o hash do URL?

Porque elas geram a página dependendo do seu estado. Este estado é marcado pelo hash. Se alguma coisa para além do hash fosse alterado, seria feito outro pedido HTTP pelo browser para a nova página, o é o contrário de uma single page application.