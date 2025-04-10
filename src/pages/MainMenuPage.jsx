import { Link } from "react-router-dom";
import TransitionAnimation from "../components/transition/TransitionAnimation";
import "../css/main.css";
import { motion } from "framer-motion";
import { menu } from "../database/menu";
import MenuCategory from "../components/menu/MenuCategory";
import Category from "../components/menu/Category";

function MainMenuPage() {
  return (
    <TransitionAnimation>
      <div className="flex-col-center">
        <motion.div
          className="containerMainMenu mainMenu"
          transition={{ duration: 1, ease: "easeInOut", delay: 0 }}
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
            animation: "eatAnimation 2s ease-in-out forwards",
          }}
          exit={{
            transition: { duration: 0.5, delay: 0 }, // משך זמן האנימציה ביציאה
            animation: "exitMainMenuAnimation 1s", // אנימציה ספציפית ביציאה
            animationFillMode: "forwards",
          }}
        ></motion.div>
        <motion.div
          className="menuGrid"
          transition={{ duration: 0.75, ease: "easeInOut", delay: 2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            transition: { delay: 0 },
            opacity: 0,
          }}
        >
          {menu.map((e, i) => (
            <Category key={i} category={e} items={e.items} image={e.image} />
          ))}
        </motion.div>
      </div>
    </TransitionAnimation>
  );
}

export default MainMenuPage;
