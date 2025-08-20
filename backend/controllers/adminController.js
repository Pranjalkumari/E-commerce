import userModel from "../models/userModel.js";

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({ role: "buyer" });
    res.json({ success: true, users });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const getAllSellers = async (req, res) => {
  try {
    const sellers = await userModel.find({ role: "seller" });
    res.json({ success: true, sellers });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const verifySeller = async (req, res) => {
  try {
    const { sellerId } = req.body;
    await userModel.findByIdAndUpdate(sellerId, { isVerified: true });
    res.json({ success: true, message: "Seller verified successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { userId } = req.body;
    await userModel.findByIdAndDelete(userId);
    res.json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { getAllUsers, getAllSellers, verifySeller, deleteUser };