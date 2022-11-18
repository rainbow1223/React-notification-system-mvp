import nodemailer from 'nodemailer';
import user from './models/user.js';

const sendMails = async (text) => {
    const users = await user.find({});
    users.forEach(user => {
        sendMail(user.email, text);
    });
}

const sendMail = (email, text) => {
    var transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com',
        port: 587,
        secureConnection: false,
        tls: {
            ciphers: 'SSLv3'
        },
        auth: {
            user: 'funnylife8901@outlook.com',
            pass: 'master2033'
        },
    });

    var mailOptions = {
        from: 'funnylife8901@outlook.com',
        to: email,
        subject: text,
        text: ''
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

export default sendMails;