const mongoose = require('mongoose')
const { Schema } = mongoose

const IdeaSchema = new Schema({
    idea: {type: String, required: true},
    description: {type: String},
    upVotes: [{type:Boolean}],
    downVotes: [{type: Boolean}],
    author: {type: Schema.Type.ObjectId, ref:"user", required: true, autopopulate: true},
    comments: [{type: Schema.Type.ObjectId, ref:"comment", required: true, autopopulate: true}]
})

IdeaSchema.plugin(require("mongoose-autopopulate"))

module.exports = mongoose.model("idea", IdeaSchema)