import mongoose from "mongoose";

const wordSchema = new mongoose.Schema({
    word:{type: String, required: true},
    definition: {type: String, required: true},
    image: {type: String, required: true},
    example: {type: String},
    partOfSpeech: {type: String, required: true},
     userId: {type: String}

});

const Word = mongoose.model("Word", wordSchema);
export default Word;