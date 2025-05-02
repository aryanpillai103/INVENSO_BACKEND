import { Controller, Get , Post , Body, Put ,Param, ParseIntPipe} from "@nestjs/common";
import { IssueService } from "./issue.service";
import { Prisma } from "@prisma/client";

@Controller("issue")
export class IssueController{
    constructor(private readonly issueService: IssueService){}
    @Get()
    getallEquipment(){
        return this.issueService.getAllIssue()
    }

    @Post()
    createEquipment(@Body() body: Prisma.EquipmentCreateInput){
        return this.issueService.createIssue(body);
    }

    @Put(":id")
    updateEquipment(@Param("id", ParseIntPipe) id: number, @Body() body:Prisma.RoomUpdateInput){
        return this.issueService.updateIssue(id , body)
    }

    @Get(":id")
    getEquipmentbyId(@Param("id", ParseIntPipe) id: number){
        return this.issueService.getIssuebyId(id)
    }
}