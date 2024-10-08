import { useGlobalProvider } from "../hooks";
import { cn } from "../helpers";

export const DashboardBox = ({ title, children }) => {
  const { isDarkTheme } = useGlobalProvider();

  return (
    <div
      className={cn(
        'p-4 rounded-[20px] flex flex-col h-full overflow-hidden',
        { 'bg-primary text-white': !isDarkTheme, 'bg-hover text-primary': isDarkTheme }
      )}>
      <h2 className="font-Montserrat uppercase font-bold truncate">{title}</h2>
      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  );
};
