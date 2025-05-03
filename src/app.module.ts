import { Module } from '@nestjs/common';
import { RoomModule } from './Room/room.module';
import { PrismaModule } from './prisma/prisma.module';
import { EquipmentModule } from './Equipment/equipment.module';
import { EquipmentTypeModule } from './EquipmentType/equipmentType.module';
import { RemarkModule } from './Remark/remark.module';
import { NotificationModule } from './Notification/notification.module';
import { IssueModule } from './Issue/issue.module';

@Module({
  imports: [RoomModule, 
            PrismaModule , 
            EquipmentModule, 
            EquipmentTypeModule , 
            RemarkModule , 
            NotificationModule,
            IssueModule],
  controllers: [],
  providers: [],
})
export class AssetManagementModule {}
