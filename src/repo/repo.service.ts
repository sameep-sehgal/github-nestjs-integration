import { Injectable } from "@nestjs/common";
import { Octokit } from "@octokit/rest";

@Injectable()
export class RepoService {
    async createRepo(user, repoName: string) {
        if(repoName.length === 0)
            return {message: 'Failed to Create Repository. Repository Name Field is empty.'};

        const octokit = new Octokit({
            auth: user.accessToken
        });

        try {
            const res = await octokit.request('POST /user/repos', {
                name: repoName
            });
            if(res.status === 201) {
                return {message:'Repository Successfully Created', URL: user.profileUrl+'/'+repoName};
            }
            console.log(res.status, 'Create Repo');
        } catch {
            return {message:'Failed to Create Repository. Repository with name '+repoName+' already exists.', URL: user.profileUrl+'/'+repoName};
        }
    }
}