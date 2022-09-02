import nodemailer from "nodemailer";

export default async (req, res) => {
  const { email } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "elaundarysolution@gmail.com",
      pass: "gmdedxwumzplaoic",
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "info@omrasolutions.com",
      cc: "sachin@omrasolutions.com",
      bcc: "alka@omrasolutions.com",
      bcc: "anupam.singh@epicglobal.co.in",

      subject: `You successfully subscribe our newslater`,
      html: `<h1>Thank you for the subscription!</h1>
        <p>We will try to find only quality content based on our new recommendation system. And now we already have something interesting for you:</p>
      `,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
  return res.status(200).json({ tested: "OKAY" });
};
