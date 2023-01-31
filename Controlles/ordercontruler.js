const { validationResult } = require("express-validator");
const {orders} =require('../Modules/orders')



const ordercontruler={
    getAll:(req,res)=>{
        orders.find({}, (err, docs) => {
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

let ordersadd=new orders({
     // OrderId:Number,
    CustomerID:req.boyd.CustomerID,
    OrderNumber:req.boyd.OrderNumber,
    PaymentNumber:req.boyd.PaymentNumber,
    OrderDate:req.boyd.OrderDate,
    ShipDate:req.boyd.ShipDate,
    RequiredDate:req.boyd.RequiredDate,
    Freight:req.boyd.Freight,
    SalesTx:req.boyd.SalesTx,
    Timestamp:req.boyd.Timestamp,
    TransactStatus:req.boyd.TransactStatus,
    Errloc:req.boyd.Errloc,
    ErrLoc:req.boyd.ErrLoc,
    Fulfilled:req.boyd.Fulfilled,
    Deleted:req.boyd.Deleted,
    Paid:req.boyd.Paid,
    PaymentDate:req.boyd.PaymentDate,
})

ordersadd.save((err,doc)=>{
    if(!err){
        res.status(201).json(doc)
    }else{
        res.status(500).json(err)
    }
})
    },

getId:(req,res)=>{

    let id =req.params.id
    orders.findOne({ isdeleted: false, id: id },(err, doc)=>{
        if(!err){
            res.status(201).json(doc)
        }else{
            res.status(500).json(err)
        }
    })
},

deleteId:(req, res)=>{
    let id =req.params.id
    orders.findById(id, (err, doc) => {
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
    ordercontruler
}