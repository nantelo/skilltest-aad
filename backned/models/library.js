const mongoose = require("mongoose");
const librarySchema = new mongoose.Schema(
{
booktitle: { type: String, required: true },
author: { type: String, required: true, unique: true },
category: { type: String, required: true },
year: { type: Number, required: true },
isbn: { type: String, required: true },
},
{ timestamps: true }
);
module.exports = mongoose.model("Library", librarySchema);