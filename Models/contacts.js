const mongoose = require("mongoose");

const contactSchema = {
 name:String,
 designation:String,
 company : String,
 industry: String,
 email:String,
 phonenumber:Number,
 country: String

}

const Contacts = mongoose.model("posts", contactSchema);

module.exports = Contacts;