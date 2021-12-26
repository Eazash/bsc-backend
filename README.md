# AASTU BSCS Backend

## Install Dependencies

Package Manager to use will be [yarn](https://yarnpkg.com/). _Please don't use npm as it will cause a conflict_. Inside the project folder, run:

```
yarn
```

## Setup

Before running the server, make sure the following are complete

- Postgres database server is running
- The following env vairables are present in a `.env` file
  - _POSTGRES_HOST_ - Host of your database server (equal to `127.0.0.1` or `localhost` in development)
  - _POSTGRES_USER_ - Your Postgres `username`
  - _POSTGRES_PASSWORD_ - Your Postgres `password`
  - _POSTGRES_DATABASE_ - Database `name` to use
  - _POSTGRES_PORT_ - Port postgres database is running on (often `5432`)
  - _PORT_ - Port the server will run on (defaults to `3000`)

## Start Server

Once the above listed procedures are complete, run:

```
yarn start:dev
```
