const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => res.send('Hello world'));
router.get('/register', (req, res) => res.send('Hello from register'));
router.get('/login', (req, res) => res.send('Hello from Login'));

module.exports = router;
