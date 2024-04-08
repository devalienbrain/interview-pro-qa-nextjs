import { GiHamburgerMenu } from "react-icons/gi";
import ThemeToggle from "@/components/shared/ThemeToggle/ThemeToggle";
import WebsiteLogo from "@/components/shared/WebsiteLogo/WebsiteLogo";
import GithubLogin from "@/components/shared/GithubLogin/GithubLogin";
const Navbar = () => {
  return (
    <div>
      <header className="bg-slate-950/5 p-5 rounded-xl shadow-lg">
        {/* SIDEBAR FOR TABLET AND MOBILE DEVICES STARTS */}
        <div className="lg:hidden drawer justify-start items-center pl-5">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="drawer-button">
              <GiHamburgerMenu className="w-7 h-7" />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}

              <div className="pb-7">
                <WebsiteLogo />
              </div>
              <hr />
              <li>
                <div className="py-7">
                  <GithubLogin />
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* SIDEBAR FOR TABLET AND MOBILE DEVICES ENDS */}

        <div className="flex justify-between items-center">
          {/* Navbar Start */}

          <div className="hidden lg:flex items-center">
            <WebsiteLogo />
          </div>
          {/* Navbar Ends */}
          <div className="flex-1 flex justify-end items-center gap-4">
            {/* Toggle Theme Starts */}
            <ThemeToggle />
            {/* Toggle Theme Ends */}
            <div className="hidden lg:flex">
              <GithubLogin />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
