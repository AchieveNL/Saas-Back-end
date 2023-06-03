# Introduction

This is a backend application that generates images based on user prompts. It uses a machine learning model and a collection of data to create unique images tailored to user input.This application generates only one image based on the user prompt. It uses Open AI Dall-E APIs for Image generation.

## How to use in Local Setup?

1. Install [node js](https://nodejs.org/en/download)
2. Generate an API KEY at [OpenAI](https://beta.openai.com/) and add it to the `.env` file.
3. Install the dependencies

```bash
npm install
```

* Start the server

```bash
npm start
```

* Visit `http://localhost:5000` in your browser.
* The endpoint is at `POST http://localhost:5000/openai/generateimage`.