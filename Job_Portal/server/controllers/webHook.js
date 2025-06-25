import pkg from 'svix';
import User from '../models/User.js';

const { Webhook } = pkg;

export const clerkwebhooks = async (req, res) => {
    try {
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
        const payload = JSON.stringify(req.body);
        const headers = {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        };

        await whook.verify(payload, headers);

        const { data, type } = req.body;
        console.log("Received event type:", type);

        switch (type) {
            case 'user.created': {
                const userData = {
                    _id: data.id,
                    name: `${data.first_name} ${data.last_name}`,
                    email: data.email_addresses?.[0]?.email_address || '',
                    image: data.image_url,
                    resume: ''
                };
                await User.create(userData);
                return res.status(200).json({});
            }

            case 'user.updated': {
                const userData = {
                    name: `${data.first_name} ${data.last_name}`,
                    email: data.email_addresses?.[0]?.email_address || '',
                    image: data.image_url,
                };
                await User.findByIdAndUpdate(data.id, userData);
                return res.status(200).json({});
            }

            case 'user.deleted': {
                await User.findByIdAndDelete(data.id);
                return res.status(200).json({});
            }

            default:
                return res.status(200).json({ message: 'Event type not handled' });
        }

    } catch (error) {
        console.error("Webhook error:", error);
        return res.status(500).json({ success: false, message: 'Webhook Error' });
    }
};
