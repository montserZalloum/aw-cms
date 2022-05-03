import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TermController } from "./term.controller";
import { TermService } from "./term.service";
import { TermSchema } from "../dto/term.model";
import { TaxonomyModule } from "../taxonomy.module";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Term", schema: TermSchema }]),
    TaxonomyModule
  ],
  controllers: [TermController],
  providers: [TermService],
})
export class TermModule {}
