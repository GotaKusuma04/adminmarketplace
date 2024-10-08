import { useRef } from "react";
import { Outlet } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineClipboardList,
  HiOutlineChartPie,
  HiOutlineCurrencyDollar,
  HiOutlineAnnotation,
  HiOutlineUserGroup,
  HiOutlineRefresh,
  HiOutlineCog,
  HiOutlineQuestionMarkCircle,
  HiOutlineX,
} from "react-icons/hi";
import { useGlobalProvider } from "../../hooks";
import { MenuItem } from "../../types";
import { cn } from "../../helpers";
import { Menu, Header } from "./components";

const menuItems = [
  { label: "Dashboard", path: "/", icon: <HiOutlineHome /> },
  { label: "Orders", path: "/", icon: <HiOutlineClipboardList /> },
  { label: "Analytic", path: "/", icon: <HiOutlineChartPie /> },
  { label: "My Wallet", path: "/", icon: <HiOutlineCurrencyDollar /> },
  { label: "Review", path: "/", icon: <HiOutlineAnnotation /> },
  { label: "Customers", path: "/", icon: <HiOutlineUserGroup /> },
  { label: "History", path: "/", icon: <HiOutlineRefresh /> },
  { label: "Settings", path: "/", icon: <HiOutlineCog /> },
];

const helpItems = [
  { label: "Support", path: "/", icon: <HiOutlineQuestionMarkCircle /> },
];

export const PrivateLayout = ({ children = <Outlet /> }) => {
  const menuRef = useRef(null);
  const {  isMenuOpen, isDarkTheme, onMenuClose } = useGlobalProvider()

  return (
    <main
      className={cn(
        "min-h-screen font-Montserrat text-dark md:pl-[250px] transition-all bg-white",
        { "bg-slate-800": isDarkTheme }
      )}>
      <div
        className={cn(
          "w-[250px] bg-white overflow-y-auto flex flex-col pb-6 h-full fixed top-0 -left-[250px] md:left-0 transition-all z-10",
          { 'left-0 shadow-md': isMenuOpen, 'bg-slate-800': isDarkTheme }
        )}
        ref={menuRef}>
        <button
          onClick={onMenuClose}
          className={cn("absolute top-2.5 right-2.5 md:hidden", {
            "text-hover": isDarkTheme,
          })}>
          <HiOutlineX className="w-5 h-5" />
        </button>
        <div className="px-3 py-5">
          <p className={cn("font-Montserrat text-primary text-3xl font-bold uppercase", { 'text-hover': isDarkTheme })}>GoPrinting</p>
        </div>
        <Menu items={menuItems} title="Menu" />
        <Menu items={helpItems} title="Help" />
        <div className="mt-auto px-6 pt-10">
          <div
            className={cn(
              "bg-primary rounded-[20px] p-[18px] font-inika text-white",
              { "bg-hover": isDarkTheme }
            )}>
            <p className="font-bold uppercase text-xl mb-1.5 text-center">
              Help center
            </p>
            <p className="text-sm mb-5">
              Having trouble? Please contact us if you have any questions.
            </p>
            <button
              className={cn(
                "bg-white text-primary rounded-[10px] py-3 px-4 text-center w-full uppercase text-lg hover:bg-dark/[0.9] transition-colors",
                { "bg-white": isDarkTheme }
              )}>
              Contact us
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <Header />
        <div className="px-4 sm:px-8 py-4">
          {children}
        </div>
      </div>
    </main>
  );
};




// import { useRef, useState } from "react";
// import { Outlet } from "react-router-dom";
// import {
//   HiOutlineHome,
//   HiOutlineClipboardList,
//   HiOutlineChartPie,
//   HiOutlineCurrencyDollar,
//   HiOutlineAnnotation,
//   HiOutlineUserGroup,
//   HiOutlineRefresh,
//   HiOutlineCog,
//   HiOutlineQuestionMarkCircle,
//   HiOutlineX,
//   HiOutlineMenu,
// } from "react-icons/hi";
// import { useGlobalProvider } from "../../hooks";
// import { MenuItem } from "../../types";
// import { cn } from "../../helpers";
// import { Menu, Header } from "./components";

// const menuItems = [
//   { label: "Dashboard", path: "/", icon: <HiOutlineHome /> },
//   { label: "Orders", path: "/", icon: <HiOutlineClipboardList /> },
//   { label: "Analytic", path: "/", icon: <HiOutlineChartPie /> },
//   { label: "My Wallet", path: "/", icon: <HiOutlineCurrencyDollar /> },
//   { label: "Review", path: "/", icon: <HiOutlineAnnotation /> },
//   { label: "Customers", path: "/", icon: <HiOutlineUserGroup /> },
//   { label: "History", path: "/", icon: <HiOutlineRefresh /> },
//   { label: "Settings", path: "/", icon: <HiOutlineCog /> },
// ];

// const helpItems = [
//   { label: "Support", path: "/", icon: <HiOutlineQuestionMarkCircle /> },
// ];

// export const PrivateLayout = ({ children = <Outlet /> }) => {
//   const menuRef = useRef(null);
//   const {  isDarkTheme } = useGlobalProvider();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <main
//       className={cn(
//         "min-h-screen font-Montserrat text-dark md:pl-[250px] transition-all bg-white",
//         { "bg-slate-800": isDarkTheme }
//       )}>
//       <div
//         className={cn(
//           "w-[250px] bg-white overflow-y-auto flex flex-col pb-6 h-full fixed top-0 transition-all z-10",
//           {
//             "left-0 shadow-md": isMenuOpen || window.innerWidth >= 768, 
//             "-left-[250px]": !isMenuOpen && window.innerWidth < 768, 
//             "bg-black": isDarkTheme,
//           }
//         )}
//         ref={menuRef}>
//         <div className="relative px-3 py-5">
//           <p
//             className={cn(
//               "font-Montserrat font-bold text-primary text-3xl uppercase",
//               { "text-hover": isDarkTheme }
//             )}>
//             GoPrinting
//           </p>
//         </div>
//         <button
//           onClick={toggleMenu}
//           className={cn("absolute top-2.5 right-2.5 lg:hidden", {
//             "text-secondary": isDarkTheme,
//           })}>
//           <HiOutlineX className="w-4 h-4" />
//         </button>
//         <Menu items={menuItems} title="Menu" />
//         <Menu items={helpItems} title="Help" />
//         <div className="mt-auto px-6 pt-10">
//           <div
//             className={cn(
//               "bg-primary rounded-[20px] p-[18px] font-inika text-white",
//               { "bg-hover": isDarkTheme }
//             )}>
//             <p className="font-bold uppercase text-xl mb-1.5 text-center">
//               Help center
//             </p>
//             <p className="text-sm mb-5">
//               Having trouble? Please contact us if you have any questions.
//             </p>
//             <button
//               className={cn(
//                 "bg-white text-primary rounded-[10px] py-3 px-4 text-center w-full uppercase text-lg hover:bg-dark/[0.9] transition-colors",
//                 { "bg-white": isDarkTheme }
//               )}>
//               Contact us
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="flex-1 overflow-y-auto">
//         <Header />
//         <button
//           onClick={toggleMenu}
//           className="absolute top-6 left-4 z-20 lg:hidden block " 
//         >
//           <HiOutlineMenu className="w-4 h-4" />
//         </button>
//         <div className="px-4 sm:px-8 py-4">{children}</div>
//       </div>
//     </main>
//   );
// };
