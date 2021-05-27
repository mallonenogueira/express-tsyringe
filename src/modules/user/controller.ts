import { Response, Request } from "express";
import { injectable } from "tsyringe";
import Service from "./service";

@injectable()
export default class Controller {
  constructor(private service?: Service) {}

  async list(req: Request, res: Response) {
    const data = await this.service.list();

    res.json(data);
  }

  async save(req: Request, res: Response) {
    const data = await this.service.store();

    res.json(data);
  }

  async update(req: Request, res: Response) {
    const data = await this.service.store();

    res.json(data);
  }

  async delete(req: Request, res: Response) {
    const data = await this.service.delete();

    res.json(data);
  }
}
