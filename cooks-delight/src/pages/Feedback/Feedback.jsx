import { useState, useEffect } from "react";
import FeedbackForm from "./FeedbackForm";
import FeedbackSlider from "./FeedbackSlider";
import "./feedback.css";
import { motion } from "framer-motion";

export default function Feedback() {
const [feedbacks, setFeedbacks] = useState([]);

useEffect(() => {
const load = async () => {
try {
const res = await fetch("https://dummyjson.com/comments");
const data = await res.json();

    const mapped = data.comments.slice(0, 5).map((item) => ({
      name: item.user.username,
      message: item.body,
      rating: Math.floor(Math.random() * 5) + 1,
      image: `https://i.pravatar.cc/150?u=${item.user.id}`,
    }));

    setFeedbacks(mapped);
  } catch (err) {
    console.error(err);
  }
};

load();

}, []);

return ( <main className="feedback-page container">
  
  <section className="feedback-hero">
    <motion.h1
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      SHARE YOUR EXPERIENCE
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      Tell us about your journey with our recipes. Your feedback helps us improve.
    </motion.p>
  </section>

 
  <section className="feedback-form-section">
    <FeedbackForm
      onAdd={(newFeedback) =>
        setFeedbacks((prev) => [newFeedback, ...prev])
      }
    />
  </section>

  
  <section className="feedback-slider-section">
    <FeedbackSlider feedbacks={feedbacks} />
  </section>

</main>

);
}
