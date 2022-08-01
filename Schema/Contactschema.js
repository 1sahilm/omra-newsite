import mongoose from "mongoose";

const ContactSchema= new mongoose.Schema({
    First_Name:{ type:String,required:false},
    Last_Name:{ type:String,required:false},

    Email_Address:{ type:String,required:false},

    Phone:{ type:Number,required:false},

    Job_Title:{ type:String,required:false},

    
    Organisation:{ type:String,required:false},

    Enquiry_Type:{ type:String,required:false},
    Industry:{ type:String,required:false},
    Enquiry_Type:{ type:String,required:false},
    Comments:{ type:String,required:false},
    // timestamp:{type:Date,default:Date.now()}


})

// const  Contacts=mongoose.model("contact",ContactSchema)
const  Contacts =mongoose.models?.contact || mongoose.model("contact", ContactSchema);
export default Contacts