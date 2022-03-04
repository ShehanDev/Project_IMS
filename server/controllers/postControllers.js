const Post =  require('../models/post');
module.exports =  class postapi{

    //get all the post
    static async fetchAllposts(req,res){
        //res.send("Get all posts..!");
        try{
            const posts = await Post.find();
            res.status(200).json(posts);
        }catch(err){
            res.status(404).json({ message: err.message})
        }
    }


    //create post
    static async createPost(req,res){
        //res.send("crete new post");
        const post = req.body;
        const imagename = req.file.filename;
        post.image = imagename;

        try{
           await Post.create(post);
           res.status(201).json({ message : "post created succesfully "})

        }catch(err){
            res.status(400).json({message : err.message});

        }

    }
    //get post by id
    static async fetchPostByid(req,res){
        res.send("get post by id")
    }
    //update post
    static async updatePostByid(req,res){
        res.send("get post by id")
    }
    //delete post
    static async deletePostByid(req,res){
        res.send("Delete post")
    }
}