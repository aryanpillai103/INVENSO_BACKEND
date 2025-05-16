// import { Injectable } from "@nestjs/common";
// import { Prisma } from "@prisma/client";
// import { PrismaService } from "src/prisma/prisma.service";

// @Injectable()
// export class EquipmentService{
//     constructor(private readonly prisma: PrismaService){}
//     //fetching equipment info
//     getAllEquipment(){
//         return this.prisma.equipment.findMany();
//     }

//     createEquipment(body: Prisma.EquipmentCreateInput){
//         return this.prisma.equipment.create({
//             data:body,
//         });
//     }

//     updateEquipment(equipmentId: number , body: Prisma.EquipmentUpdateInput){
//         return this.prisma.equipment.update({where: { equipmentId }, data: body},)
//     }
//     getEquipmentbyId(equipmentId: number ){
//         return this.prisma.equipment.findUnique({where: { equipmentId }})
//     }
//     deleteEquipment(equipmentId: number){
//     return this.prisma.equipment.delete({where: {equipmentId}})
//   }

//     //fetching equipment type info
    
// }
import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class EquipmentService {
  constructor(private readonly prisma: PrismaService) {}

  private serializeEquipment(equipment: any) {
    if (!equipment) return null;
    return {
      ...equipment,
      purchaseDate: equipment.purchaseDate?.toISOString(),
      isCreated: equipment.isCreated?.toISOString(),
      isModified: equipment.isModified?.toISOString(),
    };
  }

  async getAllEquipment() {
    const equipmentList = await this.prisma.equipment.findMany();
    return equipmentList.map(eq => this.serializeEquipment(eq));
  }

  async createEquipment(body: Prisma.EquipmentCreateInput) {
    const created = await this.prisma.equipment.create({
      data: body,
    });
    return this.serializeEquipment(created);
  }

  async updateEquipment(equipmentId: number, body: Prisma.EquipmentUpdateInput) {
    const updated = await this.prisma.equipment.update({
      where: { equipmentId },
      data: {
        ...body,
        isModified: new Date(), // auto-update timestamp
      },
    });
    return this.serializeEquipment(updated);
  }

  async getEquipmentbyId(equipmentId: number) {
    const equipment = await this.prisma.equipment.findUnique({
      where: { equipmentId },
    });
    return this.serializeEquipment(equipment);
  }

  async deleteEquipment(equipmentId: number) {
    return this.prisma.equipment.delete({ where: { equipmentId } });
  }
}
