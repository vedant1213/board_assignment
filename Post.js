const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    taskname: {
        type: String,
        required: true
},
 description: {
 type: String,
 required: true
},
Creator: {
        type: String,
        required: true
    },

Duration: {
        type: Number,
        required: true
    },

});

    module.exports= mongoose.model('Posts', PostSchema);