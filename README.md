![Human Rights First logo](https://i.imgur.com/OatRXYf.png)

You can learn more about Human Rights First [HERE](https://www.humanrightsfirst.org/)

### Tech Stack Used

- Javascript
- NodeJS with ExpressJS framework
- npm
- PostgreSQL

### Environment Variables

- `PORT` - API port (optional, but helpful with FE running as well)
    - The following ports are whitelisted for use with Okta
        - 3000
        - 8000
        - 8080
- `DS_API_URL` - URL to a data science API
- `DS_API_TOKEN` - SECRET authorization header token for data science API
- `DATABASE_URL` - connection string for postgres database
- `OKTA_URL_ISSUER` - The complete issuer URL for verifying Okta access tokens.
  `https://example.okta.com/oauth2/default`
- `OKTA_CLIENT_ID` - the Okta client ID.

See .env.sample for example values

<br>

# Interested in Contributing?

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

<br>

## Installation

- Fork and clone the repo to install it as your own remote.
  - **note** please [be sure to set your remote](https://help.github.jp/enterprise/2.11/user/articles/changing-a-remote-s-url/) for this repo to point to your Labs Team Front End Repository.
- run: `npm install` to download all dependencies.
- Create your `.env` file and update it with the environment variables you will have received from this product's Release Manager.
- Open up pgAdmin 4 or your PostgreSQL GUI of choice
- Create a new database
- Update your `DATABASE_URL` environment variable to match the name you gave your local database and your pgAdmin4 password.
- run: `npm run migrate` to create the starting schema.
- run: `npm run seed` to populate your db with some data.
- run: `npm run tests` to confirm all is setup and tests pass.
- run: `npm run watch:dev` to start nodemon in local dev environment.

<br>


## API Documentation:

- To see the shape of the data navigate into the `test` folder then into the 
  `snapshots` folder.

#### Authentication:

| Method   | URL                | Description                                                                                            |
| ------   | --------------     | ------------------------------------------------------------------------------------------------------ |
| [POST]   | /api/auth/login    | Requires a username and password. Logs the user in and handled by Okta.                                                    |

#### Profiles:

| Method   | URL                | Description                                                                                            |
| ------   | --------------     | ------------------------------------------------------------------------------------------------------ |
| [GET]    | /api/profile/ or /api/profiles        | Returns an array filled with user objects.                                                             |
| [GET]    | /api/profile/:id     | Returns the user object with the specified `id`.                                                       |
| [POST]    | /api/profile/     | Returns the user object with the specified `id`.                                                      
| [PUT]    | /api/users/:id     | Updates the user with the specified `id` using data from the `request body`. Returns the modified user and a success message.
| [DELETE] | /api/users/:id     | Removes the user with the specified `id` and returns the deleted user and a success message.                                 |
#### Admins:

| Method   | URL                 | Description                                                                                                    |
| ------   | --------------      | ---------------------------------------------------------------------------------------------------------      |
| [GET]    | /api/admins        | Returns an array of admin objects. |
| [GET]    | /api/admins/:adminId        | Returns an admin object based on `adminId`. |
| [POST]   | /api/admins        | Creates a new admin object from an existing profile.                                               |


#### Bookmarks:

| Method   | URL                        | Description                                                                                                 |
| ------   | --------------             | ---------------------------------------------------------------------------------------------------------   |
| [GET]    | /api/bookmarks     | Returns an array of bookmark objects, including a unique bookmarkId, id (the user's id), and fileId                                                    |
| [POST]   | /api/bookmarks/:fileId     | Requires a `fileId` and `id` (user's id). Adds a bookmark object to the bookmarks table.               |
| [DELETE] | /api/bookmarks/:fileId     | Requires a `fileId`and the user's `id` Removes the bookmark with the specified `fileId` from the bookmarks table.       |


### Setup postgres

There are 3 options to get postgresql installed locally [Choose one]:

1. Use docker. [Install](https://docs.docker.com/get-docker/) for your platform
    - run: `docker-compose up -d` to start up the postgresql database and pgadmin.
    - Open a browser to [pgadmin](http://localhost:5050/) and you should see the Dev
      server already defined.
    - If you need to start over you will need to delete the folder `$ rm -rf ./data/pg` as
      this is where all of the server data is stored.
        - if the database `api-dev` was not created then start over.
2. Download and install postgresql directly from
   the [main site](https://www.postgresql.org/download/)
    - make note of the port, username and password you use to setup the database.
    - Connect your client to the server manually using the values previously mentioned
    - You will need to create a database manually using a client.
    - Make sure to update the DATABASE_URL connection string with the values for
      username/password, databasename and server port (if not 5432).
3. Setup a free account at [ElephantSQL](https://www.elephantsql.com/plans.html)
    - Sign up for a free `Tiney Turtle` plan
    - copy the URL to the DATABASE_URL .env variable
    - make sure to add `?ssl=true` to the end of this url
    
## Contributors

#### LABS FT 41

[Klove Adams](https://github.com/Klove-A)

[Michael Greenwald](https://github.com/mgreenwaldm)

[Mason Mostella](https://github.com/MMostella)

[Dominick Sallustro](https://github.com/dominthebox)

[Michael Steiner](https://github.com/steinmikey)

[Christina Yun](https://github.com/christina-yun)

#### LABS FT 40

