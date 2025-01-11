import React from "react";
import { BsArrowLeftShort, BsSearch, BsChevronDown, BsPerson, BsGear, BsSun, BsMoon } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import { FaFileInvoiceDollar, FaUsersCog, FaSignOutAlt } from "react-icons/fa";

const Sidebar = ({ open, setOpen, submenuOpen, setSubmenuOpen, activeTab, setActiveTab, t, darkMode, setDarkMode, setReportType, setIsLoggedIn }) => {
  // Menú de navegación
  const Menus = [
    { title: t.dashboard, icon: <RiDashboardFill />, id: "dashboard" },
    { title: t.reports, icon: <FaFileInvoiceDollar />, id: "reports", submenu: true, submenuItems: [
      { title: t.salesReport, id: "sales" },
      { title: t.purchaseReport, id: "purchase" }
    ]},
    { title: t.users, icon: <FaUsersCog />, id: "users" },
    { title: t.settings, icon: <BsGear />, id: "settings" }
  ];

  return (
    <div className={`${darkMode ? "bg-gray-900 text-gray-300" : "bg-blue-900 text-gray-900"} min-h-screen p-5 pt-8 ${open ? "w-64" : "w-20"} duration-300 relative shadow-lg fixed top-0 left-0`}>
      {/* Botón para abrir/cerrar el menú */}
      <BsArrowLeftShort className={`text-white text-2xl rounded-full absolute right-0 top-9 border border-white cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
      
      <div className="inline-flex items-center">
        <BsPerson className={`text-white text-4xl rounded cursor-pointer block float-left mr-3 duration-500 ${open && "rotate-[360deg]"}`} />
        <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>Usuario</h1>
      </div>

      <div className={`flex items-center rounded-md ${darkMode ? "bg-gray-700" : "bg-gray-300"} mt-6 ${!open ? "px-2.5" : "px-4"} py-2`}>
        <BsSearch className="text-white text-lg block float-left cursor-pointer mr-2" />
        <input type="search" placeholder={t.search} className={`text-base bg-transparent w-full text-black focus:outline-none pl-2 ${!open && "hidden"}`} />
      </div>

      <ul className="pt-2 flex-1">
        {Menus.map((menu) => (
          <React.Fragment key={menu.id}>
            <li className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-400 rounded-md ${menu.spacing ? "mt-9" : "mt-2"} ${activeTab === menu.id && "bg-gray-400"}`}
              onClick={() => {
                if (!menu.submenu) {
                  setActiveTab(menu.id);
                } else {
                  setSubmenuOpen(!submenuOpen);
                }
              }}>
              <span className="text-2xl block float-left mr-3">{menu.icon}</span>
              <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>{menu.title}</span>
              {menu.submenu && open && (
                <BsChevronDown className={`${submenuOpen && "rotate-180"}`} />
              )}
            </li>
            {menu.submenu && submenuOpen && open && (
              <ul className="ml-4">
                {menu.submenuItems.map((submenuItem) => (
                  <li key={submenuItem.id}
                    className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-gray-400 rounded-md ${activeTab === submenuItem.id && "bg-gray-400"}`}
                    onClick={() => {
                      setActiveTab(submenuItem.id);
                      setReportType(submenuItem.id);
                    }}>
                    {submenuItem.title}
                  </li>
                ))} 
              </ul>
            )}
          </React.Fragment>
        ))}
      </ul>

      <div className="bottom-0 position-absolute w-full mt-12">   
        {/* Botón para cambiar el modo oscuro */}
        <button
          className="flex items-center gap-x-4 text-gray-200 hover:text-yellow-500 w-auto justify-center px-2 py-2 cursor-pointer rounded-md bg-gray-700"
          onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <BsSun className="text-2xl mr-2" /> : <BsMoon className="text-2xl mr-3" />}
          {open && <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>}
        </button>
        {/* Botón para cerrar sesión */}
        <button
          className="flex items-center gap-x-4 text-gray-200 hover:text-red-500 w-auto justify-center px-2 py-2 cursor-pointer rounded-md bg-gray-700 mt-3 mb-2"   
          onClick={() => setIsLoggedIn(false)}>
          <FaSignOutAlt className="text-2xl" />
          {open && <span>{t.logout}</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
