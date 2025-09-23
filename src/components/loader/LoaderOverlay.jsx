import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import "../../css/loader.css";

function LoaderOverlay() {
  const { globalStatus } = useSelector((state) => state.orderStatus);

  return (
    <AnimatePresence>
      {globalStatus === "loading" && (
        <motion.div
          className="loaderOverlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="loaderSpinner"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoaderOverlay;
