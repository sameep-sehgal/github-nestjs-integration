import { Module } from "@nestjs/common";
import { UsersProviders } from "./users.provider";

@Module({
    imports: [],
    controllers: [],
    providers: [...UsersProviders],
    exports: [...UsersProviders]
  })
export class UserModule {}