import { Module } from "@nestjs/common";
import { ContentController } from "./content.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { ContentSchema } from "./dto/content.model";
import { ContentService } from './content.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Content", schema: ContentSchema }]),
  ],
  controllers: [ContentController],
  providers: [ContentService],
  exports: [ContentService]
})
export class ContentModule {}
