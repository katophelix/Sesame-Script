const db = require("../models");

// Defining methods for the VideosController
module.exports = {
  findAll: function(req, res) {
    db.Video
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllComments: function(req, res) {
    db.Video.comments
      .find(req.query.name, req.query.comment)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Video
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findCommentsById: function(req, res) {
    db.Video
      .findById(req.params.id.name, req.param.id.comment)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Video
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createComments: function(req, res) {
    db.Video.comments
      .create(req.name.body, req.comment.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Video
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateComments: function(req, res) {
    const comment = {name: req.body.name, comment: req.body.comment}
    db.Video
      .findOneAndUpdate({ _id: req.params.id }, {$push: {comments: comment}})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(555).json(err));
  },
  // db.comments.update({'comments.name': 'xxx'}, {'comments.comment': `xx`})
  remove: function(req, res) {
    db.Video
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

};
