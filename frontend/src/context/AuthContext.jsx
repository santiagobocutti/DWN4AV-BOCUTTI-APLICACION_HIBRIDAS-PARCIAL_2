import { createContext, useEffect, useState } from "react"
import Cookies from 'js-cookie'
import { jwtDecode } from "jwt-decode" 

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [usuario, setUsuario] = useState(null) 

    const auth = Cookies.get('jwToken') || null

    useEffect(() => {
        if(auth) {
            const decoded = jwtDecode(auth);
            setUsuario({ 
                nombre_completo: decoded.usuario.nombre_completo,
                id: decoded.usuario._id,
                nombre_usuario: decoded.usuario.nombre_usuario
            })
        }
    }, [])

    const logoutUsuario = () => {
        setUsuario(null);
        Cookies.remove('jwToken') 
    }

    return(
        
        <AuthContext.Provider value={{usuario, setUsuario, auth, logoutUsuario}}>
            {children}
        </AuthContext.Provider>
    )

}