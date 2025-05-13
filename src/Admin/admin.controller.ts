import { Controller, Get, UseGuards } from '@nestjs/common';
import { AdminGuard } from '../Guards/admin.guard';

@Controller('admin')
export class AdminController {
  @UseGuards(AdminGuard)
  @Get('data')
  getAdminData() {
    return { message: 'Secret admin data' };
  }
}