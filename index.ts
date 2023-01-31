const express = require('express');
const { default: mongoose } = require('mongoose');
const {product, category,  supplier} = require('./Modules/product')
const{ orders,
    shippers,
    orderdetails,
    payment}= require('./Modules/orders')
const {costumer} =require('./Modules/costumer')

const  productrouter =require('./Router/productrouter')
const orderrouter =require('./Router/orderrouter')
const costumerrouter =require('./Router/costumerrouter')


const Nuxt =express()

Nuxt.use(express.json());
Nuxt.use(express.urlencoded())

mongoose.connect('mongodb+srv://Nizam:Niza2002m.@cluster0.t5dydtz.mongodb.net/Nuxt')
    .then(res => {
        console.log('Success!!');
    })
    .catch(err => {
        console.log('Error', err);
    })


    Nuxt.use('/api/product', productrouter)
    Nuxt.use('/api/order', orderrouter)
    Nuxt.use('/api/costumer', costumerrouter)

    Nuxt.listen(5050)
