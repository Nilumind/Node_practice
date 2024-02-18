import { InferSchemaType,model, Schema } from "mongoose";

const firstSchema = new Schema({
    title: { type: String, required: true},
    text: { type: String },

}, {timestamps: true});

type Note = InferSchemaType<typeof firstSchema> ;

export default model<Note>("Note",firstSchema )
