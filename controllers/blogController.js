const blogModel = require("../models/blogModel");

function getAllBlogs(req,res){
    const blogs = blogModel.getAllBlogs();
    res.json(blogs);
}

function createBlog(req,res){

    const newBlog = {
        id:Date.now().toString(),
        title:req.body.title,
        content:req.body.content
    }
    const createdBlog = blogModel.createBlog(newBlog);
    res.status(201).json(createdBlog)

}

module.exports = {
    getAllBlogs, createBlog
}