import { Controller, Get, Post, Body, Param, Patch, Delete } from "@nestjs/common";
import { TermObj } from "../dto/term.model";
import { TermService } from "./term.service";

@Controller("taxonomy/:taxonomyId/term")
export class TermController {
  constructor(private readonly termService: TermService) {}

  @Post()
  async addTerm(
      @Body() body: TermObj,
      @Param('taxonomyId') taxonomyId: string
      ) {
    const newTerm = await this.termService.insertTerm(taxonomyId,body);
    return newTerm;
  }

  @Get()
  async getAllTerms(
      @Param('taxonomyId') taxonomyId: string
  ) {
    return await this.termService.getAllTerms(taxonomyId);
  }

  @Get(":id")
  async getTerm(@Param("id") id: string) {
    return await this.termService.getTerm(id);
  }

  @Patch(":id")
  async updateTerm(@Param("id") id: string, @Body() body: TermObj) {    
    await this.termService.updateTerm(id,body)
    return null
  }

  @Delete(":id")
  async removeTerm(@Param("id") id: string) {
    await this.termService.removeTerm(id)
    return null
  }
}