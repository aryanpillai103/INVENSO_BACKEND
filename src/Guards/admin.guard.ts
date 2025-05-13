import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    const token = req.headers['x-admin-token'];
    console.log(token, process.env.ADMIN_SECRET)
    if (token !== process.env.ADMIN_SECRET) {
      throw new UnauthorizedException('Invalid token');
    }
    return true;
  }
}