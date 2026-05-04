import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FeedbackSlider({ feedbacks }) {
const [index, setIndex] = useState(0);
const [paused, setPaused] = useState(false);

useEffect(() => {
if (paused || feedbacks.length === 0) return;

const interval = setInterval(() => {
  setIndex((prev) =>
    prev === feedbacks.length - 1 ? 0 : prev + 1
  );
}, 3000);

return () => clearInterval(interval);

}, [paused, feedbacks]);

if (!feedbacks.length) return null;

return (
<div
className="feedback-slider container "
onMouseEnter={() => setPaused(true)}
onMouseLeave={() => setPaused(false)}
> <AnimatePresence mode="wait">
<motion.div
key={index}
className="feedback-card"
initial={{ opacity: 0, y: 40 }}
animate={{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: -40 }}
transition={{ duration: 0.5 }}
>
<img
src={feedbacks[index].image}
onError={(e) => (e.target.src = "/fallback.jpg")}
/>
      <h4>{feedbacks[index].name}</h4>

      <div className="stars">
        {"★".repeat(feedbacks[index].rating)}
      </div>

      <p>{feedbacks[index].message}</p>

    </motion.div>
  </AnimatePresence>
</div>

);
}
