import Company from "../models/Company.js";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import generateToken from "../utils/generateToken.js";
import Job from "../models/Job.js";

// Register a New Company

export const registerCompany = async (req,res) =>{
     
    const { name, email, password} = req.body;

    const imageFile = req.file;

    if( !name || !email || !password || !imageFile){
        return res.json({success:'false',message:'Missing Details'})
    };

    try {
        
        const companyExists = await Company.findOne({email});

        if(companyExists){
          return  res.json({sucess:"false",message:"Company already registered"});
        }
       
        // Encypting Password using salt and bcrypt

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password,salt);

        const imageUpload = await cloudinary.uploader.upload(imageFile.path);

        const company = await Company.create({
            name,
            email,
            password: hashedPassword,
            image: imageUpload.secure_url
        });

        return res.status(200).json({
            success: true,
            company: {
                _id: company._id,
                name: company.name,
                image: company.image,
                email: company.email,
            },
            token: generateToken(company._id)
        })

        

    } catch (error) {
        res.status(400).json({success:false,message: error.message})
    }
};

// Login company

export const loginCompany = async (req,res) =>{

       const { email, password} = req.body;

       try {
        const company = await Company.findOne({email});

        if(bcrypt.compare(password,company.password)){
            res.status(200).json({
                success: true,
                company: {
                     _id: company._id,
                name: company.name,
                image: company.image,
                email: company.email,
                },
                token: generateToken(company._id)
            })
        }else{
            res.status(201).json({
                success: false,
                message: "Invalid email OR password"
            })
        }
       } catch (error) {
         res.json({success:false, message: error.message})
       }
};

// Get Company data

export const getCompanyData = async (req,res) =>{

};

// Post new job

export const postJob = async (req,res)=>{
   const { title, location, description, salary, level, category } = req.body;
   const companyId = req.company._id;
   
  try {

    const newJob = new Job({
        title, 
        description,
        location,
        category,
          salary,
          companyId,
          level,
          date: Date.now()
    });

    await newJob.save();

    res.status(200).json({success:true,newJob});
    
  } catch (error) {
    res.json({
        success: false,
        message: error.message
    })
  }
};

// Get Company Job Applicants

export const getCompanyJobApplicants = async (req,res) => {

};

// Get Company Posted Jobs

export const getCompanyPostedJobs = async (req,res) =>{

};

// Change Job Application Status

export const changeJobApplicationStatus = async (req,res) =>{

};

// Change Job Visiblity

export const changeJobVisiblity = async (req,res) =>{

};