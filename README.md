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

### Setup the application

- create your project repo by forking or using this as a template.
- run: `npm install` to download all dependencies.
- run: `cp .env.sample .env` and update the environment variables to match your local
  setup.
- run: `npm run migrate` to create the starting schema.
- run: `npm run seed` to populate your db with some data.
- run: `npm run tests` to confirm all is setup and tests pass.
- run: `npm run watch:dev` to start nodemon in local dev environment.
<br />
<br />
<p style="padding: 0; margin: 0; font-size: 2rem; text-align: center; font-family: 
monospace; 
font-weight: bold;color: 
red">Starting here is a placeholder until HRF BE crew says otherwise</p>

## API Documentation:

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
| [PUT]    | /api/users/:id     | Updates the user with the specified `id` using data from the `request body`. Returns the modified user and a success message. |

| [DELETE] | /api/users/:id     | Removes the user with the specified `id` and returns the deleted user and a success message.                                 |
#### Admins:

| Method   | URL                 | Description                                                                                                    |
| ------   | --------------      | ---------------------------------------------------------------------------------------------------------      |
| [POST]   | /api/admins/        | Creates a new admin object from an existing profile.                                               |
| [GET]    | /api/admins/:adminId/        | Returns an admin object based on `adminId`.                                                                    |

#### Bookmarks:

| Method   | URL                        | Description                                                                                                 |
| ------   | --------------             | ---------------------------------------------------------------------------------------------------------   |
| [GET]    | /api/events/:id/guests     | Returns an array filled with guests attending the event.                                                    |
| [POST]   | /api/events/:id/guests     | Requires a `user_id` and a boolean of `attending` (true or false). Adds a guest to the event.               |
| [DELETE] | /api/events/:id/guests     | Requires `user_id` Removes the guest with the specified `user_id` and returns the new list of guests.       |


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
    
## Contributing
See the [contributing doc](https://github.com/Lambda-School-Labs/labs-api-starter/blob/main/CONTRIBUTING.md) for more info.
