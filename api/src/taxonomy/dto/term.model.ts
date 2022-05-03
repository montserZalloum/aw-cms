import * as mongoose from "mongoose";

export class TermDto {
    id: string;
    name: string;
    description: string;
    alias: string;
    taxonomyId:string;
    createdDate: string;
}


export const TermSchema = new mongoose.Schema({
    name: {type: String,required: true},
    description: {type: String,required: true},
    alias: {type: String,required: true},
    taxonomyId: {type: String,required: true},
},{ timestamps: { createdAt: 'created_at',updatedAt: 'updated_at' } });

export class TermObj {
    name: string;
    description: string;
    alias: string;
    taxonomyId:string;
    createdDate: string;
}

export interface Term extends mongoose.Document {
    id: string;
    name: string;
    description: string;
    alias: string;
    taxonomyId:string;
    createdDate: string;
}
