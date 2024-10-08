import { useState, useRef } from "react";
import { usePopper } from "react-popper";
import { useClickAway } from "ahooks";
import { cn } from "../helpers";

export const DropdownWrapper = ({
  buttonContent,
  buttonClassname,
  dropdownClassname,
  dropdownPlacement,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: dropdownPlacement || "bottom-end",
  });
  
  const wrapperRef = useRef(null);

  useClickAway(() => {
    setIsOpen(false);
  }, wrapperRef);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div ref={wrapperRef}>
      <button
        type="button"
        className={buttonClassname}
        ref={setReferenceElement}
        onClick={toggleDropdown}
      >
        {buttonContent}
      </button>

      {isOpen && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          className={cn("z-10", dropdownClassname)}
          {...attributes.popper}
        >
          {children}
        </div>
      )}
    </div>
  );
};
