# Welcome to Github Explorer Mobile

Project directed to the study of clean architecture applied in a React Native application.

## Proposal

It is an application to search for information about users registered on Github, to be able to see their repositories, their gists, their followers and who they are following. You can also view information specific to repositories, gists and other followers.

# :pushpin: Sumary

- :construction_worker: [Installation](#:construction_worker:-instalação)
- :gear: [Test e2e with Detox](#:open_file_folder:-diretórios)
- :open_file_folder: [Architecture](#:open_file_folder:-diretórios)

# :construction_worker: Installation

**You must have [NodeJS](https://nodejs.org/) (>= 10.13.0) and [Yarn](https://yarnpkg.com/) installed, and then:**

`git clone https://github.com/rubemfsv/Github-Explorer-Mobile-Clean-Architecture.git`

First step:

`cd Github-Explorer-Mobile-Clean-Architecture` - to access the project folder

Second step:

`yarn` - to install dependencies

Third step:

`yarn start` - to start the project

Fourth step:

`yarn android` or `yarn ios` - to install the project in the emulator

# :gear: Test e2e with Detox

First Step:

Adjust your emulator inside `detox.config.js` changing the device `avdName`

Second Step:

`cd android` - to access the android folder

Third Step:
run `./gradlew assembleAndroidTest`

Fourth Step:
run `yarn detox:debug` to execute the tests

## :open_file_folder: Architecture

```
android/
e2e/
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
