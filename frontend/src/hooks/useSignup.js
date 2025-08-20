import { useState } from "react"
import { useAuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const useSignup = () =>{
    const [loadingSignup,setLoadingSignup] = useState(false);
    const {setAuthUser} = useAuthContext();
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const signup = async (name,email, password)=>{
        const success = handleInputErrors(name,email,password);

        if(!success) return;
        setLoadingSignup(true);

        try {
            const res = await fetch(backendUrl + "/api/user/register",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({name,email,password})
            });

            const data = await res.json();

            if(data.error){
                throw new Error(data.error);
            }

            localStorage.setItem("authUser", JSON.stringify(data))
            setAuthUser(data);
        } catch (error) {
            toast.error(error.message);
        } finally{
            setLoadingSignup(false);
        }
    };

    return {loadingSignup,signup};
}

export default useSignup;


function handleInputErrors(name,email,password){
    if(!name || !password || !email){
        toast.error("Please fill all fields");
        return false;
    }

    return true;
}