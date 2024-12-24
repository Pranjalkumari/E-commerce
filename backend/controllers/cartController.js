import userModel from "../models/userModel.js";





const addToCart = async (req, res) => {
    try {
       const { userId, itemId, size } = req.body;
 
       const userData = await userModel.findById(userId);
 
 
       let cartData = userData.cartData;
 
       if (cartData[itemId]) {
          if (cartData[itemId][size]) {
             cartData[itemId][size] += 1; // Increment the quantity
          } else {
             cartData[itemId][size] = 1; // Set initial quantity
          }
       } else {
          cartData[itemId] = {};
          cartData[itemId][size] = 1; // Set initial size and quantity
       }
 
       // Ensure that cartData is updated properly
       await userModel.findByIdAndUpdate(userId, { cartData });
 
       res.json({ Success: true, message: 'Added to cart' });
    } catch (error) {
       console.log(error);
       res.json({ Success: false, message: error.message });
    }
 };
 

//update user cart cart
const updateCart = async (req, res)=>{

    try {

        const {userId , itemId , size, quantity} = req.body

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        cartData[itemId][size] = quantity

        await userModel.findByIdAndUpdate(userId, {cartData})

        res.json({Success: true, message:'Cart updated'})
    
        
    } catch (error) {
        console.log(error)
    res.json({Success: false , message: error.message})
    
    }
    
}

//get user cart data
const getUserCart = async (req, res)=>{

    try {
        
        const {userId} = req.body

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;
        

        res.json({Success: true, cartData})
    } catch (error) {
        console.log(error)
    res.json({Success: false , message: error.message})
    }
    
}

export {addToCart, updateCart, getUserCart}