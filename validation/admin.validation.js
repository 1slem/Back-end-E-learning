const isEmpty = require("./isEmpty");
const validator = require("validator");

module.exports = function ValidateAdmin(data) {
    let errors = {};
    data.Lastname = !isEmpty(data.Lastname) ? data.Lastname : "";
   
    data.Email = !isEmpty(data.Email) ? data.Email : "";
    data.Password = !isEmpty(data.Password) ? data.Password : "";
    data.Phone = !isEmpty(data.Phone) ? data.Phone : "";
    data.Role = !isEmpty(data.Role) ? data.Role : "";
    data.Age = !isEmpty(data.Age) ? data.Age : "";

    if (validator.isEmpty(data.Lastname)) {
        errors.Lastname = "Required Lastname";
    }

    
    if (!validator.isEmail(data.Email)) {
        errors.Email = "Format Email required";
    }
    if (validator.isEmpty(data.Email)) {
        errors.Email = "Required Email";
    }

    if (validator.isEmpty(data.Password)) {
        errors.Password = "Required Password";
    }
    
    if (validator.isEmpty(data.Phone)) {
        errors.Phone = "Required phone";
    }
    if (validator.isEmpty(data.Role)) {
        errors.Role = "Required Role";
    }
    if (validator.isEmpty(data.Age)) {
        errors.Age = "Required Age";
    }
    isEmpty

    return {
        errors,
        isValid: isEmpty(errors)
    }
};