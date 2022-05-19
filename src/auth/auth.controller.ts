import { UseGuards, Req, Get, Controller, Res, Render } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from "./auth.service";
import { GithubAuthGuard } from 'src/auth/utils/github-auth.gaurd';

@Controller('/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get('/')
    @Render('login')
    auth() { }

    @Get('/logout')
    logout(@Req() req, @Res() res) {
        req.logout();
        res.redirect('/auth');
     }

    @Get('/github') 
    @UseGuards(GithubAuthGuard)
    async githubAuth(): Promise<any> { }

    @Get('/github/callback') 
    @UseGuards(GithubAuthGuard)
    async githubAuthRedirect(@Req() req: Request, @Res() res: Response): Promise<any> {
        const {message, user} = await this.authService.githubAuth(req);
        console.log({message, user});
        return res.redirect('/');
    }
} 