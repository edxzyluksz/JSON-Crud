# Granularidade de Brawlers

## Descrição
Este projeto tem como objetivo fornecer uma API que retorna a granularidade de cada brawler no jogo Brawl Stars. A granularidade é uma medida que indica a quantidade de detalhes ou informações disponíveis sobre um brawler específico.

## Contextualização

Brawl Stars é um jogo de ação multiplayer desenvolvido pela Supercell. Cada brawler possui características únicas, habilidades e estatísticas que os tornam distintos uns dos outros. A granularidade de um brawler pode ser útil para jogadores que desejam entender melhor as nuances de cada personagem e tomar decisões informadas sobre quais brawlers usar em diferentes situações.

## Tipos de Brawlers (Chaves) Utilizadas

- "Algoz" - Brawlers que se destacam em causar dano rápido e eliminar inimigos rapidamente.
- "Destruidor" - Brawlers que possuem habilidades de destruição em massa, causando dano em área.
- "Tanque" - Brawlers que têm alta resistência e podem absorver muito dano, protegendo seus aliados.
- "Suporte" - Brawlers que possuem habilidades de cura, escudo ou outras formas de suporte para a equipe.
- "Sniper" - Brawlers que se destacam em causar dano a longo alcance com alta precisão.
- "Controlador" - Brawlers que possuem habilidades para controlar o campo de batalha, como congelar inimigos ou controlar seus movimentos.

## Elementos das classes

- Nome
- Raridade
- Vida
- Ataque
- Descrição
- Poder Estelar
- Descrição do Poder Estelar
- Estilo

Exemplo de um brawler:

```json
{
  "nome": "Pam",
  "raridade": "Épico",
  "vida": 4800,
  "ataque": "Sucata",
  "descricao": "Dispara vários projéteis espalhados.",
  "poder_estelar": "Mãe de Todos",
  "descricao_poder_estelar": "Cria um campo de cura que regenera a vida dos aliados dentro dele.",
  "estilo": "Suporte"
}
```

## Tecnologias usadas

[![Tecnologias Utilizadas](https://skillicons.dev/icons?i=json,nodejs,js&perline=13)](#)

## CRUD

Para manipular os dados contidos no arquivo `brawlers.json`, utilizamos as seguintes operações CRUD:

- Create (Criar): Adicionar um novo brawler ao arquivo JSON.
- Read (Ler): Ler os dados dos brawlers existentes no arquivo JSON.
- Update (Atualizar): Modificar as informações de um brawler existente no arquivo JSON.
- Delete (Excluir): Remover um brawler do arquivo JSON.

## Funções do código

