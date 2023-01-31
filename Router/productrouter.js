const express = require('express');
const router = express.Router();
// const { body } = require('express-validator');
const {productcontruler}=require('../Controlles/productcontruler')

router.get('/', productcontruler.getAll);
router.post('/', productcontruler.add);
router.get('/:id', productcontruler.getId);
router.delete('/:id', productcontruler.deleteId);


module.exports = router
