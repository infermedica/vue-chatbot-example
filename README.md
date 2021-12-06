# Vue Chatbot Example
This is an example of a chatbot application based on Vue + Vite + Pinia.

The application utilizes [Infermedica API](https://developer.infermedica.com/) for natural language processing, diagnosis, asking further questions, and returning triage level.

The purpose of this project is to be an example of how to use Infermedica API. It is created to be implemented as a simple chatbot that can be embedded on a website. 

Do not hesitate to contact us if you need any further [help](mailto:contact@infermedica.com).

## Dependencies

Before proceeding to the next steps, please make sure that you have [`node`](https://nodejs.org/en/docs/) installed in your system.
Please refer to the docs to find out the most suitable way depending on your OS.

The project uses `npm` as a dependency manager. If you have installed node `npm` is a part of node.

The next steps assume that you have `node` and `npm` installed.

## Getting started

First of all, you have to obtain your own app-id and app-key from [developer portal](https://developer.infermedica.com/signup).
You will need to paste these into the .env file that you have to create or insert them into the .env.example and change its name to .env.

### Installing dependencies with npm

Please go to the root directory and type in terminal
`npm install`

### Running the app in development mode
`npm run dev`

### Preparing a production-ready build
`npm run build`

### Lints and fixes files
`npm run lint`