"use client"
import useExternalClick from '@/hooks/useExternalClick';
import { motion, AnimatePresence } from 'framer-motion';
import { MutableRefObject } from 'react';

interface DialogProps {
  visible: boolean;
  classname?: string;
  onClose: () => void;
  dialogRef: MutableRefObject<HTMLDivElement | null>;
  children: React.ReactNode;
}

export default function Dialog({ visible, classname, onClose, dialogRef, children }: DialogProps): React.ReactElement {
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
}