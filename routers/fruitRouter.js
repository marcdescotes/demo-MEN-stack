const express = require('express');
const router = express.Router();

const FruitCtrl = require("../controllers/Fruits.js")
const auth = require("../middleware/authenticator.js")


// Définition des routes
router.post('/', auth, FruitCtrl.saveFruitInstance);
router.get('/', auth, FruitCtrl.getFruitCollection);
router.get('/poids/:value', auth, FruitCtrl.findFruitByPoids);

// Exportation du routeur
module.exports = router;