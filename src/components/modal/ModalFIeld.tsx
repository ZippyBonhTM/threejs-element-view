import { InputHTMLAttributes } from "react";

interface ModalFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function ModalField({ label, defaultValue, placeholder, ...rest }: ModalFieldProps) {
  return (
    <>
      {label && <label>{label}</label>}
      <input
        className="bg-black border-gray-500 border-2 rounded-sm"
        {...rest}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
    </>
  );
}