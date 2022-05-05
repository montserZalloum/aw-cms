import { Injectable, NotFoundException } from "@nestjs/common";
import { Content } from "./dto/content.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class ContentService {

  constructor(
    @InjectModel("Content") private readonly contentModel: Model<Content>
  ) {}

  async insertContent(payload) {
    const newContent = new this.contentModel(payload);
    const result = await newContent.save();
    return result;
  }

  async getAllContents() {
    const contents = await this.contentModel.find().sort('-created_date').exec();
    return contents as Content[];
  }

  async getContent(id: string) {
    const content = await this.findProduct(id);
    return content;
  }

  async updateContent(id, payload) {
    const updatedContent = await this.findProduct(id);

    if (payload.node_title) updatedContent.node_title = payload.node_title;
    if (payload.domains) updatedContent.domains = payload.domains;
    if (payload.taxonomy) updatedContent.taxonomy = payload.taxonomy;
    if (payload.taxonomy_names) updatedContent.taxonomy_names = payload.taxonomy_names;
    if (payload.tags) updatedContent.tags = payload.tags;
    if (payload.images) updatedContent.images = payload.images;
    if (payload.author_name) updatedContent.author_name = payload.author_name;
    if (payload.author_title) updatedContent.author_title = payload.author_title;
    if (payload.author_url) updatedContent.author_url = payload.author_url;
    if (payload.author_picture) updatedContent.author_picture = payload.author_picture;
    if (payload.author_classification) updatedContent.author_classification = payload.author_classification;
    if (payload.video_link) updatedContent.video_link = payload.video_link;
    if (payload.field_body_en_summary) updatedContent.field_body_en_summary = payload.field_body_en_summary;
    if (payload.field_body_en_value) updatedContent.field_body_en_value = payload.field_body_en_value;
    if (payload.field_title_en) updatedContent.field_title_en = payload.field_title_en;
    if (payload.field_alias_en) updatedContent.field_alias_en = payload.field_alias_en;
    if (payload.field_body_fr_summary) updatedContent.field_body_fr_summary = payload.field_body_fr_summary;
    if (payload.field_body_fr_value) updatedContent.field_body_fr_value = payload.field_body_fr_value;
    if (payload.field_title_fr) updatedContent.field_title_fr = payload.field_title_fr;
    if (payload.field_alias_fr) updatedContent.field_alias_fr = payload.field_alias_fr;
    if (payload.summery) updatedContent.summery = payload.summery;
    if (payload.path_alias) updatedContent.path_alias = payload.path_alias;
    if (payload.geolocation) updatedContent.geolocation = payload.geolocation;
    if (payload.rating) updatedContent.rating = payload.rating;
    if (payload.area) updatedContent.area = payload.area;
    if (payload.sicky) updatedContent.sicky = payload.sicky;
    if (payload.highlighted) updatedContent.highlighted = payload.highlighted;

    updatedContent.save();
  }

  async removeContent(id) {
    const result = await this.contentModel.deleteOne({_id:id}).exec()
    if (result.deletedCount == 0) 
      throw new NotFoundException('Failed to delete content');
    
  }

  private async findProduct(id: string): Promise<Content> {
    let content;
    try {
      content = await this.contentModel.findById(id);
    } catch (error) {
      throw new NotFoundException("Could not find content.");
    }
    if (!content) {
      throw new NotFoundException("Could not find content.");
    }
    return content;
  }
}
