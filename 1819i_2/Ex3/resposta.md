## Indique o que faz cada uma das execuções programa npm:
- ## a. npm install
- ## b. npm install express --save
- ## c. npm install webpack@4.27.1 --save-dev --save-exact

- a. Instala todos os módulos definidos no ficheiros package.json e as suas dependências na pasta node_modules
- b. Instala o módulo express e as suas dependências na pasta node_modules e acrescenta uma entrada no ficheiro package.json nas dependencies com a sua versão e um indicador de que pode ser updated num install através da marca ^. Ex:

```json
{
    "dependencies": {
        "express": "^4.1.2"
    }
}
```

- c. Instala a versão 4.27.1 do módulo webpack na pasta node_modules e acrescenta uma entrada nas devDependencies no ficheiro package.json. A opção --save-exact é para garantir que a execução de npm install não faz update deste package caso hajam versões mais recentes

```json
{
    "devDependencies": {
        "webpack": "4.27.1"
    }
}
```