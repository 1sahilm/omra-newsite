import nodemailer from "nodemailer";

export default async (req, res) => {
  const { fname, lname, email, phone, company } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // user: 'shyamattryy@gmail.com',
      // pass: 'zsibiqyspqoncofw'
      user: "elaundarysolution@gmail.com",
      pass: "gmdedxwumzplaoic",
    },
  });

  try {
    await transporter.sendMail({
      from: email,

      to: "info@omrasolutions.com",
      cc: "sachin@omrasolutions.com",
      bcc: "elaundrysolution@gmail.com",
      bcc: "omra.digitalsolution@gmail.com",

      // bcc: "alka@omrasolutions.com",
      // bcc: "anupam.singh@epicglobal.co.in",
      // bcc: "sahil.mishra@epicglobal.co.in",
      // bcc: "sahil.mishra@epicglobal.co.in",

      subject: `Voice Process ${fname + " " + lname}`,
      html: `<p>You have a contact form submission</p>
      <p><strong>Name: </strong> ${fname + " " + lname}</p>
        <p><strong>Email: </strong> ${email}</p>
        <p><strong>Company: </strong> ${company}</p>
        <p><strong>Phone: </strong> ${phone}</p>
        
      `,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
  return res.status(200).json({ tested: "OKAY" });
};
