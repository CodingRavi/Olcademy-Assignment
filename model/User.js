const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Username is required"],
        maxlength: [20, "Username must be less than 20 characters"],
        minlength: [4, "Username must be at least 4 characters"],
      },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        validate: {
            validator: function (value) {
                return validator.isEmail(value);
            },
            message: function () {
                return "Email is invalid";
            },
        },
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters"],
    },
    genter : {
        type: String,
    },
    dob : {
        type: Date,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },

});


module.exports = mongoose.model("User", userSchema);

