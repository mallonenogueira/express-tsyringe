import "reflect-metadata";
import express from "express";
import { container } from "tsyringe";
import { RequestContainer } from "./types";
import UserSession from "./user-session";
const app = express();
import { v4 as uuid } from "uuid";
import routes from "./routes";

function middleCreateContainer(req: RequestContainer, res, next) {
  req.container = container.createChildContainer();

  next();
}

function middleUserSession(req: RequestContainer, res, next) {
  req.container.register(UserSession, {
    useValue: new UserSession(uuid()),
  });

  next();
}

app.use(middleCreateContainer);
app.use(middleUserSession);

routes(app);

app.listen(3000, () => {
  console.log(`Listening port: ${3000}`);
});
