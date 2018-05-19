## Começando

Para que tudo funcione corretamente é necessário tem os itens abaixo

```
node, npm instalados e conta no uploadcare.com
```

## Iniciando projeto

Abra o terminal e navegue até o diretório que foi clonado o projeto, use o comando abaixo:

```
npm install
```

Feito isso irá criar um novo diretório chamado /node_modules. Após criado esse diretório, use o camando abaixo:

```
npm start
```

Feito isso irá abrir uma nova aba do navegador, com o endereço padrão do node: htto://localhost:3000

## Configuraçōes adicionais

Na raiz do projeto existe um arquivo chamado language.json, nesse arquivo deve ser colocado os valores de traduções, ex:

```
{
  "br" : {
    "fields" : {
      "name" : "Nome"
    }
  },
  "en" : {
    "fields" : {
      "name" : "Name"
    }
  }
}
```

na view pode ser chamado passando os valores desejados:

```
{language.br.fields.name}
{language.en.fields.name}
```

## Uploadcare

No diretório /public/index.html, linha 34 alterar o "API_KEY" pela chave publica que tem no uploadcare. Pode ser acessado um exemplo funcional em http://localhost:3000/send-money, aba Deposit.

O upload funciona enviando os dados para o servidor, após isso o caminho fica salvo no campo temporário que pode ser acessado para que possa fazer os devidos tratamentos de dados.

## SendMoney

No formulário de envio os dados estão sendo tratados, os dados estão em json e podem ser tratados para serem enviados para outros locais. Acesse /src/components/SendMoney.js, na linha 55.
