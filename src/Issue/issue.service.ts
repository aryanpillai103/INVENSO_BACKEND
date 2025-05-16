// import { Injectable } from '@nestjs/common';
// import { Prisma } from '@prisma/client';
// import { PrismaService } from 'src/prisma/prisma.service';

// @Injectable()
// export class IssueService {
//   constructor(private readonly prisma: PrismaService) {}
//   //fetching equipment info
//   getAllIssue() {
//     return this.prisma.issue.findMany();
//   }

//   createIssue(body: Prisma.IssueCreateInput) {
//     return this.prisma.issue.create({
//       data: body,
//     });
//   }

//   updateIssue(issueId: number, body: Prisma.IssueUpdateInput) {
//     return this.prisma.issue.update({ where: { issueId }, data: body });
//   }
//   getIssuebyId(issueId: number) {
//     return this.prisma.issue.findUnique({ where: { issueId } });
//   }
//   getIssuebyEnrollmentNo(enrollmentNo: string) {
//     return this.prisma.issue.findMany({ where: { enrollmentNo } });
//   }
//   deleteIssue(issueId: number){
//     return this.prisma.issue.delete({where: {issueId}})
//   }
// }
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class IssueService {
  constructor(private readonly prisma: PrismaService) {}

  private serializeIssue(issue: any) {
    if (!issue) return null;
    return {
      ...issue,
      purchaseDate: issue.purchaseDate?.toISOString(),
      isCreated: issue.isCreated?.toISOString(),
      isModified: issue.isModified?.toISOString(),
    };
  }

  async getAllIssue() {
    const issues = await this.prisma.issue.findMany();
    return issues.map(issue => this.serializeIssue(issue));
  }

  async createIssue(body: Prisma.IssueCreateInput) {
    const issue = await this.prisma.issue.create({
      data: body,
    });
    return this.serializeIssue(issue);
  }

  async updateIssue(issueId: number, body: Prisma.IssueUpdateInput) {
  const existing = await this.prisma.issue.findUnique({ where: { issueId } });

  if (!existing) {
    throw new Error(`Issue with issueId=${issueId} not found`);
  }

  const issue = await this.prisma.issue.update({
    where: { issueId },
    data: {
      ...body,
      isModified: new Date(),
    },
  });

  return this.serializeIssue(issue);
}


  async getIssuebyId(issueId: number) {
    const issue = await this.prisma.issue.findUnique({
      where: { issueId },
    });
    return this.serializeIssue(issue);
  }

  async getIssuebyEnrollmentNo(enrollmentNo: string) {
    const issues = await this.prisma.issue.findMany({
      where: { enrollmentNo },
    });
    return issues.map(issue => this.serializeIssue(issue));
  }

  async deleteIssue(issueId: number) {
    return this.prisma.issue.delete({ where: { issueId } });
  }
}
