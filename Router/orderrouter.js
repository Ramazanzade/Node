const express = require('express');
const router = express.Router();
const {ordercontruler}=require('../Controlles/ordercontruler')

router.get('/', ordercontruler.getAll)
router.get('/:id', ordercontruler.getId)
router.post('/', ordercontruler.add)
router.delete('/:id', ordercontruler.deleteId)

module.exports=router