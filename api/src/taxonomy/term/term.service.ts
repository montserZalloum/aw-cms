import { Injectable, NotFoundException } from "@nestjs/common";
import { Term } from "../dto/term.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { TaxonomyService } from "../taxonomy.service";

@Injectable()
export class TermService {

  constructor(
    @InjectModel("Term") private readonly termModel: Model<Term>,
    private readonly taxonomyService: TaxonomyService
  ) {}

  async insertTerm(taxonomyId,payload) {
    const taxonomy = await this.taxonomyService.getTaxonomy(taxonomyId);
    
    if (taxonomy) {
      payload.taxonomyId = taxonomyId
      const newTerm = new this.termModel(payload);
      const result = await newTerm.save();
      return result;
    }
    
  }

  async getAllTerms(taxonomyId) {
    const taxonomy = await this.taxonomyService.getTaxonomy(taxonomyId);
    if (taxonomy) {
      const term = await this.termModel.find({taxonomyId: taxonomyId}).exec();
      return term as Term[];
    }
  }

  async getTermTags(taxonomyId,body) {
    const taxonomy = await this.taxonomyService.getTaxonomy(taxonomyId);
    if (taxonomy) {
      const term = await this.termModel.find({taxonomyId: taxonomyId,name: {$regex : body.query} }).exec();
      return term as Term[];
    }
  }

  async getTerm(id: string) {
    const term = await this.findProduct(id);
    return term;
  }
  
  async getTermByName(name: string) {
    const term = await this.termModel.find({name: name}).exec()
    return term;
  }

  async updateTerm(id, payload) {
    const updatedTerm = await this.findProduct(id);

    if (payload.name) updatedTerm.name = payload.name;
    if (payload.description) updatedTerm.description = payload.description;
    if (payload.alias) updatedTerm.alias = payload.alias;
    if (payload.parent) updatedTerm.parent = payload.parent;
    if (payload.taxonomyId) updatedTerm.taxonomyId = payload.taxonomyId;
    const  resp = await updatedTerm.save();
  }

  async removeTerm(id) {
    const result = await this.termModel.deleteOne({_id:id}).exec()
    if (result.deletedCount == 0) 
      throw new NotFoundException('Failed to delete taxonomy');
    
  }

  private async findProduct(id: string): Promise<Term> {
    let term;
    try {
      term = await this.termModel.findById(id);
    } catch (error) {
      throw new NotFoundException("Could not find term.");
    }
    if (!term) {
      throw new NotFoundException("Could not find term.");
    }
    return term;
  }
}
