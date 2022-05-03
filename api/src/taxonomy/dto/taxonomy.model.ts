import * as mongoose from "mongoose";

export class TaxonomyDto {
    id: string;
    name: string;
    description: string;
}


export const TaxonomySchema = new mongoose.Schema({
    name: {type: String,required: true},
    description: {type: String,required: false}
},{ timestamps: { createdAt: 'created_at',updatedAt: 'updated_at' } });

export class TaxonomyObj {
    name: string;
    description: string;
}

export interface Taxonomy extends mongoose.Document {
    id: string;
    name: string;
    description: string;
}
