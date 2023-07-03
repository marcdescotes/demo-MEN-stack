const express = require('express');
const routerFruit = require('./fruitRouter');
const userRouter = require('./routerUser');

const router = express.Router();

router.use('/fruit', routerFruit);
router.use('/auth', userRouter);

module.exports = router;