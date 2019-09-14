import {Docs, Returns} from "@tsed/swagger";
import {BodyParams, ContentType, Controller, Post} from "@tsed/common";
import {User} from "../models/user.entity";
import {LoginResponse} from "../models/auth.entitty";

@Controller("/auth")
@Docs("api-v1")
export class AuthController {
  @Post("/login")
  @ContentType("application/json")
  @Returns(LoginResponse)
  async login(@BodyParams() user: User) {
    return {
      user,
      token: "zayruiezyruzei"
    };
  }
}
