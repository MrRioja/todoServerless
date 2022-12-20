# ToDos Serverless - Ignite NodeJS

<p align="center">
  <img src="https://img.shields.io/static/v1?label=todo&message=serverless&color=blueviolet&style=for-the-badge"/>
  <img src="https://img.shields.io/github/license/MrRioja/todoServerless?color=blueviolet&logo=License&style=for-the-badge"/>
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/MrRioja/todoServerless?color=blueviolet&logo=TypeScript&logoColor=white&style=for-the-badge">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/MrRioja/todoServerless?color=blueviolet&style=for-the-badge">
</p>
<br>

<p align="center">
  <a href="#sobre">Sobre</a> •
  <a href="#todoserverless">todoServerless</a> •
  <a href="#instalação">Instalação</a> •
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#autor">Autor</a>  
</p>

## Sobre

Desafio proposto no ultimo desafio da trilha de NodeJS no bootcamp Ignite da Rocketseat. A ideia foi construir uma API utilizando o framework serverless para consolidar os conteudos aprendidos no módulo VI do curso.

## todoServerless

API para gerenciamento de todos feita utilizando o framework serverless.
Como o proposito aqui é praticar o que foi aprendido no módulo VI, a aplicação é bem simples e possui os endpoints abaixo:

<details>
    <summary>GET <code>/todos/{userid}</code></summary>
    <br>
    Essa rota deve receber o <code>id</code> de um usuário pelo <code>pathParameters</code> (o mesmo id que foi usado para criar algum <code>todo</code>). A rota deve retornar os todos que possuírem o <code>user_id</code> igual ao <code>id</code> recebido pelos parâmetros.
</details>

<details>
    <summary>POST <code>/todos/{userid}</code></summary>
    <br>
    Essa rota deve receber o <code>id</code> de um usuário pelo <code>pathParameters</code> (você pode criar esse id manualmente apenas para preencher o campo) e os seguintes campos no corpo da requisição: <code>title</code> e <code>deadline</code>, onde <code>deadline</code> é a data limite para o <code>todo</code>.
    <br>
    O <code>todo</code> deverá ser salvo com os seguintes campos no DynamoDB:
    <br>
    <pre>
        <code>
            { 
                id: 'uuid', // id gerado para garantir um único todo com o mesmo id
                user_id: 'uuid' // id do usuário recebido no pathParameters
                title: 'Nome da tarefa',
                done: false, // inicie sempre como false
                deadline: new Date(deadline)
            }
        </code>
    </pre>
</details>

## Instalação

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disso é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone git@github.com:MrRioja/todoServerless.git

# Acesse a pasta do projeto no terminal/cmd
$ cd todoServerless

# Instale as dependências
$ npm install
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
# Caso prefira usar o Yarn execute o comando abaixo
$ yarn dev
```

## Tecnologias

<img align="left" src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" height="75" />

<img align="left" src="https://user-images.githubusercontent.com/2752551/30405068-a7733b34-989e-11e7-8f66-7badaf1373ed.png" alt="Serverless Framework" height="75"/>

<br><br><br>

## Autor

<div align="center">
<img src="https://images.weserv.nl/?url=avatars.githubusercontent.com/u/55336456?v=4&h=100&w=100&fit=cover&mask=circle&maxage=7d" />
<h1>Luiz Rioja</h1>
<strong>Backend Developer</strong>
<br/>
<br/>

<a href="https://linkedin.com/in/luizrioja" target="_blank">
<img alt="LinkedIn" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>

<a href="https://github.com/mrrioja" target="_blank">
<img alt="GitHub" src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/>
</a>

<a href="mailto:lulyrioja@gmail.com?subject=Fala%20Dev" target="_blank">
<img alt="Gmail" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
</a>

<a href="https://api.whatsapp.com/send?phone=5511933572652" target="_blank">
<img alt="WhatsApp" src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"/>
</a>

<a href="https://join.skype.com/invite/tvBbOq03j5Uu" target="_blank">
<img alt="Skype" src="https://img.shields.io/badge/SKYPE-%2300AFF0.svg?style=for-the-badge&logo=Skype&logoColor=white"/>
</a>

<br/>
<br/>
</div>
