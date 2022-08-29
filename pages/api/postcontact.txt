
import connectMongo from '../../utils/dbConnect';
import Contact from '../../Schema/Contactschema';

// /**
//  * @param {import('next').NextApiRequest} req
//  * @param {import('next').NextApiResponse} res
//  */
connectMongo()
export default async function (req, res) {
  const { method } = req;
  

  if (method === "GET") {
    const contact= await Contact.find({})
    return res.status(200).json(contact);
  }

  if (method === "POST") {
    const { body } = req;
    const contact= await Contact.create(body)
    console.log({"hello":contact})
  
    return res.status(200).json(contact);
  }
}
