// Simple example backend
// Always use proxy backend to hide your APP_KEY and APP_ID
import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import { config } from "dotenv";

config();

const server = express();
server.use(cors());
server.listen(process.env.PORT, () =>
  console.log("Server is listening on port: " + process.env.PORT)
);

server.all("*", ({ originalUrl, body, method }, res) => {
  const options = {
    method,
    headers: {
      "content-type": "application/json",
      "App-Id": process.env.APP_ID,
      "App-Key": process.env.APP_KEY,
    },
    body: JSON.stringify(body),
  };
  fetch("https://api.infermedica.com/v3" + originalUrl, options)
    .then((response) => response.json())
    .then((response) => res.json(response));
});
