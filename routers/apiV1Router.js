const express = require('express');
const routerFruit = require('./fruitRouter');
const routerUser = require('./userRouter');

const router = express.Router();

router.use('/fruit', routerFruit);
router.use('/auth', routerUser);

module.exports = router;