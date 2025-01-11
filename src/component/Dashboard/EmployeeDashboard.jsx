import React from "react";
import Header from "../../other/Header";
import TaskListNumber from "../../other/TaskListNumber";
import Tasklist from "../../Tasklist/Tasklist";
const EmployeeDashboard = ({data,setuser}) => {
  
  return (
    <div>
      <div className="p-20 bg-[#1c1c1c] h-screen">
        <Header data={data} setuser={setuser}></Header>
        <TaskListNumber data={data}></TaskListNumber>
        <Tasklist data={data}></Tasklist>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
