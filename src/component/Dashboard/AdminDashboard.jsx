import Header from "../../other/Header";
import Createtask from "../../other/Createtask";
import Alltask from "../../other/Alltask";
import { useContext } from "react";
import { AuthContxt } from "../../context/Authprovider";
const AdminDashboard = ({setuser}) => {
  const data=useContext(AuthContxt);
    
  return (
    <>
       
      <div className="text-white h-screen w-full p-14">
        <Header setuser={setuser}></Header>
        <Createtask ></Createtask>
        <Alltask data={data.employees}></Alltask>
      </div>
    </>
  );
};
export default AdminDashboard;
