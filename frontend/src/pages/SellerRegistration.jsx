import { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const SellerRegistration = () => {
  const { navigate, backendUrl } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    businessName: "",
    address: "",
    gstNumber: "",
  });
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (showOtp) {
        const response = await axios.post(
          `${backendUrl}/api/user/verify-otp`,
          { email: formData.email, otp }
        );
        if (response.data.success) {
          toast.success("Seller registration successful!");
          navigate("/login");
        } else {
          toast.error(response.data.message);
        }
        return;
      }

      const response = await axios.post(
        `${backendUrl}/api/user/register`,
        { ...formData, role: "seller" }
      );
      if (response.data.success) {
        setShowOtp(true);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">
          {showOtp ? "Verify OTP" : "Seller Registration"}
        </p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {showOtp ? (
        <input
          onChange={(e) => setOtp(e.target.value)}
          value={otp}
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Enter OTP"
          required
        />
      ) : (
        <>
          <input
            onChange={onChangeHandler}
            name="name"
            value={formData.name}
            type="text"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Full Name"
            required
          />
          <input
            onChange={onChangeHandler}
            name="email"
            value={formData.email}
            type="email"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Email"
            required
          />
          <input
            onChange={onChangeHandler}
            name="password"
            value={formData.password}
            type="password"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Password"
            required
          />
          <input
            onChange={onChangeHandler}
            name="businessName"
            value={formData.businessName}
            type="text"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Business Name"
            required
          />
          <input
            onChange={onChangeHandler}
            name="address"
            value={formData.address}
            type="text"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Address"
            required
          />
          <input
            onChange={onChangeHandler}
            name="gstNumber"
            value={formData.gstNumber}
            type="text"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="GST Number"
            required
          />
        </>
      )}
      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        {showOtp ? "Verify" : "Register"}
      </button>
    </form>
  );
};

export default SellerRegistration;