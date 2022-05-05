import * as mongoose from "mongoose";

export class TermDto {
    id: string;
    name: string;
    description: string;
    alias: string;
    taxonomyId:string;
    parent:string;
}


export const TermSchema = new mongoose.Schema({
    name: {type: String,required: true},
    description: {type: String,required: true},
    taxonomyId: {type: String,required: true},
    alias: {type: String,required: false},
    parent: {type: String,default: null},
},{ timestamps: { createdAt: 'created_at',updatedAt: 'updated_at' } });

export class TermObj {
    name: string;
    description: string;
    alias: string;
    taxonomyId:string;
    parent:string;
}

export interface Term extends mongoose.Document {
    id: string;
    name: string;
    description: string;
    alias: string;
    taxonomyId:string;
    parent:string;
}
