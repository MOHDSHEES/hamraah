import express from "express";
// import bodyParser from "body-parser";
import transporter from "./nodemailer.js";
import path from "path";
import http from "http";
import sgMail from "@sendgrid/mail";

const router = express.Router();
const PORT = process.env.PORT || 5000;
// app.use(bodyParser.json());
const __dirname = path.resolve();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "./frontend/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "./frontend/build/index.html"))
);

// app.get("/api", (req, res) => {
//   res.send("hello");
// });

// send email for contact page
app.post("/api/contact/sendemail", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  // const templates = {
  //   contactUs: "d-5c313c039a8b4c288e9dc60e28d71871",
  //   contact_us: "d-741d11351cc14fe997022ec800651385",
  // };
  const msg = {
    to: "hamraah.office@gmail.com", // Change to your recipient
    from: "hamraah.office@gmail.com", // Change to your verified sender
    subject: subject,
    html: `
    <p> Name: ${name}</p>
    <p> Email: ${email}</p>
    <p> Subject: ${subject}</p>
     
     <p> Message: <p/>
      ${message} 
    
      
      `,
    // templateId: templates["contact-us"],

    // dynamic_template_data: {
    //   name: name,
    //   // subject: subject,
    //   email: email,
    //   message: message,
    // },
  };
  sgMail
    .send(msg)
    .then(() => {
      res.send({
        success: true,
        message:
          " ✔️  Thanks for contacting us. We will get back to you shortly",
      });
    })
    .catch((error) => {
      res.status(500).send({
        success: false,
        message: " ❌  Something went wrong. Try again later",
      });
    });
});

// send email for contact page
// app.post("/api/contact/sendemail", async (req, res) => {
//   try {
//     const name = req.body.name;
//     const email = req.body.email;
//     const subject = req.body.subject;
//     const message = req.body.message;
//     // const details = JSON.stringify(req.body.details);

//     const mailOptions = {
//       from: "hamraah.office@gmail.com", // sender address
//       to: "info.hamraah@gmail.com", // list of receivers

//       subject: subject, // Subject line
//       html: `
//       <p> Name: ${name}</p>
//       <p> Email: ${email}</p>
//       <p> Subject: ${subject}</p>

//        <p> Message: <p/>
//         ${message}

//         `,
//     };

//     transporter.sendMail(mailOptions, function (err, info) {
//       if (err) {
//         console.log(err);
//         res.status(500).send({
//           success: false,
//           message: " ❌  Something went wrong. Try again later",
//         });
//       } else {
//         res.send({
//           success: true,
//           message:
//             " ✔️  Thanks for contacting us. We will get back to you shortly",
//         });
//       }
//     });
//   } catch (error) {
//     console.log();
//     res.send({ msg: error.message });
//   }
// });

// send email for pledge
app.post("/api/pledge/sendemail", async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const mobileno = req.body.mobileno;

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: "hamraah.office@gmail.com", // Change to your recipient
    from: "hamraah.office@gmail.com", // Change to your verified sender
    subject: subject,
    html: `
      <p> Name: ${name}</p>
      <p> Email: ${email}</p>
  
       
       <p> Mobileno: ${mobileno} <p/>
      
        
        `,
  };
  sgMail
    .send(msg)
    .then(() => {
      res.send({
        success: true,
        message: " ✔️  Sucessfully Sent ",
      });
    })
    .catch((error) => {
      res.status(500).send({
        success: false,
        message: " ❌  Something went wrong. Try again later",
      });
    });
});

// send email for regester for a walk
app.post("/api/walkingreg/sendemail", async (req, res) => {
  const subject = req.body.subject;
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: "hamraah.office@gmail.com", // Change to your recipient
    from: "hamraah.office@gmail.com", // Change to your verified sender
    subject: subject,
    html: `
      <p> Name: ${req.body.name}</p>
      <p> Email: ${req.body.email}</p>
      <p> Mobileno: ${req.body.mobileno} <p/>
      <p> Nationality:  ${req.body.nationality} </p>
      <p> No of participants: ${req.body.people} </p>
      <p> Date: ${req.body.date}</p>
      <p> Message:  ${req.body.message} </p>
        `,
  };
  sgMail
    .send(msg)
    .then(() => {
      res.send({
        success: true,
        message: " ✔️  Sucessfully Sent ",
      });
    })
    .catch((error) => {
      res.status(500).send({
        success: false,
        message: " ❌  Something went wrong. Try again later",
      });
    });
});

// app.listen(5000, () => {
//   console.log("server running");
// });
const httpServer = http.Server(app);
httpServer.listen(PORT, () => {
  console.log(`Serve at http://localhost:${PORT}`);
});
