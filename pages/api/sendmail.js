// Variable Declaration
const mail = require("@sendgrid/mail");

// Call Api Key dotenv file
// Set Api Key
const SENDGRID_API_KEY =
    "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";
    mail.setApiKey(process.env.SENDGRID_API_KEY);


// main function send message in your Gmail
export default async (req, res) => {
    const message = `
    Name: ${req.body.name}\r\n   
    Email: ${req.body.email}\r\n
    Phone: ${req.body.phone}\r\n
    Message: ${req.body.message}\r\n
    `;
    try {
        await mail.send({
            to: "maynuddinbhu14grm@gmail.com",
            cc: "mayuddinprogrammer@gmail.com",
            from: "maynuddin@themefie.com",
            subject: "New Message from Maynuddin Bhuiyan",
            html: message.replace(/\r\n/g, "<br>"),
        });
    } catch (error) {
        return res.status(error.statusCode || 500).json({ error: error.message });
    }
    return res.status(200).json('okey');
};

