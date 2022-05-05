import { Controller, Get, Post, Body, Param, Patch, Delete } from "@nestjs/common";
import { ContentObj } from "./dto/content.model";
import { ContentService } from "./content.service";

@Controller("content")
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Post()
  async addContent(@Body() body: ContentObj) {
    console.log(body)
    const newContent = await this.contentService.insertContent(body);
    return newContent;
  }

  @Get()
  async getAllContents() {
    return await this.contentService.getAllContents();
  }

  @Get(":id")
  async getContent(@Param("id") id: string) {
    return await this.contentService.getContent(id);
  }

  @Patch(":id")
  async updateContent(@Param("id") id: string, @Body() body: ContentObj) {    
    await this.contentService.updateContent(id,body)
    return null
  }

  @Delete(":id")
  async removeContent(@Param("id") id: string) {
    await this.contentService.removeContent(id)
    return null
  }
}
