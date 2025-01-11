import React, { useContext, useEffect } from "react";
import Login from "./component/Auth/Login";
import { useState } from "react";
import EmployeeDashboard from "./component/Dashboard/EmployeeDashboard";
import AdminDashboard from "./component/Dashboard/AdminDashboard";
import { AuthContxt } from "./context/Authprovider";


const App = () => {
  
  const [user, setuser] = useState(null)  
  const [loggedInUser, setloggedInUser] = useState(null)
  const data=useContext(AuthContxt);
  
  useEffect(function(){

    const loginuser=JSON.parse(localStorage.getItem('loggedInUser'))
    if(loginuser){
      setuser(loginuser.role)
      setloggedInUser(loginuser.data)
    }

  },[])

  

      const onsubmitHandle=(email,password)=>{
        
        if(data ){
                     const employee=data.employees.find((e)=>e.email===email&& e.password===password)
                    if(employee){
                      setuser('employee');
                      setloggedInUser(employee)
                      localStorage.setItem("loggedInUser",JSON.stringify({role:'employee',data:employee}))
                  }else if(email==='admin@gmail.com' && password==='123'){
                    setuser('admin')
                    localStorage.setItem("loggedInUser",JSON.stringify({role:'admin'}))
                  }else{
                    alert('Invalid Credentials')
                    }
                  }
                }
  return (
    <>
      {!user? <Login onsubmitHandle={onsubmitHandle} />:'' }
     {user==='admin'?<AdminDashboard setuser={setuser}/>:(user==='employee'?<EmployeeDashboard data={loggedInUser} setuser={setuser}/>:null)}
    </>
  );
};

export default App;
