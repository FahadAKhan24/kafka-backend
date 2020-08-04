var express = require('express');

var OrderCtrl = require('../controllers/order-ctrl');

var router = express.Router();

//router.post('/order', OrderCtrl.createOrder);
//router.put('/order/:id', OrderCtrl.updateOrder);

router.post('/', OrderCtrl.createOrder);
router.put('/:id', OrderCtrl.updateOrder);


router.get("/", function(req, res, next) {
    res.send("order API is working properly");
});
//router.delete('/movie/:id', MovieCtrl.deleteMovie)
//router.get('/movie/:id', MovieCtrl.getMovieById)
//router.get('/movies', MovieCtrl.getMovies)

module.exports = router;