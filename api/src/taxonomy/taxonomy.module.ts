import { Module } from "@nestjs/common";
import { TaxonomyController } from "./taxonomy.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { TaxonomySchema } from "./dto/taxonomy.model";
import { TaxonomyService } from './taxonomy.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Taxonomy", schema: TaxonomySchema }]),
  ],
  controllers: [TaxonomyController],
  providers: [TaxonomyService],
  exports: [TaxonomyService]
})
export class TaxonomyModule {}
