import { createContext, useContext, useState } from "react";
import { auth } from "../firebase/firebase.configure";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


export const authContext = createContext();
export const useAuth = () => {
    const context = useContext(authContext);

    if (!context) {
        console.log('Sin conexto')
    }
    return context;
}

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({});
   
    const navigate = useNavigate(); 
    
    const loginWihtGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const response = await signInWithPopup(auth, provider);
            if(response.user){
                setUser(response.user)

                sessionStorage.setItem('userLogued', JSON.stringify(response.user));

                Swal.fire(
                    "Good job!",
                    `Hola ${response.user.displayName}`,
                    "success"
                  ).then(() => {
                    navigate('/welcome');
                  });
            }
            return response;
        } catch (error) {
            console.error('Error al iniciar sesión con Google:', error);
            throw error;
        }
       
    }

    const logout = async () => {
        const response = await signOut(auth);
        console.log('Logout',response)
    }

    return (
        <authContext.Provider
        value={{
            loginWihtGoogle,
            logout,
            user
        }}
        >
            {children}
        </authContext.Provider>
    );

}