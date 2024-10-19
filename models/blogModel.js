
const fs = require('fs');
const path = require('path');
const dataFilePath = path.join(__dirname,"../data/blogs.json")

function getAllBlogs(){
    const data = fs.readFileSync(dataFilePath,'utf-8');
    return JSON.parse(data);
}

function createBlog(newBlog){
    const blogs = getAllBlogs();
    blogs.push(newBlog);
    fs.writeFileSync(dataFilePath, JSON.stringify(blogs,null, 2), 'utf-8');
    return newBlog;
}

module.exports = {
    getAllBlogs, createBlog
}