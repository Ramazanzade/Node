const { validationResult } = require("express-validator");
const {costumer} =require('../Modules/costumer')



const costumercontruler={
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

let customeradd=new customer({
   // CustomerID:Number,
FistName:req.body.FistName,
LastName:req.body.LastName,
Class:req.body.Class ,
Room:req.body.Room,
Building:req.body.Building,
Address1:req.body.Address1 ,
Address2:req.body.Address2 ,
City:req.body.City,
State:req.body.State,
PostalCode:req.body.PostalCode ,
Country:req.body.Country,
Phone:req.body.Phone,
Email:req.body.Email,
VoiceMail:req.body.VoiceMail,
Password:req.body.Password ,
CreditCart:req.body.CreditCart,
CreditCardTypeID:req.body.CreditCardTypeID,
CardExpMo:req.body.CardExpMo,
CardExpYe:req.body.CardExpYe,
BillingAddress:req.body.BillingAddress,
BillingCity:req.body.BillingCity,
BillingRegion:req.body.BillingRegion,
BillingPostalCode: req.body.BillingPostalCode ,
BillingCountry:req.body.BillingCountry,
ShipeCity:req.body.ShipeCity,
ShipeAdsress:req.body.ShipeAdsress,
ShipeRegion:req.body.ShipeRegion,
ShipePostalCode:req.body.ShipePostalCode ,
ShipeCountry:req.body.ShipeCountry,
DateEnter:req.body.DateEnter

})

customeradd.save((err,doc)=>{
    if(!err){
        res.status(201).json(doc)
    }else{
        res.status(500).json(err)
    }
})
    },

getId:(req,res)=>{

    let id =req.params.id
    costumer.findOne({ isdeleted: false, id: id },(err, doc)=>{
        if(!err){
            res.status(201).json(doc)
        }else{
            res.status(500).json(err)
        }
    })
},

deleteId:(req, res)=>{
    let id =req.params.id
    customer.findById(id, (err, doc) => {
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
     costumercontruler

}