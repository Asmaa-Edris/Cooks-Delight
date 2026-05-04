import { useState } from "react";
import Button from "../../components/common/button/Button";
import { toast } from "react-toastify";

export default function FeedbackForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    message: "",
    rating: 0,
    image: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.message || form.rating === 0) {
      toast.error("Please fill all fields");
      return;
    }

    const newFeedback = {
      ...form,
      image: form.image || `https://i.pravatar.cc/150?u=${form.name}`,
    };

    try {
      await fetch("https://dummyjson.com/posts/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFeedback),
      });

      onAdd(newFeedback);

      toast.success("Feedback added successfully");

      setForm({
        name: "",
        message: "",
        rating: 0,
        image: "",
      });

    } catch (err) {
      console.error(err);
      toast.error("Something went wrong ");
    }
  };

  return (
    <div className="feedback-form">

      <h2>SHARE YOUR EXPERIENCE</h2>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <input
            type="text"
            value={form.name}
            required
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />
          <label>Your Name</label>
        </div>

    
        <div className="form-group">
          <textarea
            value={form.message}
            required
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
          />
          <label>Your Feedback</label>
        </div>

        <div className="rating">
          {[1,2,3,4,5].map((star) => (
            <span
              key={star}
              onClick={() => setForm({ ...form, rating: star })}
              className={form.rating >= star ? "active" : ""}
            >
              ★
            </span>
          ))}
        </div>

        <div className="form-group">
          <input
            type="text"
            value={form.image}
            onChange={(e) =>
              setForm({ ...form, image: e.target.value })
            }
          />
          <label>Image URL (optional)</label>
        </div>

        <Button btnstyle="primary">SUBMIT</Button>

      </form>
    </div>
  );
}