"use client"

import { useRouter } from "next/navigation"
import {useState, ReactNode, useEffect, createContext, useContext} from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

type ContextProviderProps = {
    children?: ReactNode
}

type StateContextType = {
    user: {} | any 
    id: string 
    email: string 
    name: string 
    picture: string
    signOut: () => void
  };

const Context = createContext<StateContextType>({} as StateContextType)

const UserProvider = ({children}: ContextProviderProps)=> {
    const router = useRouter()
    const [user, setUser] = useState({})
    const [id, setId] = useState("")
    const [email, setEmail] = useState("")
    const [picture, setPicture] = useState("")
    const [name, setName] = useState("")

    const supabaseClient = createClientComponentClient()
    const getCurrentSession = async ()=>{
        const res = await supabaseClient.auth.getSession()
        if (res && res.data.session){
            return res.data.session
        }
        return null
    }

    const getCurrentUser = async () => {
        if (!id) {
            const res = await supabaseClient.auth.getUser();
            if (res && res.data.user) {
                setUser(res.data.user);
                setId(res.data.user.id);
                setName(res.data.user.identities?.[0]?.identity_data?.name || '');
                setPicture(res.data.user.identities?.[0]?.identity_data?.picture || '');
                setEmail(res.data.user.email || '');
            }
        }
    };

    useEffect(() => {
        const isUser = async () => {
          const currentSession = await getCurrentSession()
          if (currentSession) await getCurrentUser()
        }
        isUser()
    },[])

    const signOut = async () => {
        await supabaseClient.auth.signOut()
        clearUser()
        router.push('/')
    }

    const clearUser = () => {
        setUser({})
        setId("")
        setEmail("")
        setName("")
        setPicture("")
    }
    
    // const exposed = { user, id, email, name, picture, signOut };

    return(
        <Context.Provider value={{user, id, email, name, picture, signOut}}>
            {children}
        </Context.Provider>
    ) 
    
}
export const useUser = () => useContext(Context);
export default UserProvider;



