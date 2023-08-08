const mongoose = require ('mongoose');
const schema = mongoose.Schema;

const AdminSchema = new schema ({
    Lastname :String ,
    Firstname :String ,
    Email :String ,
    Password :String ,
    Phone :Number ,
    Role :String ,
    Age : Date  },
    {timestamps :true})




module.exports =mongoose.model('admin', AdminSchema)