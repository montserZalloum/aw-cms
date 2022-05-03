import { Injectable, NotFoundException } from "@nestjs/common";
import { Taxonomy } from "./dto/taxonomy.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class TaxonomyService {

  constructor(
    @InjectModel("Taxonomy") private readonly taxonomyModel: Model<Taxonomy>
  ) {}

  async insertTaxonomy(payload) {
    const newTaxonomy = new this.taxonomyModel(payload);
    const result = await newTaxonomy.save();
    return result;
  }

  async getAllTaxonomies() {
    const taxonomies = await this.taxonomyModel.find().sort('-created_at').exec();
    return taxonomies as Taxonomy[];
  }

  async getTaxonomy(id: string) {
    const taxonomy = await this.findProduct(id);
    return taxonomy;
  }

  async updateTaxonomy(id, payload) {
    const updatedTaxonomy = await this.findProduct(id);

    if (payload.name) updatedTaxonomy.name = payload.name;

    if (payload.description) updatedTaxonomy.description = payload.description;
    updatedTaxonomy.save();
  }

  async removeTaxonomy(id) {
    const result = await this.taxonomyModel.deleteOne({_id:id}).exec()
    if (result.deletedCount == 0) 
      throw new NotFoundException('Failed to delete taxonomy');
    
  }

  private async findProduct(id: string): Promise<Taxonomy> {
    let taxonomy;
    try {
      taxonomy = await this.taxonomyModel.findById(id);
    } catch (error) {
      throw new NotFoundException("Could not find taxonomy.");
    }
    if (!taxonomy) {
      throw new NotFoundException("Could not find taxonomy.");
    }
    return taxonomy;
  }
}
