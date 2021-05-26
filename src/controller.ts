import { Request, Response } from "express";
import Service from "./service";
import { RequestContainer } from "./types";

export default class Controller {
  async show(req: RequestContainer, res: Response) {
    const data = await req.container.resolve(Service).execute();

    res.json(data);
  }
}
