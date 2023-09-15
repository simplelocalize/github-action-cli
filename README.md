# SimpleLocalize GitHub Action

Action installs, configures, and runs the SimpleLocalize CLI with the version, command, and arguments of your choice.
By default, SimpleLocalize CLI tries to find the configuration file in the current directory (`./simplelocalize.yml`).

Learn more: https://simplelocalize.io/docs/cli/get-started/

The GitHub Action uses SimpleLocalize CLI that can be found here: https://github.com/simplelocalize/simplelocalize-cli


## Inputs

### `api-key`

The API key for SimpleLocalize. Default `""`.

Example: `${{ secrets.SIMPLELOCALIZE_API_KEY }}`

### `command`

**Required** The name of command to run. Default `"status"`.

Example: `upload`, `auto-translate`, `download`, `publish`, `pull`

Here you can find a full list of commands: https://github.com/simplelocalize/simplelocalize-cli#usage

### `cli-version`

**Required** The version of the SimpleLocalize CLI to use.
All available versions can be found here: https://github.com/simplelocalize/simplelocalize-cli/releases

Example: `2.5.0`

### `args`

The arguments for the command. Default `""`.

Example: `--uploadPath ./translations/{lang}.json --uploadFormat single-language-json`

# Example usage

The workflow below will upload translations, auto-translate them,
download translations, publish them and pull them to the hosting resources.

```yml
name: 'My project'
on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Upload translations
        uses: simplelocalize/github-action-cli@v2
        with:
          api-key: ${{ secrets.SIMPLELOCALIZE_API_KEY }}
          command: 'upload'
          cli-version: '2.5.0'
          args: '--uploadPath ./translations/{lang}.json --uploadFormat single-language-json --dryRun'
      - name: Auto-translate project
        uses: simplelocalize/github-action-cli@v2
        with:
          api-key: ${{ secrets.SIMPLELOCALIZE_API_KEY }}
          command: 'auto-translate'
          cli-version: '2.5.0'
      - name: Download translations
        uses: simplelocalize/github-action-cli@v2
        with:
          api-key: ${{ secrets.SIMPLELOCALIZE_API_KEY }}
          command: 'download'
          cli-version: '2.5.0'
          args: '--downloadPath ./translations/{lang}.json --downloadFormat single-language-json'
      - name: Publish translations
        uses: simplelocalize/github-action-cli@v2
        with:
          api-key: ${{ secrets.SIMPLELOCALIZE_API_KEY }}
          command: 'publish'
          cli-version: '2.5.0'
          args: '--environment latest'
      - name: Pull translations
        uses: simplelocalize/github-action-cli@v2
        with:
          api-key: ${{ secrets.SIMPLELOCALIZE_API_KEY }}
          command: 'pull'
          cli-version: '2.5.0'
          args: "--pullPath ./translation-hosting-resources/ --environment latest --filterRegex '_index.json'"
```

