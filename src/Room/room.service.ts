// import { Injectable } from "@nestjs/common";
// import { Prisma } from "@prisma/client";
// import { PrismaService } from "src/prisma/prisma.service";

// @Injectable()
// export class RoomService{
//     constructor(private readonly prisma: PrismaService){}
    
//     getAllRooms(){
//         return this.prisma.room.findMany();
//     }

//     createRooms(body: Prisma.RoomCreateInput){
//         return this.prisma.room.create({
//             data:body
//         });
//     }

//     updateRooms(roomId: number , body: Prisma.RoomUpdateInput){
//         return this.prisma.room.update({where: { roomId }, data: body},)
//     }
//     getRoombyId(roomId: number ){
//         return this.prisma.room.findUnique({where: { roomId }})
//     }
//     deleteRoom(roomId: number){
//     return this.prisma.room.delete({where: {roomId}})
//   }

// }
import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
@Injectable()
export class RoomService {
  constructor(private readonly prisma: PrismaService) {}

  private serializeRoom(room: any) {
    if (!room) return null;
    return {
      ...room,
      isCreated: room.isCreated?.toISOString(),
      isModified: room.isModified?.toISOString(),
    };
  }

  async getAllRooms() {
    const rooms = await this.prisma.room.findMany();
    return rooms.map(room => this.serializeRoom(room));
  }

  async createRooms(body: Prisma.RoomCreateInput) {
    const room = await this.prisma.room.create({
      data: body,
    });
    return this.serializeRoom(room);
  }

  async updateRooms(roomId: number, body: Prisma.RoomUpdateInput) {
    const room = await this.prisma.room.update({
      where: { roomId },
      data: body,
    });
    return this.serializeRoom(room);
  }

  async getRoombyId(roomId: number) {
    const room = await this.prisma.room.findUnique({
      where: { roomId },
    });
    return this.serializeRoom(room);
  }

  async deleteRoom(roomId: number) {
    // No need to serialize since it returns deleted object (optional)
    return this.prisma.room.delete({ where: { roomId } });
  }
}
