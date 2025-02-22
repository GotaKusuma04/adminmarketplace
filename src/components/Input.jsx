import { useField } from "formik";
import { useGlobalProvider } from "../hooks";
import { cn } from "../helpers";

export const Input = ({ label, name, ...props }) => {
  const [field, meta] = useField(name);
  const { isDarkTheme } = useGlobalProvider();

  return (
    <div className="font-Montserrat mb-4">
      <label
        htmlFor={name}
        className={cn("block text-sm uppercase mb-1", {
          "text-white": isDarkTheme,
        })}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={field.value}
        onChange={field.onChange}
        className={cn(
          "bg-hover rounded-[10px] px-4 py-3 outline-0 w-full border border-transparent focus:border-primary transition-colors",
          { "bg-dark-400 text-white": isDarkTheme }
        )}
        type={props.type || "text"}
        {...props}
      />
      {meta.error && <p className="text-red-400 mt-1 px-1">{meta.error}</p>}
    </div>
  );
};
