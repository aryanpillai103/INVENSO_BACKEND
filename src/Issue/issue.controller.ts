import { Controller, Get , Post , Body, Put ,Param, ParseIntPipe, Delete} from "@nestjs/common";
import { IssueService } from "./issue.service";
import { Prisma } from "@prisma/client";

@Controller("/assetManagement/issue")
export class IssueController{
    constructor(private readonly issueService: IssueService){
        console.log('IssueController initialized!');
    }
    
    @Get(':enrollmentNo') // <-- Correctly defines a dynamic parameter
  async getIssuesByEnrollmentNo(@Param('enrollmentNo') enrollmentNo: string) {
     console.log('Received enrollmentNo:', enrollmentNo); 
    return this.issueService.getIssuebyEnrollmentNo(enrollmentNo);
  }
    
    @Get()
    getallEquipment(){
        return this.issueService.getAllIssue()
    }

    @Post()
    createIssue(@Body() body: Prisma.IssueCreateInput){
        return this.issueService.createIssue(body);
    }

    @Put(":id")
    updateIssue(@Param("id", ParseIntPipe) id: number, @Body() body:Prisma.IssueUpdateInput){
        return this.issueService.updateIssue(id , body)
    }

    
    @Get(":id")
    getIssuebyId(@Param("id", ParseIntPipe) id: number){
        return this.issueService.getIssuebyId(id)
    }

    @Delete(":id")
    deleteIssue(@Param("id", ParseIntPipe) id: number){
        return this.issueService.deleteIssue(id)
    }
}