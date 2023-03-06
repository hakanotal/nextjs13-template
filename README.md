## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn dev

# build
$ yarn build

# production mode
$ yarn start
```

## Docker

```bash
# build image
$ docker build -t web-ui .

# run container
$ docker run -p 3000:3000 --name web-ui web-ui

```