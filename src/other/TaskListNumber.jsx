const TaskListNumber = ({data}) => {
  return (
    <>
      <div className="flex mt-10 justify-between gap-4 screen">
        <div className=" py-6 px-9 rounded-xl  w-[45%] bg-red-400">
          <h2 className="text-3xl font-semibold ">{data.taskCount.active}</h2>
          <h3 className="text-xl font-medium">Active Task</h3>
        </div>

        <div className="  py-6 px-9 rounded-xl  w-[45%] bg-blue-400">
          <h2 className="text-3xl font-semibold ">{data.taskCount.newTask}</h2>
          <h3 className="text-xl font-medium">New Task</h3>
        </div>

        <div className=" py-6 px-9 rounded-xl  w-[45%] bg-green-400">
          <h2 className="text-3xl font-semibold ">{data.taskCount.completeTask}</h2>
          <h3 className="text-xl font-medium">Complete Task</h3>
        </div>

        <div className=" py-6 px-9 rounded-xl  w-[45%] bg-yellow-400">
          <h2 className="text-3xl font-semibold ">{data.taskCount.failTask}</h2>
          <h3 className="text-xl font-medium">Fail Task</h3>
        </div>
      </div>
    </>
  );
};

export default TaskListNumber;
