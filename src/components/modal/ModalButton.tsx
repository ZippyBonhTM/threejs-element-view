import { ButtonHTMLAttributes } from "react";

interface ModalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export default function ModalButton({ text, ...rest }: ModalButtonProps) {

  return (
    <button
      className="bg-gray-500 rounded-sm"
      {...rest}
    >
      {text}
    </button>
  );
}
