import Image from "next/image";
import logo from "@/assets/interviewproLogo.png";
const WebsiteLogo = () => {
  return (
    <div>
      <div className="flex-1 flex justify-start items-center">
        <Image src={logo} width={54} height={54} alt="logo" />
        <span className="text-2xl md:text-4xl font-black before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40">
          InterviewPro
        </span>
      </div>
    </div>
  );
};

export default WebsiteLogo;
