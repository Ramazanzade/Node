const { validationResult } = require("express-validator");
const {product} =require('../Modules/product')



const productcontrule={
    getAll:(req,res)=>{
        product.find({}, (err, docs) => {
            if (!err) {
                res.status(201).json(docs);
            }
            else {
                res.status(500).json(err);
            }
        })
    },

    add:(req,res)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });  
        }

let productadd=new product({
     // productID:Number,
     SKU :req.body.SKU,
     IDSKU:req.body.IDSKU,
     VendorPrpductID:req.body.VendorPrpductID,
     ProductName:req.body.ProductName,
     ProductDescription:req.body.ProductDescription,
     SuppllerID:req.body.SupplierID,
     CatagoryID:req.body.CatagoryID,
     QuantityPerUnit:req.body.QuantityPerUnit,
     UnitPrice:req.body.UnitPrice,
     MSRP:req.body.MSRP,
     AvailableSize:req.body.AvailableSize,
     AvailableColors:req.body.AvailableColors,
     Size:req.body.Size,
     Color:req.body.Color,
     Discount:req.body.Discount,
     UnitWeight:req.body.UnitWeight,
     UnitStock:req.body.UnitStock,
     ReorderLevel:req.body.ReorderLevel,
     ProductAvailable:req.body.ProductAvailable,
     DiscountAvailable:req.body.DiscountAvailable,
     CurrentOrder:req.body.CurrentOrder,
     Picture:req.body.Picture,
     Ranking:req.body.Ranking,
     Note:req.body.Note,
})

productadd.save((err,doc)=>{
    if(!err){
        res.status(201).json(doc)
    }else{
        res.status(500).json(err)
    }
})
    },

getId:(req,res)=>{

    let id =req.params.id
    product.findOne({ isdeleted: false, id: id },(err, doc)=>{
        if(!err){
            res.status(201).json(doc)
        }else{
            res.status(500).json(err)
        }
    })
},

deleteId:(req, res)=>{
    let id =req.params.id
    product.findById(id, (err, doc) => {
        if (!err) {
            doc.isdeleted = true;
            doc.save();
            res.json(doc);
        }
        else
            res.status(500).json(err)
    })
}




    
}


module.exports={
    productcontrule
}