# Backend Important Packages

## Initialize Project

```bash id="pmvfq2"
npm init -y
```

Creates `package.json`

---

## Express

```bash id="5c7vdn"
npm i express
```

Used to create server and APIs.

---

## Nodemon

```bash id="h0qsmx"
npx nodemon server.js
```

Automatically restarts the server after code changes.

---

## Mongoose

```bash id="cuzphj"
npm i mongoose
```

Used to connect MongoDB with Node.js.

---

## Dotenv

```bash id="dr0mcl"
npm i dotenv
```

Used to access `.env` variables.

---

## CORS

```bash id="mf6q3k"
npm install cors
```

Used to prevent CORS errors between frontend and backend.

In `app.js`:

```js id="6m6w9j"
const cors = require("cors");
```

---

## JSON Web Token

```bash id="wyq8u7"
npm i jsonwebtoken
```

Used to create authentication tokens.

---

## Cookie Parser

```bash id="j0y9r8"
npm i cookie-parser
```

Used to handle cookies.

---

## BcryptJS

```bash id="pw74o0"
npm i bcryptjs
```

Used for password hashing.
