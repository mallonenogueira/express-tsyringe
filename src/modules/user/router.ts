import Controller from "./controller";
import { RouterBuilder } from "../../router-builder";
import { Router } from "express";

export default new RouterBuilder(Controller)
  .get("/", "list")
  .post("/", "save")
  .put("/", "update")
  .delete("/", "delete")
  .build();
