const Course =  require('../models/course');
const fs = require('fs');
module.exports =  class courseapi{

    //get all the course
    static async fetchAllcourses(req,res){
        //res.send("Get all courses..!");
        try{
            const courses = await Course.find();
            res.status(200).json(courses);
        }catch(err){
            res.status(404).json({ message: err.message})
        }
    }


    //create course
    static async createcourse(req,res){
        //res.send("crete new course");
        const course = req.body;
        const imagename = req.file.filename;
        course.image = imagename;

        try{
           await Course.create(course);
           res.status(201).json({ message : "course created succesfully "})

        }catch(err){
            res.status(400).json({message : err.message});

        }
    }

    //get course by id
    static async fetchcourseByid(req,res){
        //res.send("get course by id")
        const id  = req.params.id;
        try{
            const  course = await  Course.findById(id)
            res.status(200).json(course);
        }catch(err){
            res.status(404).json({message: err.message})
        }
    }


    //update course
    static async updatecourseByid(req,res){
        const  id = req.params.id ;
        let  new_image = "";
        //getting the new image and assining to new image and delete old one 
        if(req.file){
            new_image = req.file.filename;
            try{
                fs.unlinkSync("./uploads/courseImgs/"+req.body.old_image);
            }catch(err){
                console.log("New file error")
                
            }
        }else{
            //when the imgage not updated
            new_image = req.body.old_image;
        }

        const newcourse =req.body;
        newcourse.image = new_image;

        try{
            await Course.findByIdAndUpdate(id,newcourse);
            res.status(200).json({message : 'course updated successfully'})


        }catch(err){
            res.status(404).json({message : err.message})
            console.log("Error")

        }
         
    }

    //delete course
    static async deletecourseByid(req,res){
        //
        const id = req.params.id;
        try{
            const result = await Course.findByIdAndDelete(id);
            //remove imege
            if(result.image != '' ){
                try{
                    fs.unlinkSync('./uploads/courseImgs/'+result.image);
                }catch(err){
                    console.log(err);
                }
            }
            res.status(200).json({message : 'course deleted successfully'})
        } catch(err){
            res.status(404).json({message: err.message})
        }
    }

}