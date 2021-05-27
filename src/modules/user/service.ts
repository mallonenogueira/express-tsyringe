import { injectable } from "tsyringe";
import Http from "./http";

@injectable()
export default class Service {
  constructor(private http: Http) {}

  list() {
    return this.http.list();
  }

  store() {
    return this.http.store();
  }

  delete() {
    return this.http.delete();
  }
}
