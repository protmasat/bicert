#!/bin/bash

# create backend folder
# allow user to name for the backend folder and frontend

touch LICENSE README.md

mkdir logic

# create frontend folder
mkdir client

# create docs foldee
mkdir docs

# create .gitignore file
touch .gitignore

# get into logic folder and npm init
cd logic

touch .gitignore

touch .env .env.example
# insert text into .env

npm init -y

# install packages
npm i express dotenv mongoose

touch server.js

# setup project structure
mkdir config middleware routes models utils services

# cd into config then create file

# inserting into package.json also: nstart: ode server.js, dev: nodemon server.js
cat << 'EOF' >> server.js

const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

app.use(express.json());

app.disable("x-powered-by");

const PORT = process.env.PORT || "3410";

app.get("/", (req, res) => {
  res.status(200).json({
    sucess: true,
    message: "Everything working well",
  });
});

app.use("/", (req, res) => {
  res.status(200).json({
    sucess: true,
    message: "Try a different path",
  });
});

app.use((req, res, err, next) => {
  res.status(500).json({
    sucess: false,
    message: "Internal server error",
  });
});

app.listen(PORT, () => {
  console.log(`Listening at: http://localhost:${PORT}/`);
});
EOF

cat << 'EOF' >> .env
PORT=3410

MONGO_URI=
EOF

cd config && touch ConnectDB.js

cat << 'EOF >> ConnectDB.js

const mongoose = require("mongoose");

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("database connected");
  } catch (error) {
    console.error("Failed to connect to database");
    process.exit(-1);
  }
};

module.exports = ConnectDB;
EOF

: '
comment will be here
steps
1. get into the folder
2. ask user for the name of backend folder, frontend folder and docs folder
3. get into logic folder npm init, then installa packages
4. create server.js: add source into it minimal
5. setup project structure
'

# setup into DB.js