## Caixa de Banco

## Inicializar o projeto
`npm i`
- Instala as dependências do projeto.

`npm install -g json-server`
- Instala o json-server.
  
 `npm start` 
- Comando para iniciar o projeto local.

Inicia um servidor local na porta:3000 - Acesse http://localhost:3000/ no seu navegador.

`npm run backend`
- Executa o backend desenvolvido utilizando o Json Server.

## Telas do sistema


<div align="center">
   <img src="https://media.discordapp.net/attachments/1013503645616193539/1152610018160554034/image.png?width=1025&height=458" alt="Home" >

  <div align="center">
   <img src="https://media.discordapp.net/attachments/1013503645616193539/1152610285987823666/image.png?width=1025&height=434" alt="Deposito">
  <img src="https://media.discordapp.net/attachments/1013503645616193539/1152610429655318598/image.png?width=1025&height=450" alt="Transferência" >
  </div>
</div>

<div align="center">
  <img src="https://media.discordapp.net/attachments/1013503645616193539/1152610582214742106/image.png?width=1025&height=434" alt="Saque" >
  <img src="https://media.discordapp.net/attachments/1013503645616193539/1152610914269405254/image.png?width=1025&height=413" alt="Extrato">
</div>


## Validações
- No input só é permitido números.
  
Depósito:
 - Verifica se o valor digitado no campo de input é igual ou maior que 0, pois não é permido.

 Transferência:
  - Verifica se o valor digitado no campo de input é igual ou maior que 0, pois não é permido.
  - Verifica se o valor da transferência diária é maior que R$8.000,00.
  - Verifica se a data da última transferência é igual a data atual(dia de hoje).
  - Verifica se o valor da transferência  é menor ou igual ao saldo possuído.


 Saque
  - Verifica se o valor digitado no campo de input é igual ou maior que 0, pois não é permido.
  - Verifica se o valor da transferência diária é maior que R$5.000,00.
  - Verifica se a data do último saque é igual a data atual(dia de hoje).
  - Verifica se o valor do saque é menor ou igual ao saldo possuído.



## Tecnologias utilizadas
Para desenvolver o projeto, foi utilizado a linguagem JavaScript, com o framework React Js.

Para simulação dos valores, foi utilizado o Json Server.

## Dependências 
 Dependências necessárias para iniciar o projeto:
 - node: v18.14.2
 - json-server : v0.17.3
 


Inicia um servidor local na porta:5000

## Rotas para navegação no navegador
/deposito

/saque

/transferencia

/extrato


## Utilização do json-server

  Os dois métodos a seguir, podem ser úteis para manipulação do db json, para executar testes.

 - Post: /account
    body de exemplo:
    ```
     {
      "name": "Liana",
      "saldo": 30000,
      "CPF": "333.333.222-11",
      "saque": {
        "valorDiario": 5000,
        "ultimoSaque": "14/09/2023"
      },
      "transferencia": {
        "valorDiario": 1000,
        "ultimaTransferencia": "10/09/2023"
      },
	 "extrato":[
          {
          "tipo":"Entrada",
          "data":"20/05/2023",
          "operacao":"deposito",
          "valor":100,
          "saldo":30000
      }
        ]
    }

    ```

 - Get:
   
   /account - Retorna os dados de todas as contas.

   /account/{id} - Retorna os dados de uma conta específica.

## Limitações
- Limitado a um único usuário.
- Baixa segurança pela ausência do backend.
- A transferência só ocorre a saída de dinheiro da conta, e nunca uma entrada.
- A conta fica limitar a receber entradas de dinheiro somente através de depósito.
- Projeto limitado apenas a primeira conta (indíce 0) do db.json.
   
## Sugestão de melhorias 

- Criação de uma api para manipulação de requisições.
- Colocar a parte lógica e manipulação de dados em um backend.
- Substituição do json-server por um banco de dados relacional(MySql).
- Criação de novas regras de negócio.

   




