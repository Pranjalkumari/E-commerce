import { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Sellers = ({ token }) => {
  const [sellers, setSellers] = useState([]);

  const fetchSellers = async () => {
    try {
      const res = await axios.get(`${backendUrl}/api/admin/sellers`, {
        headers: { token },
      });
      if (res.data.success) {
        setSellers(res.data.sellers);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const verifySeller = async (sellerId) => {
    try {
      const res = await axios.post(
        `${backendUrl}/api/admin/verify-seller`,
        { sellerId },
        { headers: { token } }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        fetchSellers();
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchSellers();
  }, [token]);

  return (
    <div>
      <h3>All Sellers</h3>
      <div>
        {sellers.map((seller) => (
          <div key={seller._id}>
            <p>{seller.name}</p>
            <p>{seller.email}</p>
            <p>{seller.businessName}</p>
            <p>{seller.gstNumber}</p>
            {!seller.isVerified && (
              <button onClick={() => verifySeller(seller._id)}>Verify</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sellers;