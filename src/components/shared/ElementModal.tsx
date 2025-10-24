'use client';

import useElementContext from "@/hooks/useElementContext";
import Modal from "../modal";
import { ChangeEvent, FormEvent, useState } from "react";
import ElementClient from "@/client";

export default function ElementModal() {
  const context = useElementContext();
  const [formData, setFormData] = useState({
    electronConfig: "1s2",
    symbol: "H"
  });
  if (!context) return;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const changeElementContext = async (value: FormEvent<HTMLFormElement>) => {
    value.preventDefault();
    const newElement = await ElementClient.getElementBySymbol(formData.symbol)
    context.setElement(newElement);

    console.log(newElement)
  };

  return (
    <Modal.Root onSubmit={changeElementContext}>
      <Modal.Field
        name="electronConfig"
        label="Electron Configuration"
        type="text"
        placeholder="Electron Configuration"
        value={formData.electronConfig}
        onChange={handleChange}
      />
      <Modal.Field
        name="symbol"
        label="Element Symbol"
        type="text"
        placeholder="Element Symbol"
        value={formData.symbol}
        onChange={handleChange}
      />
      <Modal.Buton text="Submit" />
    </Modal.Root>
  );
}