const Alltask = ({data}) => {
  return (
    <div className="bg-[#1c1c1c] h-1/2 p-4 mt-5  ">

          <div className=" font-semibold py-2 px-4 mb-2 rounded flex justify-between">
          <h2 className="text-xl w-1/5 ">UserName</h2>
          <h3 className="text-xl w-1/5">New Task</h3>
          <h3 className="text-xl w-1/5 ">Active Task</h3>
          <h3 className="text-xl w-1/5 ">Completed Task</h3>
          <h5 className="text-xl w-1/5 ">Failed Task</h5> 
        </div>

      <div className="w-full h-full p-2 overflow-auto">
         {data.map((ele,idx)=>{
          return <div key={idx} className=" border-2 border-green-500 rounded-md  py-4 px-4 mb-2  flex justify-between">
          <h2 className="text-xl w-1/5  ">{ele.firstName}</h2>
          <h3 className="text-xl w-1/5  ">{ele.taskCount.newTask}</h3>
          <h3 className="text-xl w-1/5  ">{ele.taskCount.active}</h3>
          <h3 className="text-xl w-1/5 text-green-700 font-medium ">{ele.taskCount.completeTask}</h3>
          <h5 className="text-xl w-1/5 text-red-500 font-medium ">{ele.taskCount.failTask}</h5>
        </div>
         })}
      
      </div>
    
      
    </div>
  );
};
export default Alltask;
