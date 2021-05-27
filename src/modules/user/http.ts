import { injectable } from "tsyringe";
import UserSession from "../../user-session";

@injectable()
export default class Http {
  constructor(private session: UserSession) {}

  async list() {
    return {
      type: "List mock",
      token: this.session.token,
      data: [],
    };
  }

  async store() {
    return {
      type: "Store mock",
      token: this.session.token,
      data: {},
    };
  }

  async delete() {
    return {
      type: "Delete mock",
      token: this.session.token,
    };
  }
}
