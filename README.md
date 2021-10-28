# Basic Node API Scaffold

Welcome to your `Basic Node API Repository`. Use this to start your own Greenfield Project using nodejs, express and common industry standards.

This repository assumes a handful of industry practices and standards. We strive to keep you on the bleeding edge of the industry and as a result, we have made some opinions for you so that you don't have to; you're welcome.

Read more at <https://docs.labs.lambdaschool.com/labs-api-strarter/>

[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=labs-api-starter&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=labs-api-starter)

## Requirements

Labs teams must follow all [Labs Engineering Standards](https://labs.lambdaschool.com/topics/node-js/).

## Getting Started

### Enviornment Variables

- `PORT` - API port (optional, but helpful with FE running as well)
  - The following ports are whitelisted for use with okta
    - 3000
    - 8000
    - 8080
- `DS_API_URL` - URL to a data science api. (eg. <https://ds-bw-test.herokuapp.com/>)
- `DS_API_TOKEN` - authorization header token for data science api (eg. SUPERSECRET)
- `DATABASE_URL` - connection string for postgres database
- `OKTA_URL_ISSUER` - The complete issuer URL for verifying okta access tokens. `https://example.okta.com/oauth2/default`
- `OKTA_CLIENT_ID` - the okta client ID.

See .env.sample for example values

### Setup postgres

There are 3 options to get postgresql installed locally [Choose one]:

1. Use docker. [Install](https://docs.docker.com/get-docker/) for your platform
    - run: `docker-compose up -d` to start up the postgresql database and pgadmin.
    - Open a browser to [pgadmin](http://localhost:5050/) and you should see the Dev server already defined.
    - If you need to start over you will need to delete the folder `$ rm -rf ./data/pg` as this is where all of the server data is stored.
      - if the database `api-dev` was not created then start over.
2. Download and install postgresql directly from the [main site](https://www.postgresql.org/download/)
    - make note of the port, username and password you use to setup the database.
    - Connect your client to the server manually using the values previously mentioned
    - You will need to create a database manually using a client.
    - Make sure to update the DATABASE_URL connection string with the values for username/password, databasename and server port (if not 5432).
3. Setup a free account at [ElephantSQL](https://www.elephantsql.com/plans.html)
    - Sign up for a free `Tiney Turtle` plan
    - copy the URL to the DATABASE_URL .env variable
    - make sure to add `?ssl=true` to the end of this url

### Setup the application

- create your project repo by forking or using this as a template.
- run: `npm install` to download all dependencies.
- run: `cp .env.sample .env` and update the enviornment variables to match your local setup.
- run: `npm run knex migrate:latest` to create the starting schema.
- run: `npm run knex seed:run` to populate your db with some data.
- run: `npm run tests` to confirm all is setup and tests pass.
- run: `npm run watch:dev` to start nodemon in local dev enviornment.

> Make sure to update the details of the app name, description and version in
> the `package.json` and `config/jsdoc.js` files.

### API Documentation:
_Everything beyond this point is a placeholder until HRF BE crew says otherwise_
#### Users:
[GET] /api/users - returns an array filled with user objects similar to the following:
```js
[
  {
        user_id: 1,
        username: "fred",
        password: "$2a$08$R//PP9zaFmo5t3RYL4Yh0ONj.68YU2UQ5HlXbt8TbD.WHFMweWCsG",
        name: "Fred",
        email: "fred@test.com"
    },
    {
        user_id: 2,
        username: "shaggy",
        password: "$2a$08$6TceWJyijzXrBAQlP.ZsW.o1y1MmmfJaCb3GPlJ.LnC3eYKtiWbzK",
        name: "Shaggy",
        email: "shaggy@test.com"
    }
]
```

#### Authentication:
| Method   | URL                | Description                                                                                            |
| ------   | --------------     | ------------------------------------------------------------------------------------------------------ |
| [POST]   | /api/auth/register | Requires a username, password, name, and email. Registers a new user.                                  |
| [POST]   | /api/auth/login    | Requires a username and password. Logs the user in.                                                    |

#### Users:
| Method   | URL                | Description                                                                                            |
| ------   | --------------     | ------------------------------------------------------------------------------------------------------ |
| [GET]    | /api/users/        | Returns an array filled with user objects.                                                             |
| [GET]    | /api/users/:id     | Returns the user object with the specified `user_id`.                                                       |
| [DELETE] | /api/users/:id     | Removes the user with the specified `user_id` and returns the deleted user.                                 |
| [PUT]    | /api/users/:id     | Updates the user with the specified `user_id` using data from the `request body`. Returns the modified user |

#### Events:
| Method   | URL                 | Description                                                                                                    |
| ------   | --------------      | ---------------------------------------------------------------------------------------------------------      |
| [POST]   | /api/events/        | Requires `organizer_id`, `title`, `date` (in the format of mm/dd/yyyy), `time` (in the format of 03:00), and a `location`.  Returns the event object with the specified `event_id`.                                               |
| [GET]    | /api/events/        | Returns an array filled with event objects.                                                                    |
| [GET]    | /api/events/:id     | Returns the event object with the specified `event_id`.                                                        |
| [DELETE] | /api/events/:id     | Removes the event with the specified `event_id` and returns the deleted event.                                 |
| [PUT]    | /api/events/:id     | Updates the event with the specified `event_id` using data from the `request body`. Returns the modified event |

#### Guests:
| Method   | URL                        | Description                                                                                                 |
| ------   | --------------             | ---------------------------------------------------------------------------------------------------------   |
| [GET]    | /api/events/:id/guests     | Returns an array filled with guests attending the event.                                                    |
| [POST]   | /api/events/:id/guests     | Requires a `user_id` and a boolean of `attending` (true or false). Adds a guest to the event.               |
| [DELETE] | /api/events/:id/guests     | Requires `user_id` Removes the guest with the specified `user_id` and returns the new list of guests.       |

#### Items:
| Method   | URL                       | Description                                                                                                  |
| ------   | --------------            | ---------------------------------------------------------------------------------------------------------    |
| [GET]    | /api/events/:id/items     | Returns an array filled with items for the event.                                                            |
| [POST]   | /api/events/:id/items     | Requires an `item_name` and a `name` (name of the person bringing the item) and adds the new item to the list of items                                              |
| [DELETE] | /api/events/:id/items     | Requires `item_name` Removes the item with the specified `item_name` and returns the new list of items.      |

## Contributing

See the [contributing doc](https://github.com/Lambda-School-Labs/labs-api-starter/blob/main/CONTRIBUTING.md)
for more info.
