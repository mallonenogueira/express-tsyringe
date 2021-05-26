import { injectable } from "tsyringe";
import Http from "./http";

@injectable()
export default class Service {
  constructor(private http: Http) {}

  execute() {
    return this.http.listAll();
  }
}
