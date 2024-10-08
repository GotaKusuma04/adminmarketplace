import { NavLink } from "react-router-dom";
import {
  HiOutlineChevronDown,
  HiOutlineCog,
  HiOutlineLogout,
} from "react-icons/hi";
import { DropdownWrapper } from "../../../../components";
import { cn } from "../../../../helpers";
import { useGlobalProvider } from "../../../../hooks";

export const ProfileButton = () => {
  const { isDarkTheme } = useGlobalProvider();

  return (
    <DropdownWrapper
      buttonClassname={cn('bg-primary rounded-[10px] p-2.5 text-white flex items-center text-base', {'bg-hover text-primary': isDarkTheme})}
      dropdownClassname={cn(
        "bg-white rounded-[20px] w-[135px] font-Montserrat divide-y divide-white px-[5px] mt-1 border border-black",
        { "bg-black text-white": isDarkTheme }
      )}
      buttonContent={
        <>
          <span className="w-5 h-5 bg-white rounded-full mr-2.5 overflow-hidden">
            <img
              src="./images/bw-3.jpg"
              alt=""
              className="rounded-full"
            />
          </span>
          <span className="font-Montserrat leading-[20px] mr-1 hidden sm:block">
            Nyoman Gotama
          </span>
          <HiOutlineChevronDown />
        </>
      }>
      <ul className={cn('divide-y divide-primary', {'divide-white': isDarkTheme})}>
        <li>
          <NavLink
            to="/"
            className="flex items-center gap-3 p-2.5 hover:text-hover transition duration-200 ease-in-out">
            <HiOutlineCog className="text-[20x]"/>
            Settings
          </NavLink>
        </li>
        <li>
          <button
            type="button"
            className="flex items-center gap-3 p-2.5 hover:text-hover transition duration-200 ease-in-out">
            <HiOutlineLogout className="text-[15px]"/>
            Logout
          </button>
        </li>
      </ul>
    </DropdownWrapper>
  );
};
