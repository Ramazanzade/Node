const {default :mongoose} = require('mongoose')
const {Schema} = mongoose


const costumerSchema = new Schema({
// CustomerID:Number,
FistName:String,
LastName:String,
Class:Number || String,
Room:Number || String,
Building:String,
Address1:String || String,
Address2:String || String,
City:String,
State:String,
PostalCode:Number || String,
Country:String,
Phone:Number,
Email:String,
VoiceMail:String,
Password:Number || String,
CreditCart:Number,
CreditCardTypeID:Number,
CardExpMo:String,
CardExpYe:String,
BillingAddress:String,
BillingCity:String,
BillingRegion:String,
BillingPostalCode: Number || String,
BillingCountry:String,
ShipeCity:String,
ShipeAdsress:String,
ShipeRegion:String,
ShipePostalCode:Number || String,
ShipeCountry:String,
DateEnter:Number

})


const costumer=mongoose.model('costumer', costumerSchema)



module.exports={
    costumer
}