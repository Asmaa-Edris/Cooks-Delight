import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import "./about.css";
import Author from "./imgs/Author Image.png";

export default function ChefBio() {
  return (
    <section className="chef-bio container">
      <div className="chef-container">

        <motion.div
          className="chef-image"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={Author} alt="Chef" />

          <div className="follow-bar">
            <span>FOLLOW ME</span>
            <div className="icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="icon facebook">
                <FaFacebookF /></a>

              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="icon instagram">
                <FaInstagram />
              </a>

              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="icon youtube">
                <FaYoutube />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="chef-text"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>FROM ITALIAN ROOTS TO GLOBAL PALATES</h2>
          <p>Born and raised in the vibrant culinary landscape of Italy, my journey with food began in the heart of my family's kitchen. Surrounded by the aroma of fresh herbs, the sizzle of pans, and the laughter of loved ones, I developed a deep appreciation for the art of cooking. My culinary education took me from the historic streets of Rome to the bustling markets of Florence, where I honed my skills and cultivated a love for the simplicity and authenticity of Italian cuisine.</p>
          <p>Driven by a relentless curiosity, I embarked on a global culinary exploration, seeking inspiration from the rich tapestry of flavors found in kitchens around the world. From the spicy markets of Marrakech to the sushi stalls of Tokyo, each experience added a unique brushstroke to my culinary canvas.</p>
          <p>Whether you're a seasoned home cook or just starting your culinary adventure, I'm delighted to have you here. Let's stir, simmer, and savor the beauty of creating something wonderful together.</p>
          <p>Warmest regards,</p>
          <p className="signature"> Isabella Russo</p>
        </motion.div>

      </div>
    </section>
  );
}