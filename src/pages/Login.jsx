import { Check } from "lucide-react";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=useNavigate()
  return (
    <div className="flex justify-center w-full h-screen">
      <div className="bg-[#F9FAFB] w-1/2 justify-center flex items-center gap-4">
        <div className="flex flex-col gap-10 w-full max-w-sm">
          <div className="flex gap-6 items-center ">
            <Logo />
            <p className="text-4xl font-bold">Taskily</p>
          </div>

          <button className="bg-[#0F4C3A] rounded-2xl text-white  max-w-xs h-10 text-xl cursor-pointer" onClick={()=>navigate("/dashboard")}>
            Log In
          </button>
        </div>
      </div>

      <div className="bg-[#1D5746] w-1/2 text-white flex  justify-center items-center">
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-4xl font-bold">Manage your tasks</p>
            <p className="text-4xl font-bold">efficiently</p>
          </div>
          <div>
            <p className="text-[#DCF9E2] text-lg">
              Plan,prioritize,and accomplish your tasks with ease.
            </p>
            <p className="text-[#DCF9E2] text-lg">
              Track your projects and collaborate with your team.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 items-center">
              <div className="bg-[#457567] w-7 h-7 rounded-2xl flex justify-center items-center p-1">
                <Check color="#ffffff" />
              </div>
              <p>Real-time collaboration</p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="bg-[#457567] w-7 h-7 rounded-2xl flex justify-center items-center p-1">
                <Check color="#ffffff" />
              </div>
              <p>Real-time collaboration</p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="bg-[#457567] w-7 h-7 rounded-2xl flex justify-center items-center p-1">
                <Check color="#ffffff" />
              </div>
              <p>Real-time collaboration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
