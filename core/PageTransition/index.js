import React, { forwardRef, useMemo } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

function PageTransition({ children, ref }) {
  const hidden = { opacity: 0 };
  const visible = { opacity: 1 };
  const transition = { duration: 0.8, delay: 0.6 };

  return (
    <motion.div
      ref={ref}
      initial={hidden}
      animate={visible}
      transition={transition}
      exit={hidden}
      key="modal"
      //   style={{ maxHeight: "100%", overflowY: "auto" }}
    >
      {children}
    </motion.div>
  );
}

export default forwardRef(PageTransition);
