import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
const GithubLogin = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold flex items-center gap-3 hover:underline">
        Login with Github <FaGithub className="w-9 h-9" />
      </h2>
    </div>
  );
};

export default GithubLogin;
