const express= require('express');

const router= express.Router();
const auth = require('../middleware/is-auth');
const homeController = require('../controllers/home');
router.get('/',homeController.getCards);

router.get('/animeEps/:id',auth,homeController.getAnimeEps);

module.exports=router;