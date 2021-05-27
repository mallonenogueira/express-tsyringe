import { Router, IRouter } from "express";
import { RequestContainer } from "./types";

export class RouterBuilder<T, K extends keyof T> {
  constructor(
    private controller: { new (...args): T },
    private router: IRouter = Router()
  ) {}

  build = () => this.router;

  get = (path: string, method: K) => this.handler("get", path, method);

  post = (path: string, method: K) => this.handler("post", path, method);

  put = (path: string, method: K) => this.handler("put", path, method);

  delete = (path: string, method: K) => this.handler("delete", path, method);

  private handler(field: string, path: string, method: K) {
    this.router[field](path, (req: RequestContainer, res) =>
      this.callController(req, res, method)
    );

    return this;
  }

  private callController(req: RequestContainer, res, method: K) {
    const controller = req.container.resolve(this.controller) as any;

    controller[method](req, res);
  }
}
