import { jsxs } from "react/jsx-runtime";

const Header = ({data,setuser}) => {
  const onlogout=()=>{
    setuser(null);
    localStorage.setItem('loggedInUser',JSON.stringify({role:''}));
     
  }
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-white font-medium text-2xl">
        <span className="  text-3xl font-semibold">Hello <br />Ashoka 👋</span>
      </h1>
      <button  onClick={onlogout} className="text-white text-lg font-medium bg-red-500 px-5 py-2 rounded-sm">
        Log Out
      </button>
    </div>
  );
};
export default Header;
