# Hello Express

This is a simple Express.js application that serves a "Hello" message at the root URL.

## Overview

This project is composed of:
- [Frontend App (Next.js)](app) - by default runs on `http://localhost:3000`
- [Server Actions (Next.js)](api) - to avoid CORS issues
- [Backend API (Express.js)](express)
- [Vitest](test)

and uses following env variables:
- `EXPRESS_PORT` - Port for the Express server (default: `3001`)
- `EXPRESS_HOST` - Host for the Express server (default: `http://localhost`)

## Features

Accessing `http://localhost:3000` will display a "Hello, Guest!" with your IP address message fetched from the Express backend.
Accessing `http://localhost:3000?name=YourName` display a "Hello, YourName!" instead.

## Setup

- Run `npm run dev` to start the development server.
- Run `npm run test` to execute tests.