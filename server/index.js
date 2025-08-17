const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express(); 

app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: process.env.DB_USER,
    host: 'localhost',
    database: 'portfolio_db',
    password: process.env.DB_PASS,
    port: 5432,
});

app.post("/submit", async (req, res) => {  
    const {name, email, message, phone_number } = req.body;

    try {
        await pool.query(
            "INSERT INTO form_submissions (name, email, message, phone_number) VALUES ($1, $2, $3, $4)",
            [name, email, message, phone_number]
        );

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO,
            subject: "New Form Submission on noahraffensparger.com",
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nPhone Number: ${phone_number}`,
        });

        res.status(200).json({success: true, message: "success"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong'});
    }
});

app.listen(5000, () => console.log('server running on http://localhost:5000'));