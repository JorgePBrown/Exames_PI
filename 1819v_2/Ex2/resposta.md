## Para a aplicação B4 desenvolvida durante as aulas, definiu-se que não são suportados grupos (bundles) com o mesmo nome. Tendo em conta este requisito a as características inerentes aos diferentes tipos de pedido do protocolo HTTP, identifique quais as possibilidades de endpoints para criação de um grupo, em termos do tipo de pedido HTTP e correspondente URI e por qual optaria, justificando.

Se não são suportados grupos com o mesmo nome, então a criação de um segundo grupo com o mesmo nome, não irá fazer nada. Logo, esta operação é idempotente e ter associada um endpoint com o método idempotente PUT.

O endpoint acabaria por ficar algo como: PUT /bundles?name=:bundleName