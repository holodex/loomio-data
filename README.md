# holodex/loomio-data

[micro-service to serve Loomio data as agents and relationships](https://github.com/open-app/holodex/issues/76)

## install

```
git clone https://github.com/holodex/loomio-data
cd loomio-data
npm install
npm start
```

## scripts

### start

start the server, by default on port 5000

```
npm start
```

### test

run the [`ava`](https://www.npmjs.com/package/ava) tests

```
npm test
```

### dev

start the server with `NODE_ENV=development` and automatic reloading on code changes

```
npm run dev
```

### prod

start the server with `NODE_ENV=production`

```
npm run prod
```
