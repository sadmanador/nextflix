import Layout from "@/components/Layout/Layout";
import { ModalProvider } from "@/context/ModalContext";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <ModalProvider>{children}</ModalProvider>
    </>
  );
};

export default layout;
