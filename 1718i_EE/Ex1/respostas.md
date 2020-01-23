# Na implementação de um servidor HTTP com o módulo express, o envio de um objeto ctx numa resposta através do método render() de res, i.e. res.render(view_name, ctx) é equivalente à execução de quais ações?

É equivalente à geração de uma página HTML dependente de um contexto. É feita através de templates. ???????????

# Justifique porque é que a resposta a um POST deve ter sempre um código de estado HTTP de redirect, sempre que a submissão de um formulário HTML tem sucesso?

Para mostrar o resultado do formulário para evitar que o utilizador faça várias submissões por achar que o pedido não foi feito.

# Justifique se alguma das abordagens é incorreta: A) Um URI para um recurso com duas representações diferentes; B) Dois URIs diferentes para o mesmo recurso com a mesma representação.

A segunda opção é incorrecta pois a relação recurso:URI deve ser 1:1. Para obter diferentes representações de um mesmo recurso devem ser usados valores diferentes no header accept do pedido HTTP.

# Justifique como deve proceder para submeter um formulário HTML através do método HTTP PUT?

Se tivermos um listener registado ao evento submit, quando o formulário foi submetido, podemos pegar manualmente na informação dos seus campos e fazer o pedido PUT, no entanto, sem fazer o pedido à mão é impossível usar o método PUT. 