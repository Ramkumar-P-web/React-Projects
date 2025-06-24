import pkg from 'svix';
import User from '../models/User.js';

const { webhook } = pkg;

// API Controller Fuction to Manage Clerk User with Database

export const clerkwebhooks = async (req,res) =>{
     try {
        
        // Create Svix Instance with clerkwebhook secret
         const whook = new webhook(process.env.CLERK_WEBHOOK_SECRET);

        //Verifying headers
        await whook.verify(JSON.stringyfy(req.body),{
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        });

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
                res.json({});
                break;
            }
            case 'user.updated':{
                 const userData = {
                    name: data.first_name +" "+ data.last_name,
                    email: data.email_addresses[0].email_address,
                    image: data.image_url,
                }

                await User.findByIdAndUpdate(data.id,userData);
                res.json({});
                break;
    
            }
            case 'user.deleted':{

                await User.findByIdAndDelete(data.id);
                res.json({});
                break;

            }
            default:
                break;
        }

     } catch (error) {
        console.log(error);
        res.json({success: false, message: 'Webhook Error'});
     }
}