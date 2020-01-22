## Dadas as assinaturas das seguintes funções que seguem o idioma comum em NodeJS, classifique numa frase a forma como cada função pode ser implementada no que diz respeito à sua natureza síncrona ou assíncrona. Nessa classificação use uma das palavras: SEMPRE, PODE, NUNCA. Exºs: fx NUNCA é implementada de forma síncrona; fx PODE ser implementada de forma síncrona; fx é SEMPRE implementada de forma assíncrona.

- ## a.[0,5] f1(p1, p2, cb) // retorna undefined
- ## b.[0,5] f2(p1, p2) // retorna um valor numérico
- ## c.[0,5] f3(p1, p2) // retorna uma promise

f1 pode ser assíncrona. Parece receber um callback por parâmetro

f2 é sempre síncrona porque não recebe nenhum callback e não retorna uma Promise

f3 é sempre assíncrona porque retorna uma Promise