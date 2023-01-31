// import { model } from "mongoose"

const {default:mongoose } =require('mongoose')
const {Schema}= mongoose


const productSchema = new Schema ({
    // productID:Number,
    SKU :String,
    IDSKU:Number,
    VendorPrpductID:Number,
    ProductName:String,
    ProductDescription:String,
    // SuppllerID:Number,
    // CatagoryID:Number,
    QuantityPerUnit:Number,
    UnitPrice:Number,
    MSRP:String,
    AvailableSize:Number,
    AvailableColors:String,
    Size:Number,
    Color:String,
    Discount:Number,
    UnitWeight:Number,
    UnitStock:Number,
    ReorderLevel:Number,
    ProductAvailable:String,
    DiscountAvailable:Number,
    CurrentOrder:Number,
    Picture:String,
    Ranking:Number,
    Note:String,
    category: {
        type:'ObjectId',
        ref:'category'
    },
    supplier: {
        type:'ObjectId',
        ref:'supplier'
    }

})


const supplierSchema = new Schema({
    // SupplierID:Number,
CompanyName:String,
ContackName:String,
ContactName:String,
ContactTitle:String,
Address1:String,
Address2:String,
City:String,
State:String,
PostalCode:Number,
Country:String,
Phone:Number,
Fax:String,
Email:String,
Url:String,
PaymentMethods:String,
DiscountType:String,
TypeGoods:String,
Notes:String,
DiscountAvailable:String,
CurrentOrder:String,
Logo:String,
CustomerID:Number,
SizeUrl:String
})

const categorySchema =new Schema({
    // CategoryID:Number,
    CategoryName:String,
    Description:String,
    Picture:String,
    Active:Boolean
})


// product.find({}).populate('category , supplier').exec((err,docs) => {
//         console.log('Docs', docs);})

const product = mongoose.model('product', productSchema)
const category = mongoose.model('category', categorySchema)
const supplier =mongoose.model('supplier',supplierSchema)


module.exports={
    product,
    category,
    supplier
}