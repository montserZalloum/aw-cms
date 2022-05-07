import { AuthenticatedGuard } from './../auth/authentecated.guard';
import { Post, Request, UseGuards } from "@nestjs/common";
import { Controller, Get } from "@nestjs/common";
import { LocalAuthGuard } from "src/auth/local-auth.guard";

@Controller()
export class HomeController {
    
  @UseGuards(LocalAuthGuard)
  @Post("login")
  login(@Request() req): any {
    return {msg: 'logged in!'};
  }

  @UseGuards(AuthenticatedGuard)
  @Get("")
  getHello(@Request() req):string {
    return req.user;
  }

  @Get("members")
  getMembers() {
    return [
      {
        id: 1,
        name: "moon",
      },
      {
        id: 2,
        name: "zalloum",
      },
    ];
  }
}
