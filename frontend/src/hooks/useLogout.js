import { useState } from "react"
import { useAuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const useLogout = () =>{
    const [loadingLogout,setLoadingLogout] = useState(false);
    const {setAuthUser} = useAuthContext();
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const logout = async()=>{
        setLoadingLogout(true);
        try {
            const res = await fetch(backendUrl+"/api/user/logout",{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }

            localStorage.removeItem("authUser");
            setAuthUser(null);
        } catch (error) {
            toast.error(error.message);
        }finally{
            setLoadingLogout(false);
        }
    };

    return {loadingLogout, logout};
}

export default useLogout;