import ElementContext from "@/context/ElementContext/context";
import { useContext } from "react";

export default function useElementContext() {
  return useContext(ElementContext);
}
