import Navbar from "../../components/layout/navbar/Navbar";
import LoginForm from "./LoginForm";
import "./login.css";
import loginImg from "./login.png";
import { motion } from "framer-motion";

export default function Login() {
  return (
    <>
      <main className="login-page">

        <div className="login-container">

          {/* LEFT IMAGE */}
          <motion.div
            className="login-image"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={loginImg} alt="cooking" />
          </motion.div>

          {/* RIGHT FORM */}
          <motion.div
            className="login-form-wrapper"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <LoginForm />
          </motion.div>

        </div>

      </main>
    </>
  );
}