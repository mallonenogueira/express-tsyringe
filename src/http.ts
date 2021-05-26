import { injectable } from "tsyringe";
import UserSession from "./user-session";

@injectable()
export default class Http {
  constructor(private session: UserSession) {}

  async listAll() {
    return {
      token: this.session.token,
      data: [],
    };
  }
}
