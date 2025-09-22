import {Router} from "express";
import express from "express";

const ROUTER = Router();
const APP = express();
const PORT = process.env.EXPRESS_PORT || 3001;

ROUTER.get("/hello", (req, res) => {
  const name = (req.query.name ?? "Guest").toString().trim();
  res.type("text/plain").send(`Hello, ${name}!`);
});

ROUTER.get("/ip", (req, res) => {
  const ip = req.ip;
  res.type("text/plain").send(`Your IP address is ${ip}`);
});

// This is not a React hook, suppress the lint warning
// eslint-disable-next-line react-hooks/rules-of-hooks
APP.use(ROUTER);
APP.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});