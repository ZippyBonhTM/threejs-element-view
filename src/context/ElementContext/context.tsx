'use client'

import { ElementType } from "@/types/Element";
import { createContext } from "react";

interface ElementContextProps {
  element: ElementType | null;
  setElement: React.Dispatch<React.SetStateAction<ElementType | null>>
}

const ElementContext = createContext<ElementContextProps | null>(null);

export default ElementContext;
