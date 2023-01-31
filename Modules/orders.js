const {default:mongoose}=require('mongoose')
const {Schema}=mongoose



const ordersSchema=new Schema({
    // OrderId:Number,
    CustomerID:Number,
    OrderNumber:Number,
    PaymentNumber:Number,
    OrderDate:Number,
    ShipDate:Number,
    RequiredDate:Number,
    Freight:String,
    SalesTx:String,
    Timestamp:String,
    TransactStatus:String,
    Errloc:String,
    ErrLoc:String,
    Fulfilled:String,
    Deleted:Boolean,
    Paid:String,
    PaymentDate:Number,
shippers:{
    type:'ObjectId',
    ref:'shippers'
},
orderdetails:{
    type:'ObjectId',
    ref:'orderdetails'
},
payment:{
    type:'ObjectId',
    ref:'payment'
}

})


const  shippersSchema=new Schema({
    // ShipperID:Number,
    CompanyName:String,
    Phone:Number
})


const orderdetailsSchema= new Schema({
    // OrderId:Number,
    ProductID:Number,
    OrderNumber:Number,
    Price:Number,
    Quantity:Number,
    Discount:Number,
    Total:Number,
    IDSKU:Number,
    Size:Number,
    Fulfilled:Number,
    Color:String,
    ShipeDate:Number,
    OrderDetailId:Number,
    BillDate:Number
})

const paymentSchema= new Schema({
    // PaymentId:Number,
    PayementType:String,
    Allowed:String
})

// orders.find({}).populate('shippers orderdetails  payment ').exec((err,docs) => {
//         console.log('Docs', docs);})

const orders =mongoose.model('orders',orderdetailsSchema)
const shippers=mongoose.model('shippers',shippersSchema)
const orderdetails =mongoose.model('orderdetails', orderdetailsSchema)
const payment=mongoose.model('payment', paymentSchema)

module.exports={
    orders,
    shippers,
    orderdetails,
    payment
}