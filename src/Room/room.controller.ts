import { Controller, Get , Post , Body, Put ,Param, Delete ,ParseIntPipe} from "@nestjs/common";
import { RoomService } from "./room.service";
import { Prisma } from "@prisma/client";

@Controller("room")
export class RoomController{
    constructor(private readonly roomService: RoomService){}
    @Get()
    getallItems(){
        return this.roomService.getAllRooms()
    }

    @Post()
    createItem(@Body() body: Prisma.RoomCreateInput){
        return this.roomService.createRooms(body);
    }

    @Put(":id")
    updateItems(@Param("id", ParseIntPipe) id: number, @Body() body:Prisma.RoomUpdateInput){
        return this.roomService.updateRooms(id , body)
    }

    @Get(":id")
    getItem(@Param("id", ParseIntPipe) id: number){
        return this.roomService.getRoombyId(id)
    }
    @Delete(":id")
    deleteRoom(@Param("id", ParseIntPipe) id: number){
        return this.roomService.deleteRoom(id)
    }
}