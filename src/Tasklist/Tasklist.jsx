const Tasklist = ({data}) => {
  return (
    <div id="Tasklist"
    className="h-[54%] overflow-x-auto  flex items-center justify-start flex-nowrap gap-3 w-full mt-10 py-5">
    {data.tasks.map((item,idx)=>{
        return <div key={idx} className=" flex-shrink-0 h-full w-[300px] p-5 bg-slate-300 rounded-xl">
        <div className="flex  justify-between items-center">
          <h2 className="bg-red-700 font-bold text-white  text-sm rounded-sm px-3 py-1">
       {item.category}
          </h2>
          <h3 className="text-sm font-bold">{item.date}</h3>
        </div>
        <h2 className="mt-5 font-semibold">{item.title} </h2>
        <p className="text-sm mt-2">
         {item.description}
        </p>
      </div>
      })}
      
    </div>
  );
};

export default Tasklist;
