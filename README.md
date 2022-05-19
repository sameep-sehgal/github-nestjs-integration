## Description

A Github OAuth App that creates new repository in your Github Account.

- Login to the app using your Github account & grant repository access.
- After logging in, specify name & click on Create Repository Button to create a new repository in your account.

## Installation

```bash
#Clone Repository
$ git clone https://github.com/sameep-sehgal/truefoundary-assignment.git

#Change Directory to project
$ cd truefoundary-assignment

#Install dependencies
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode {Automatically restart server whenever a change in a src file is saved}
$ npm run start:dev
```

## Key Features of the app
- User logs in to the app using their Github Account. The Github OAuth flow is handled using Passport library.
- After successful completion of OAuth flow, Github returns an Access Token which the application can use to make request on behalf of the user {Create new repository in user's Github Account}.
- This token is stored in SQLite DB along with some other user info like username & profile URL. Used Sequelize as ORM for DB.
- Session-Based Authentication is used. User sessions are also stored in SQLite database at the backend.
- Backend generates a cookie on successful login & returns to the user. This cookie can be used to identify user on subsquent requests.
- User Session & the cookie expires in 30 days. Sessions are removed from the DB when they expire or the user logs out.