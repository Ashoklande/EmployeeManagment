import React, { createContext } from 'react'
import { useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';
import { useEffect } from 'react';

export const AuthContxt=createContext();

const Authprovider = ({children}) => {
const [userData, setuserData] = useState()

useEffect(() => {
  //first time set the method of localstorage 
    //  setLocalStorage()
  const {employees,admin}=getLocalStorage();
  setuserData({employees,admin});
},[])

return (

    <AuthContxt.Provider value={userData}>
        {children}
    </AuthContxt.Provider>
  )
}

export default Authprovider