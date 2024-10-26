"use client";
import React, { createContext, useState } from "react";
import { ChildrenProvider, Media, Modal } from "../types";

export const ModalContext = createContext<Modal>({
  modalData: {} as Media,
  setModalData: () => {},
  isModal: false,
  setIsModal: () => {},
});

export function ModalProvider({ children }: ChildrenProvider) {
  const [modalData, setModalData] = useState<Media>({} as Media);
  const [isModal, setIsModal] = useState<boolean>(false);

  return (
    <ModalContext.Provider
      value={{
        modalData,
        setModalData,
        isModal,
        setIsModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
