const Order=require("../models/orderModel")
const Product = require("../models/productModels");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncError = require("../middleware/catchAsyncError");


//create new Order

exports.newOrder=catchAsyncError(async(req,res,next)=>{
    exports.newOrder = catchAsyncErrors(async (req, res, next) => {
        const {
          shippingInfo,
          orderItems,
          paymentInfo,
          itemsPrice,
          taxPrice,
          shippingPrice,
          totalPrice,
        } = req.body;
      
        const order = await Order.create({
          shippingInfo,
          orderItems,
          paymentInfo,
          itemsPrice,
          taxPrice,
          shippingPrice,
          totalPrice,
          paidAt: Date.now(),
          user: req.user._id,
        });
      
        res.status(201).json({
          success: true,
          order,
        });
      });
      


})
