// import { Controller, Get , Post , Body, Put ,Param, ParseIntPipe, Delete} from "@nestjs/common";
// import { IssueService } from "./issue.service";
// import { Prisma } from "@prisma/client";

// @Controller("/assetManagement/issue")
// export class IssueController{
//     constructor(private readonly issueService: IssueService){
//         console.log('IssueController initialized!');
//     }
    
//     @Get('enrollment/:enrollmentNo') // <-- Correctly defines a dynamic parameter
//   async getIssuesByEnrollmentNo(@Param('enrollmentNo') enrollmentNo: string) {
//     return this.issueService.getIssuebyEnrollmentNo(enrollmentNo);
//   }
    
//     @Get()
//     getallEquipment(){
//         return this.issueService.getAllIssue()
//     }

//     @Post()
//     createIssue(@Body() body: Prisma.IssueCreateInput){
//         return this.issueService.createIssue(body);
//     }

//     @Put(":id")
//     updateIssue(@Param("id", ParseIntPipe) id: number, @Body() body:Prisma.IssueUpdateInput){
//         return this.issueService.updateIssue(id , body)
//     }

    
//     @Get(":id")
//     getIssuebyId(@Param("id", ParseIntPipe) id: number){
//         return this.issueService.getIssuebyId(id)
//     }

//     @Delete(":id")
//     deleteIssue(@Param("id", ParseIntPipe) id: number){
//         return this.issueService.deleteIssue(id)
//     }
// }
import { Controller, Get, Post, Body, Put, Param, Delete } from "@nestjs/common";
import { IssueService } from "./issue.service";
import { Prisma } from "@prisma/client";

@Controller("/assetManagement/issue")
export class IssueController {
  constructor(private readonly issueService: IssueService) {
    console.log('IssueController initialized!');
  }
  
  @Get('enrollment/:enrollmentNo')
  async getIssuesByEnrollmentNo(@Param('enrollmentNo') enrollmentNo: string) {
    return this.issueService.getIssuebyEnrollmentNo(enrollmentNo);
  }
  
  @Get()
  getallEquipment() {
    return this.issueService.getAllIssue();
  }
  
  @Post()
  createIssue(@Body() body: Prisma.IssueCreateInput) {
    return this.issueService.createIssue(body);
  }
  
  @Put(":id")
  updateIssue(@Param("id") id: string, @Body() body: Prisma.IssueUpdateInput) {
    return this.issueService.updateIssue(id, body);
  }
  
  @Get(":id")
  getIssuebyId(@Param("id") id: string) {
    return this.issueService.getIssuebyId(id);
  }
  
  @Delete(":id")
  deleteIssue(@Param("id") id: string) {
    return this.issueService.deleteIssue(id);
  }
}
