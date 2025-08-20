import express from 'express';
import {userOrder, updateStatus,allOrders,placeOrder,placeOrderRazorpay,placeOrderStripe, verifyStripe} from "../controllers/orderController.js"
import adminAuth from "../middleware/adminAuth.js"
import authUser from '../middleware/auth.js';

const orderRouter = express.Router()


// Admin features
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/staus',adminAuth,updateStatus)


// Payment Features
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)

// User features
orderRouter.post('/userorders',authUser,userOrder)


// verify Payment
orderRouter.post('/verifyStripe',authUser,verifyStripe)

export default orderRouter;


