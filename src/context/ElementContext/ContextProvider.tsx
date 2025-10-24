'use client';

import { ReactNode, useState } from "react";
import ElementContext from "./context";
import { ElementType } from "@/types/Element";

interface ElementProviderProps {
  children: ReactNode;
}

export const ElementProvider = ({ children }: ElementProviderProps) => {
  const [element, setElement] = useState<ElementType | null>(null);

  return (
    <ElementContext.Provider value={{ element, setElement }}>
      {children}
    </ElementContext.Provider>
  );
};
