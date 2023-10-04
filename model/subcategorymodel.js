var mongoose = require('mongoose');

//schema

var subcategoryschema = new mongoose.Schema({
     name: {
          type: String,
     },
     email: {
          type: String,
     },
     password: {
          type: String,
     },
     s_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "categoremodel"
     }
})

module.exports = mongoose.model('category',subcategoryschema)