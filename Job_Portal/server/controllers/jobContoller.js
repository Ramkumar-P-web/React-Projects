import Job from "../models/Job.js";


// Get Jobs
export const getJobs = async (req,res)=>{
    try {
        const jobs = await Job.find({visible:true}).populate({path:'companyId',select:'-password'});

        res.status(200).json({success:true,jobs});

    } catch (error) {
        res.json({
            success:false,
            message: error.message
        })
    }
};

// Get Jobs By ID
export const getJobById = async (req,res)=>{
    try {
        
        const {id} = req.params;
        const job = await Job.findById(id).populate({path:'companyId',select:'-password'});

        if(!job){
            return res.status(500).json({
                success: false,
                message: "Job not found"
            })
        };

        res.status(200).json({job});

    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
};