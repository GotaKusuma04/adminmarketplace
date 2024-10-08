import { NavLink } from "react-router-dom";
import { MenuItem } from "../../../types";
import { useGlobalProvider } from "../../../hooks";
import { cn } from "../../../helpers";

export const Menu = ({ title, items }) => {
    const { isDarkTheme } = useGlobalProvider();
        
    return (
        <div className="px-3">
            <div className={cn('border-y border-primary py-1.5 px-2.5', { 'border-hover': isDarkTheme })}>
                <p className={cn("text-primary text-xs uppercase", { 'text-hover': isDarkTheme })}>{title}</p>
            </div>
            <ul className={cn('divide-y divide-primary', { 'divide-hover': isDarkTheme })}>
                {items.map(({ label, path, icon }) => {
                    return (
                        <li key={label}>
                            <NavLink to={path} className={cn('flex items-center gap-2 py-4 px-2.5 hover:text-hover transition-colors', { 'text-hover': isDarkTheme })}>
                                <div className="w-4 h-4">{icon}</div>
                                <p className="uppercase text-[13px]">{label}</p>
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
