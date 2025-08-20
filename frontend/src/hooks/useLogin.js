import { useState } from "react"
import { useAuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const useLogin = () =>{
    const [loadingLogin,setLoadingLogin] = useState(false);
    const {setAuthUser} = useAuthContext();
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const login = async (email, password)=>{
        const success = handleInputErrors(email,password);

        if(!success) return;
        setLoadingLogin(true);

        try {
            const res = await fetch(backendUrl+"/api/user/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({email,password})
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
            setLoadingLogin(false);
        }
    };

    return {loadingLogin,login};
}

export default useLogin;


function handleInputErrors(name,password){
    if(!name || !password){
        toast.error("Please fill all fields");
        return false;
    }

    return true;
}