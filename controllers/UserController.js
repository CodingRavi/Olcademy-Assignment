const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// get Welcome page
exports.getHomepage = (req, res) => {
  res.send("welcome to Home Page");
};

// register user route
exports.Register = async (req, res) => {
  // hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  // create a new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    genter: req.body.genter,
    dob: req.body.dob,
  });
  try {
    const saveUser = await user.save();
    res.send(saveUser);
    // res.redirect('/');
  } catch (error) {
    res.status(400).send(error);
  }
};



// register user json
