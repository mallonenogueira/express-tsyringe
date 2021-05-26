import "reflect-metadata";
import express from "express";
import { container } from "tsyringe";
import { RequestContainer } from "./types";
import UserSession from "./user-session";
import Controller from "./controller";

// Global
// container.register("api", { useValue: { api: "api" } });

const app = express();

function middleCreateContainer(req: RequestContainer, res, next) {
  req.container = container.createChildContainer();

  next();
}

function generateToken() {
  const meta = generateToken as { index?: number };

  if (!meta.index) {
    meta.index = 0;
  }

  return meta.index++;
}

function middleUserSession(req: RequestContainer, res, next) {
  req.container.register(UserSession, {
    useValue: new UserSession(`token ${generateToken()}`),
  });

  next();
}

function timeout(time: number) {
  return (req, res, next) => setTimeout(next, time);
}

app.use(middleCreateContainer);
app.use(middleUserSession);

app.get("/", new Controller().show);

app.get("/timeout", timeout(5000), new Controller().show);

app.listen(3000, () => {
  console.log(`Listening port: ${3000}`);
});
