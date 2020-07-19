# Listando-Repositó-rios-do-Git-Hub
Nesta aplicação eu utilizo uma API do GitHub para fazer a busca dos repositórios dos usuários a partir do seu username / In this application I use a GitHub API to search users' repositories using their username.

Inicio meu scritp com uma função que retorna uma Promise. Nela utilizo a API XMLHttpRequest utilizada para fazer requisições HTTP e HTTPS. Seguindo no laço IF, verifico seu retorno e chamo as callbacks passando
para elas o retorno da Promise.

Depois, uso uma função assíncrona utilizando um laço try catch para fazer a chamada da minha função que retorna a Promise. Dentro do try, mapeio os dados recebidos e listo eles em html que é criado também na função.

As funções seguintes utilizo para fazer "interações" no html como "Buscando.." e "Repoisitórios:". Uso elas também para fazer o controle da exibição das informações.

Essa é apenas uma aplicação que fiz para estudar Promises e como consumir dados de uma API.

