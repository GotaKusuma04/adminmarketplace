import ReactSelect from "react-select";
import { useField } from "formik";

import { useGlobalProvider } from "../hooks";
import { cn } from "../helpers";

export const Select = ({ label, name, options }) => {
  const [field, meta, helpers] = useField(name); 
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
      <ReactSelect
        options={options}
        styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
        className={{
          ValueContainer: () => "rounded-[10px] !p-0",
          SingleValue: () => cn({ "!text-white": isDarkTheme }),
          input: () => cn({ "!text-white": isDarkTheme }),
          control: (state) =>
            cn(
              "!bg-hover !border-transparent transition-colors !rounded-[10px] px-4 py-1.5",
              {
                "!border-primary !shadow-none": state.isFocused,
                "!bg-dark-300": isDarkTheme,
              }
            ),
          option: (state) =>
            cn({
              "!bg-primary": state.isSelected,
              "!text-white": isDarkTheme,
              "!bg-primary/[0.2]": state.isFocused && state.isSelected,
            }),
        }}
        menuPortalTarget={document.body}
        value={options.find((opt) => opt.value === field.value)}
        onChange={(option) => helpers.setValue(option?.value)}
      />
      {meta.error && <p className="text-red-400 mt-1 px-1">{meta.error}</p>}
    </div>
  );
};
