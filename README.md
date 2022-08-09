<div align='center'>

![logo](https://user-images.githubusercontent.com/76097144/183746122-c81b7d5b-d33c-4e7b-af0f-452e3fcf78ce.png)

</div>

## About

[yoursanonymously](https://yoursanonymously.space) is an open-source platform for sending and receiving anonymous confessions! Each user can create a unique link to which others could send anonymous messages! [Start receiving confessions and messages &rarr;](https://yoursanonymously.space)

### Contributing Guide

1. Fork this [repository](https://github.com/zaidmukaddam/yoursanonymously) and clone your fork.
2. Create a new branch for your changes:

```sh
$ cd your_cloned_fork
$ git checkout dev
$ git checkout -b my-new-branch
```

3. Create a `.env` in `apps/web` file with this content:

> Adjust the DATABASE_URL to your local MySQL database. [Guide &rarr;](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-typescript-mysql)

```sh
DATABASE_URL="mysql://johndoe:randompassword@localhost:3306/mydb"
NEXT_PUBLIC_GQL_ENDPOINT="http://localhost:3000/api/graphql"

NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="mysupersecretkey"
```

4. Create a `.env` in `packages/db` file with this content:

```sh
DATABASE_URL="mysql://johndoe:randompassword@localhost:3306/mydb"
```

5. Sync database schema:

```sh
yarn workspace @yoursanonymously/db prisma db push
```

> Or run a migration. [Guide &rarr;](https://www.prisma.io/docs/concepts/components/prisma-migrate)

6. To run locally:

```sh
# Only use yarn as your package manager
$ yarn
$ yarn dev
```

7. Commit your changes and push your branch:

```sh
$ git add .
$ git commit -m "chore: some changes"
$ git push origin HEAD
```

8. Submit a pull request on the `dev` branch. (resolve conflicts if present)

## License

Licensed under the [GPL-3.0 license](https://github.com/zaidmukaddam/yoursanonymously/blob/main/LICENSE).
