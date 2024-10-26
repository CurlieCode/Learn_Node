const contactModel = require('../models/Contact');


async function createContact(req,res){
    const {name, email, phone} = req.body;
   const contact = new contactModel({
    name, email, phone
   })
   await contact.save();
   res.json(contact);
}

async function getContact(req,res){
    const contacts = await contactModel.find();
    res.json(contacts);
}

async function updateContact(req,res) {
    const {name, email, phone} = req.body;
    const update = await contactModel.findByIdAndUpdate(req.params.id,{name,email,phone},{new:true});
    res.json(update)
}

async function deleteContact(req,res) {
    await contactModel.findByIdAndDelete(req.params.id);
    res.json({message:"Contact Deleted Successfully"})
    
}
module.exports= {createContact, getContact,updateContact,deleteContact};