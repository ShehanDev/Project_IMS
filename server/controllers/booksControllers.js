const Book =  require('../models/book');
const fs = require('fs');
module.exports =  class bookapi{

    //get all the book
    static async fetchAllbooks(req,res){
        //res.send("Get all books..!");
        try{
            const books = await Book.find();
            res.status(200).json(books);
        }catch(err){
            res.status(404).json({ message: err.message})
        }
    }


    //create book
    static async createbook(req,res){
        //res.send("crete new book");
        const book = req.body;
        const imagename = req.file.filename;
        book.image = imagename;

        try{
           await Book.create(book);
           res.status(201).json({ message : "book created succesfully "})

        }catch(err){
            res.status(400).json({message : err.message});

        }
    }

    //get book by id
    static async fetchbookByid(req,res){
        //res.send("get book by id")
        const id  = req.params.id;
        try{
            const  book = await  Book.findById(id)
            res.status(200).json(book);
        }catch(err){
            res.status(404).json({message: err.message})
        }
    }


    //update book
    static async updatebookByid(req,res){
        const  id = req.params.id ;
        let  new_image = "";
        //getting the new image and assining to new image and delete old one 
        if(req.file){
            new_image = req.file.filename;
            try{
                fs.unlinkSync("./uploads/bookImgs/"+req.body.old_image);
            }catch(err){
                console.log("New file error")
                
            }
        }else{
            //when the imgage not updated
            new_image = req.body.old_image;
        }

        const newbook =req.body;
        newbook.image = new_image;

        try{
            await Book.findByIdAndUpdate(id,newbook);
            res.status(200).json({message : 'book updated successfully'})


        }catch(err){
            res.status(404).json({message : err.message})
            console.log("Error")

        }
         
    }

    //delete book
    static async deletebookByid(req,res){
        //
        const id = req.params.id;
        try{
            const result = await Book.findByIdAndDelete(id);
            //remove imege
            if(result.image != '' ){
                try{
                    fs.unlinkSync('./uploads/bookImgs/'+result.image);
                }catch(err){
                    console.log(err);
                }
            }
            res.status(200).json({message : 'book deleted successfully'})
        } catch(err){
            res.status(404).json({message: err.message})
        }
    }

}