const express = require('express');
const router = express.Router();
const {costumercontruller}=require('../Controlles/costumercontruller')

router.get('/', costumercontruller.getAll)
router.get('/:id', costumercontruller.getId)
router.post('/', costumercontruller.add)
router.delete('/:id', costumercontruller.deleteId)

module.exports=router