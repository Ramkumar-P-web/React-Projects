import pkg from 'svix';
import User from '../models/User.js';

const { Webhook } = pkg;

// API Controller Fuction to Manage Clerk User with Database

export const clerkwebhooks = async (req,res) =>{
     try {
        
        // Create Svix Instance with clerkwebhook secret
         const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
         const payload = JSON.stringify(req.body);
         const headers = {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        }

        //Verifying headers
        await whook.verify(payload,headers);

        //Getting data req.body

        const { data ,type} = req.body;

        //Switch case different events
        switch(type){
            case 'user.created':{
                 
                const userData = {
                    _id: data.id,
                    name: data.first_name +" "+ data.last_name,
                    email: data.email_addresses[0].email_address,
                    image: data.image_url,
                    resume: ''
                }

                await User.create(userData);
                res.status(200).json({});
                break;
            }
            case 'user.updated':{
                 const userData = {
                    name: data.first_name +" "+ data.last_name,
                    email: data.email_addresses[0].email_address,
                    image: data.image_url,
                }

                await User.findByIdAndUpdate(data.id,userData);
                res.status(200).json({});
                break;
    
            }
            case 'user.deleted':{

                await User.findByIdAndDelete(data.id);
                res.status(200).json({});
                break;

            }
            default:
                break;
        }

     } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: 'Webhook Error'});
     }
}