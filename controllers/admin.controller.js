const { json } = require('express')
const Admin = require('../models/admin.models')
const ValidateAdmin = require('../validation/admin.validation')


const AddAdmin = async (req, res) => {
    const { errors, isValid } = ValidateAdmin(req.body);
    try {
        if (!isValid) {
            res.status(404).json(errors);
        } else {
            await Admin.findOne({ Email: req.body.Email }).then(async (exist) => {
                if (exist) {
                    errors.Email = "Admin Exist";
                    res.status(404).json(errors);
                } else {
                    await Admin.create(req.body);
                    res.status(201).json({ message: "Admin added with success" });
                    
                }
            });
        }
    } catch (error) {
        console.log(error.message);
    }
};


const FindAllAdmin = async (req, res) => {
    try {
        const data = await Admin.find()
        res.status(201).json(data)
    }
    catch (error) {
        console.log(error.message)
    }
}

const FindOneAdmin = async (req, res) => {
    try {
        const data = await Admin.findOne({ _id: req.params.id })
        res.status(201).json(data)
    }
    catch (error) {
        console.log(error.message)
    }
}

const UpdateAdmin = async (req, res) => {
    try {
        const data = await Admin.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true }
        )
        res.status(201).json(data)
    }
    catch (error) {
        console.log(error.message)
    }
}


const DeleteAdmin = async (req, res) => {
    try {
        const data = await Admin.deleteOne(
            { _id: req.params.id }
        )
        res.status(201).json({ message: 'admin deleted' })
    }
    catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    AddAdmin,
    FindAllAdmin,
    FindOneAdmin,
    UpdateAdmin,
    DeleteAdmin
    
}