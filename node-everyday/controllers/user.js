const User = require('../models/user');

exports.getUsers = async (req, res, next) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (err) {
      console.error(err);
      next(err);
    }
};

exports.postUser = async (req, res, next) => {
try {
    const user = await User.create({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    age: req.body.age,
    });
    console.log(user);
    res.status(201).json(user);
} catch (err) {
    console.error(err);
    next(err);
}
};




