import {Property} from "@tsed/common";
import {User} from "./user.entity";

export class LoginResponse {
  @Property()
  user: User;

  @Property()
  token: string;
}
