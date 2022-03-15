const Post =  require('../models/post');
const fs = require('fs');
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
        //res.send("get post by id")
        const id  = req.params.id;
        try{
            const  post = await  Post.findById(id)
            res.status(200).json(post);
        }catch(err){
            res.status(404).json({message: err.message})
        }
    }


    //update post
    static async updatePostByid(req,res){
        const  id = req.params.id ;
        let  new_image = "";
        //getting the new image and assining to new image and delete old one 
        if(req.file){
            new_image = req.file.filename;
            try{
                fs.unlinkSync("./uploads/"+req.body.old_image);
            }catch(err){
                console.log(err)
            }
        }else{
            //when the imgage not updated
            new_image = req.body.old_image;
        }

        try{
            await Post.findByIdAndUpdate(id,newPost);
            res.status(200).json({message : 'post updated successfully'})


        }catch(err){
            res.status(404).json({message : err.message})

        }
         
    }

    //delete post
    static async deletePostByid(req,res){
        //
        const id = req.params.id;
        try{
            const result = await Post.findByIdAndDelete(id);
            //remove imege
            if(result.image != '' ){
                try{
                    fs.unlinkSync('./uploads/'+result.image);
                }catch(err){
                    console.log(err);
                }
            }
            res.status(200).json({message : 'post deleted successfully'})
        } catch(err){
            res.status(404).json({message: err.message})
        }
    }

}