import Feedbackitem from "./Feedbackitem";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../context/FeedBackContex";

const FeedBackList = () => {
  const { feedBack } = useContext(FeedbackContext);
  if (!feedBack || feedBack.length === 0) return <p>No FeedBack Yet</p>;
  return (
    <div className="feedBack-list">
      <AnimatePresence>
        {feedBack.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Feedbackitem
              key={item.id}
              item={item}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedBackList;
