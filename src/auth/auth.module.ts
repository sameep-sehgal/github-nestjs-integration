import { Module } from "@nestjs/common";
import { UserModule } from "src/user/user.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { GithubStrategy } from "./utils/github.strategy";
import { SessionSerializer } from "./utils/session.serializer";

@Module({
    imports: [UserModule],
    controllers: [AuthController],
    providers: [SessionSerializer, AuthService, GithubStrategy],
  })
export class AuthModule {}