# Jokes API

This API is developed using [NestJS](https://nestjs.com/). It gets dad and Chuck Norris jokes from respectively [https://icanhazdadjoke.com/](https://icanhazdadjoke.com/) and  [https://api.chucknorris.io/](https://api.chucknorris.io/).

The API routes are :

| HTTP method | Route        |
|-------------|--------------|
| GET         | /dad-jokes   |
| GET         | /chuck-jokes |
| GET         | /version     |

### Installation

Be sure to install the ` libssl-dev` library :

```bash
$ sudo apt-get install libssl-dev
```

Then run this command :

```
$ npm install
```

OR with Docker

```bash
docker build -t joke-api .
```

### Start

```bash
$ npm run start
```

OR with Docker

```bash
docker run -p 3000:3000 joke-api
```

### Configuration

| Environment variable  | Default value                           |
|-----------------------|-----------------------------------------|
| DAD_JOKES_API         | https://icanhazdadjoke.com              |
| CHUCK_JOKES_API       | https://api.chucknorris.io/jokes/random |