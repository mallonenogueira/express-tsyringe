import { Application } from "express";
import userRouter from "./modules/user/router";

export default function (app: Application) {
  app.use("/users", userRouter);
}
