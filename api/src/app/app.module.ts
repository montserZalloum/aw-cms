import { Module } from "@nestjs/common";
import { TaxonomyModule } from "../taxonomy/taxonomy.module";
import { HomeModule } from "../home/home.module";
import { MongooseModule } from "@nestjs/mongoose";
import { TermModule } from "src/taxonomy/term/term.module";
import { ContentModule } from "src/content/content.module";

@Module({
  imports: [
    TaxonomyModule,
    TermModule,
    HomeModule,
    ContentModule,
    MongooseModule.forRoot("mongodb://localhost:27017/aw-admin"),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
