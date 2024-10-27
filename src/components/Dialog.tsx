"use client";
import useExternalClick from "@/hooks/useExternalClick";
import { DialogProps } from "@/types";
import { motion, AnimatePresence } from "framer-motion";

const Dialog = ({
  visible,
  classname,
  onClose,
  dialogRef,
  children,
}: DialogProps): React.ReactElement => {
  useExternalClick(dialogRef, onClose);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={dialogRef}
          className={classname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Dialog;