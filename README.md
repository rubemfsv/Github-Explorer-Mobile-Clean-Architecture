# Welcome to Github Explorer Mobile

Project directed to the study of clean architecture applied in a React Native application.
## Proposal

Be an application to search for information about users registered on Github, to be able to see their repositories, their gists, their followers and who they are following. You can also view information specific to repositories, gists and other followers.

# :pushpin: Sumary

- :pushpin: [Start](#:pushpin:-tabela-de-conteúdos)
- :construction_worker: [Installation](#:construction_worker:-instalação)
- - :open_file_folder: [Architecture](#:open_file_folder:-diretórios)

# :construction_worker: Instalação

**You must have [NodeJS](https://nodejs.org/) (>= 10.13.0) and [Yarn](https://yarnpkg.com/) installed, and then:**

`git clone https://github.com/rubemfsv/Github-Explorer-Mobile-Clean-Architecture.git`

First step:

`cd Github-Explorer-Mobile-Clean-Architecture` - to access the project folder

Second step:

`yarn` - to install dependencies

Third step:

`yarn start` - to start the project

Fourth step:

`yarn android` or `yarn ios`  - to install the project in the emulator

## :open_file_folder: Architecture

```
android/
ios/
src/
  data/
    protocols/
    test/
    usecases/
  domain/
    enums/
    errors/
    models/
    test/
    usecases/
  infra/
    cache/
    http/
    test/
  main/
    config/
    factories/
      http/
      screens/
      usecases/
    routes/
    App.tsx
  presentation/
    assets/
    components/
    screens/
    protocols/
    styles/
    utils/
  validation/
    errors/
    protocols/
    test/
    validators/
```
