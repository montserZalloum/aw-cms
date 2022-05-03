import { Controller, Get, Post, Body, Param, Patch, Delete } from "@nestjs/common";
import { TaxonomyObj } from "./dto/taxonomy.model";
import { TaxonomyService } from "./taxonomy.service";

@Controller("taxonomy")
export class TaxonomyController {
  constructor(private readonly taxonomyService: TaxonomyService) {}

  @Post()
  async addTaxonomy(@Body() body: TaxonomyObj) {
    console.log(body)
    const newTaxonomy = await this.taxonomyService.insertTaxonomy(body);
    return newTaxonomy;
  }

  @Get()
  async getAllTaxonomies() {
    return await this.taxonomyService.getAllTaxonomies();
  }

  @Get(":id")
  async getTaxonomy(@Param("id") id: string) {
    return await this.taxonomyService.getTaxonomy(id);
  }

  @Patch(":id")
  async updateTaxonomy(@Param("id") id: string, @Body() body: TaxonomyObj) {    
    await this.taxonomyService.updateTaxonomy(id,body)
    return null
  }

  @Delete(":id")
  async removeTaxonomy(@Param("id") id: string) {
    await this.taxonomyService.removeTaxonomy(id)
    return null
  }
}
