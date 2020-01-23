# GET /teams/search?name=:string&exact=:boolean&limit=:integer

### Resposta em JSON:
```json
[
    {
        "id": 12355,
        "name": "team1's name"
    },
    {
        "id": 67855,
        "name": "team2's name"
    },
    {
        "id": 8695,
        "name": "team3's name"
    }
]
```

### Códigos:
- 200 em caso de sucesso.
- 400 no caso de faltar algum parâmetro ou o pedido estar mal construído de qualquer outra forma.