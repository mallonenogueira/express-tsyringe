import { Request } from "express";
import { DependencyContainer } from "tsyringe";

export type RequestContainer = Request & {
  container: DependencyContainer;
};
