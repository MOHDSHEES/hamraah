import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const email = "hamraah.office@gmail.com";
const password = "PASSWORD=rohan007@";
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: password,
  },
});
export default transporter;
