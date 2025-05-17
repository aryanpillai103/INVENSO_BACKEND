
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EquipmentTypeService {
  constructor(private readonly prisma: PrismaService) {}

  private serializeEquipmentType(equipmentType: any) {
    if (!equipmentType) return null;
    return {
      ...equipmentType,
      dateCreated: equipmentType.dateCreated?.toISOString(),
      dateModified: equipmentType.dateModified?.toISOString(),
    };
  }

  async getAllEquipmentType() {
    const types = await this.prisma.equipmentType.findMany();
    return types.map((type) => this.serializeEquipmentType(type));
  }

  async getEquipmentTypeByCategory(category: string) {
  const types = await this.prisma.equipmentType.findMany({
    where: {
      Types: {
        contains: category.trim(), // <-- use contains instead of equals
        mode: 'insensitive',
      },
    },
  });
  return types.map((type) => this.serializeEquipmentType(type));
}

  async createEquipmentType(body: Prisma.EquipmentTypeCreateInput) {
    const type = await this.prisma.equipmentType.create({
      data: body,
    });
    return this.serializeEquipmentType(type);
  }

  async updateEquipmentType(
    equipmentTypeId: number,
    body: Prisma.EquipmentTypeUpdateInput,
  ) {
    const updated = await this.prisma.equipmentType.update({
      where: { equipmentTypeId },
      data: {
        ...body,
        dateModified: new Date(),
      },
    });
    return this.serializeEquipmentType(updated);
  }

  async getEquipmentTypebyId(equipmentTypeId: number) {
    const type = await this.prisma.equipmentType.findUnique({
      where: { equipmentTypeId },
    });
    return this.serializeEquipmentType(type);
  }

  async deleteEquipmentType(equipmentTypeId: number) {
    return this.prisma.equipmentType.delete({ where: { equipmentTypeId } });
  }
}
