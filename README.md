[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
# Welcome to Github Explorer Mobile

Project directed to the study of clean architecture applied in a React Native application.

## Proposal

It is an application to search for information about users registered on Github, to be able to see their repositories, their gists, their followers and who they are following. You can also view information specific to repositories, gists and other followers.

# :pushpin: Sumary

- :construction_worker: [Installation](#:construction_worker:-instalação)
- :gear: [Test e2e with Detox](#:open_file_folder:-diretórios)
- :open_file_folder: [Architecture](#:open_file_folder:-diretórios)
- :page_facing_up: [License](#page_facing_up-license)

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

# :technologist: Contributors

Thanks to these wonderful people who have contributed in this project ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/rubemfsv"><img src="https://avatars.githubusercontent.com/u/11760617?v=4" width="100px;" alt="Rubem Vasconcelos"/><br /><sub><b>Rubem Vasconcelos</b></sub></a><br /> <a href="#maintenance-rubemfsv" title="Maintenance">🚧</a><a href="https://github.com/rubemfsv/Github-Explorer-Mobile-Clean-Architecture/commits?author=rubemfsv" title="Code">💻</a><a href="https://github.com/rubemfsv/Github-Explorer-Mobile-Clean-Architecture/pulls?q=is%3Apr+reviewed-by%3Arubemfsv" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.biodrop.io/jfmartinz"><img src="https://avatars.githubusercontent.com/u/129386460?v=4" width="100px;" alt="Joseph Martin"/><br /><sub><b>Joseph Martin</b></sub></a><br /><a href="https://github.com/rubemfsv/Github-Explorer-Mobile-Clean-Architecture/commits?author=jfmartinz" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://bkpecho.tech/"><img src="https://avatars.githubusercontent.com/u/91954699?v=4" width="100px;" alt="Bryan King Pecho"/><br /><sub><b>Bryan King Pecho</b></sub></a><br /><a href="https://github.com/rubemfsv/Github-Explorer-Mobile-Clean-Architecture/commits?author=bkpecho" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ghOst-vedant"><img src="https://avatars.githubusercontent.com/u/71282147?v=4" width="100px;" alt="Vedant"/><br /><sub><b>Vedant</b></sub></a><br /><a href="https://github.com/rubemfsv/Github-Explorer-Mobile-Clean-Architecture/commits?author=ghOst-vedant" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://theamazingatharva.hashnode.dev/"><img src="https://avatars.githubusercontent.com/u/121221252?v=4" width="100px;" alt="Atharva Salitri"/><br /><sub><b>Atharva Salitri</b></sub></a><br /><a href="https://github.com/rubemfsv/Github-Explorer-Mobile-Clean-Architecture/commits?author=the-amazing-atharva" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/manviii27"><img src="https://avatars.githubusercontent.com/u/91899444?v=4" width="100px;" alt="Manvi Haritwal"/><br /><sub><b>Manvi Haritwal</b></sub></a><br /><a href="https://github.com/rubemfsv/Github-Explorer-Mobile-Clean-Architecture/commits?author=manviii27" title="Documentation">📖</a></td>
    </tr>
  </tbody>
</table>


<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

# :page_facing_up: License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Please adhere to and review our [Code Of Conduct](https://github.com/rubemfsv/Github-Explorer-Mobile-Clean-Architecture/blob/add-code-of-conduct/CODE_OF_CONDUCT.md).
