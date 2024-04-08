import React from "react";

const Header = () => {
  const nav_links = [
    { path: "#home", display: "Home" },
    { path: "#service", display: "service" },
    { path: "#Blogs", display: "Blogs" },
    { path: "#contact-us", display: "Contact Us" },
  ];
  return (
    <header className="w-full h-20 mb-0">
      <div className=" w-4/5 px-2 m-auto mt-4 border-2	border-white">
        <div className="flex items-center justify-between">
          <div className="logo">
            {/* <img src="../images/logo.png" alt="" /> */}
            <h1 className="text-slate-500 font-bold text-3xl">
              Pixel <span className="text-orange-600">Pulse</span>
            </h1>
          </div>

          {/* //navigaiton */}
          <div className="">
            <ul className="flex items-center gap-x-8 list-none">
              {nav_links.map((item, index) => (
                <li>
                  <a
                    href={item.path}
                    className="font-normal text-lg capitalize cursor-pointer hover:text-orange-700"
                  >
                    {item.display}
                  </a>
                </li>
              ))}
              <li></li>
            </ul>
          </div>

          <div>
            <span className="text-lg flex items-center gap-x-2 ">
              <i class="ri-sun-line"></i> Light Mode
            </span>
          </div>

          <div>
            <span className="text-lg"> <i class="ri-phone-line"></i> +252 63849899</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
