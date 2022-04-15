const Student =  require('../models/student');
const fs = require('fs');
module.exports =  class studentapi{

    //get all the student
    static async fetchAllstudents(req,res){
        //res.send("Get all students..!");
        try{
            const students = await Student.find();
            res.status(200).json(students);
        }catch(err){
            res.status(404).json({ message: err.message})
        }
    }


    //create student
    static async createstudent(req,res){
        //res.send("crete new student");
        const student = req.body;
        const imagename = req.file.filename;
        student.image = imagename;

        try{
           await Student.create(student);
           res.status(201).json({ message : "student created succesfully "})

        }catch(err){
            res.status(400).json({message : err.message});

        }
    }

    //get student by id
    static async fetchstudentByid(req,res){
        //res.send("get student by id")
        const id  = req.params.id;
        try{
            const  student = await  Student.findById(id)
            res.status(200).json(student);
        }catch(err){
            res.status(404).json({message: err.message})
        }
    }


    //update student
    static async updatestudentByid(req,res){
        const  id = req.params.id ;
        let  new_image = "";
        //getting the new image and assining to new image and delete old one 
        if(req.file){
            new_image = req.file.filename;
            try{
                fs.unlinkSync("./uploads/studentImgs/"+req.body.old_image);
            }catch(err){
                console.log("New file error")
                
            }
        }else{
            //when the imgage not updated
            new_image = req.body.old_image;
        }

        const newstudent =req.body;
        newstudent.image = new_image;

        try{
            await Student.findByIdAndUpdate(id,newstudent);
            res.status(200).json({message : 'student updated successfully'})


        }catch(err){
            res.status(404).json({message : err.message})
            console.log("Error")

        }
         
    }

    //delete student
    static async deletestudentByid(req,res){
        //
        const id = req.params.id;
        try{
            const result = await Student.findByIdAndDelete(id);
            //remove imege
            if(result.image != '' ){
                try{
                    fs.unlinkSync('./uploads/studentImgs/'+result.image);
                }catch(err){
                    console.log(err);
                }
            }
            res.status(200).json({message : 'student deleted successfully'})
        } catch(err){
            res.status(404).json({message: err.message})
        }
    }

}