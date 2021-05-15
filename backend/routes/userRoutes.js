const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

//Routes

router.get('/', (req, res) => res.send('Hello world'));
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ msg: 'Please fill all the fields' });
    }

    const user = await userSchema.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(password, salt);

    const newUser = await new userSchema({
      name,
      email,
      password: passwordHashed,
    });

    newUser.save();

    res.json(newUser);

    if (password.length < 6) {
      return res
        .status(400)
        .json({ msg: 'Password must have at least 6 characters.' });
    }

    res.json({ msg: 'Success' });
  } catch (error) {
    console.log(error);
  }
});

router.get('/login', (req, res) => res.send('Hello from Login'));

module.exports = router;
