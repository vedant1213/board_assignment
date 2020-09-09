const express= require('express');

const router = express.Router();
const Post = require('../models/Post');
router.get('/',async(req,res) => {
    res.send('Get request');
});

router.post('/',async(req,res) => {
    const post = new Post
    taskname: req.body.taskname;
    description: req.body.description;
    Creator: req.body.Creator;
    Duration: req.body.Duration;

});

module.exports = router;


