import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class AuthenticatedGuard implements CanActivate {
    async canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();
        
        // console.log(request.isAuthenticated())
        if (!request.user) throw new UnauthorizedException();
        return true;
    }
}