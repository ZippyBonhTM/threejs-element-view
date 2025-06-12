'use client';

import { ReactNode, useEffect, useState } from "react";
import ElementContext from "./context";
import { ElementType } from "@/types/Element";
import ElementClient from "@/client";

interface ElementProviderProps {
  children: ReactNode;
}

export const ElementProvider = ({ children }: ElementProviderProps) => {
  const [element, setElement] = useState<ElementType | null>(null);

  useEffect(() => {
    ElementClient.getElementBySymbol("Te")
      .then((value) => setElement(value[0]));
  }, []);

  return (
    <ElementContext.Provider value={{ element, setElement }}>
      {children}
    </ElementContext.Provider>
  );
};
