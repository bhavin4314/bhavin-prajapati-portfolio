"use client";

import { motion } from "framer-motion";

export function LoadingSpinner() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background flex items-center justify-center z-50"
    >
      <div className="text-center">
        {/* <motion.div
          className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full mx-auto mb-4"
         
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        /> */}
        {/* <div className="dots mx-auto mb-4" /> */}
        <div className="loader text-primary text-[78px] font-bold font-mono opacity-80 flex items-center justify-center gap-2">
          <span className="animate-pulse-scale">{`{`}</span>
          <div className="dots mx-2" />
          <span className="animate-pulse-scale delay-[300ms]">{`}`}</span>
        </div>
        {/* <motion.p
          className="text-lg font-semibold text-muted-foreground"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Coding...
        </motion.p> */}
      </div>
    </motion.div>
  );
}
