import { UseGuards, Post, Controller, Req } from '@nestjs/common';
import { AuthenticatedGaurd } from 'src/auth/utils/authenticate.gaurd';
import { RepoService } from './repo.service';

@Controller('/repo')
export class RepoController {
    constructor(private readonly repoService: RepoService) {}

    @Post('/create') 
    @UseGuards(AuthenticatedGaurd)
    async createRepo(@Req() req): Promise<any> { 
        return await this.repoService.createRepo(req.user, req.body.repository);
    }

} 