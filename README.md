# nextjs-clean-setup-from-scratch

Next.js with a clean setup built from scratch, fully integrated with VS Code and Docker.

* Next.js
* Typescript
* Storybook
* Tailwind
* Yarn
* Jest
* ESLint
* Prettier
* Husky
* LintStaged
* Docker Compose
* .gitignore
* .vscode

## Running app

### A) Using VsCode

Just run `Launch Chrome for App`, and Chrome will open automatically.

### B) Using Docker Compose command line

```sh
$ docker-compose up nextjs_app
```

### C) Using Yarn command line

```sh
$ yarn dev
```
and hit http://localhost:3000.

## Running Storybook

### A) Using VsCode

Just run `Launch Chrome for Storybook`, and Chrome will open automatically.

### B) Using Docker Compose command line

```sh
$ docker-compose up nextjs_storybook
```

### C) Using command line

```sh
$ yarn storybook
```
and Chrome will open automatically.

## Running tests

```sh
$ yarn test:watch
```
or `yarn test` to run just once.
