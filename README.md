# FLASHCARDS

FlashCards é um aplicativo para dispositivos móveis (Android/iOS que permite que usuários estudem uma coleção de flashcards. Com o app, os usuários poderão criar diferentes categorias de flashcards chamadas de "baralhos", adicionar flashcards a esses baralhos, e fazer os quizes nestes baralhos. O usuário poderá conferir quantas perguntas acertou no quiz. 

### Instalando

```
clone git https://github.com/gilmarvoge/flashcards.git

#para aplicação
-cd flashcards
-yarn install
-yarn start
-Abrir app em um emulador, por exemplo Expo, pressione "q" e irá abrir um QR code, abra o Expo em seu smarphone e leia o QR code.
```

### Funcionalidades (requisitos do projeto)
- Utilize o create-react-native-app para construir seu projeto.
- Permita que usuários criem um baralho que poderá conter um número ilimitado de cartões.
- Permita que usuários adicionem um cartão a um específico baralho.
- A frente do cartão pode exibir uma pergunta ou questão.
- A traseira do cartão deve exibir a resposta.
- Os usuários devem estar aptos a se testarem em um baralho específico e receberem uma pontuação quando eles concluírem o baralho.
- Os usuários devem receber uma notificação para lembrá-los de estudar, caso eles não tenham feito isso no dia.
- Aplicação deve possuir, no mínimo, cinco views.
    - View da lista de baralhos (View padrão)
    - View de um baralho individual
    - View do quiz
    - View do novo baralho
    - View de nova pergunta