import { FormHTMLAttributes, ReactNode } from "react";

interface modalRootProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export default function modalRoot({ children, ...rest }: modalRootProps) {
  return (
    <form className="flex flex-col p-2 w-xs gap-1 bg-black border-2 border-gray-500 rounded-sm" {...rest}>
      {children}
    </form>
  );
}
