const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now },
  comments:[{
    name: { type: String, required: true},
    comment: {type: String}
  }]
});

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
