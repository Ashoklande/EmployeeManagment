import { useState } from "react";

const Createtask = () => {
  
  const [title, settitle] = useState('');
  const [date, setdate] = useState('');
  const [assignTo, setassignTo] = useState('');
  const [category, setcategory] = useState('');
  const [description, setdescription] = useState('');
 

  const submitHandle = async (e) => {
    e.preventDefault();
  
    const data = JSON.parse(localStorage.getItem('employees'));
  
    const employee = data.find(element => element.firstName === assignTo);
  
    if (employee) {
      const taskLength = employee.tasks.length + 1; 
      employee.taskCount.newTask += 1; 
  
      const newTask = {
        taskId: taskLength,
        active: false,
        category: category,
        completeTask: false,
        date: date,
        description: description,
        failTask: false,
        newTask: true,
        title: title,
      };
  
      employee.tasks.push(newTask);
  
      console.log(employee.tasks);
  
      localStorage.setItem('employees', JSON.stringify(data));
  
      settitle('');
      setdate('');
      setassignTo('');
      setcategory('');
      setdescription('');
  
      window.location.reload();
    } 
  };

  return (
    <div className="mt-10 ">
      <form  onSubmit={submitHandle} className="flex  bg-slate-900 justify-between rounded-sm p-8 flex-row flex-shrink-0 flex-nowrap">
        <div className="w-[40%] flex flex-col justify-between flex-shrink-0 flex-nowrap">
          <div>
            <h3 className=" text-lg">Task Title</h3>
            <input
               value={title}
              onChange={(e)=>settitle(e.target.value)}

              className="w-full bg-transparent border-2 p-4 text-lg h-8 border-emerald-600 rounded-sm outline-none "
              type="text"
              placeholder="Make UI Desing "
            />
          </div>

          <div className="mt-3">
            <h3 className=" text-lg">Date</h3>
            <input
              value={date}
              onChange={(e)=>setdate(e.target.value)}
              className="w-full bg-transparent p-4 text-lg  border-2 h-8 border-emerald-600 rounded-sm outline-none "
              type="date"
              placeholder="Select Date"
            />
          </div>
          <div className="mt-3">
            <h3 className=" text-lg">Assign to</h3>
            <input
              value={assignTo}
              onChange={(e)=>setassignTo(e.target.value)}
              className="w-full bg-transparent p-4 text-lg  border-2 h-8 border-emerald-600 rounded-sm outline-none "
              type="text"
              placeholder="Empoyee Name"
            />
          </div>
          <div className="mt-3">
            <h3 className=" text-lg">Category</h3>
            <input
              value={category}
              onChange={(e)=>setcategory(e.target.value)}
              className="w-full p-4 text-lg  bg-transparent border-2 h-8 border-emerald-600 rounded-sm outline-none "
              type="text"
              placeholder="dev, design,etc"
            />
          </div>
        </div>
        <div className="w-[40%]">
          <h3 className=" text-lg">Description</h3>
          <textarea
            value={description}
            onChange={(e)=>setdescription(e.target.value)}
            className="w-full bg-transparent border-2 p-4 text-lg  border-emerald-600 rounded-xl outline-none "
            name="Description"
            rows={5}
            cols={40}
            id=""
          ></textarea>
          <button  className="w-full p-3 mt-2 text-xl font-semibold bg-emerald-400  rounded-sm outline-none ">
             Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default Createtask;
