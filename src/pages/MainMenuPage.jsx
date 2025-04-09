import { Link } from "react-router-dom";
import TransitionAnimation from "../components/transition/TransitionAnimation";
import "../css/main.css";
import { motion } from "framer-motion";
import { menu } from "../database/menu";
import MenuCategory from "../components/menu/MenuCategory";

function MainMenuPage() {
  return (
    <TransitionAnimation>
      <div className="flex-col-center">
        <motion.div
          className="containerMainMenu mainMenu"
          transition={{ duration: 0.75, ease: "easeInOut", delay: 0 }}
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
            animation: "eatAnimation 1s",
            animationFillMode: "forwards",
          }}
          exit={{
            transition: { duration: 0.5 }, // משך זמן האנימציה ביציאה
            animation: "exitMainMenuAnimation 1s", // אנימציה ספציפית ביציאה
            animationFillMode: "forwards",
          }}
        ></motion.div>
        <motion.div
          className="menuGrid"
          transition={{ duration: 0.75, ease: "easeInOut", delay: 1.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            transition: { delay: 0 },
            opacity: 1,
          }}
        >
    {Object.entries(menu.food[0]).map(([categoryName, categoryData]) => (
  <MenuCategory
    key={categoryName}
    category={categoryName}
    items={categoryData.items}
    image={categoryData.image}
  />
))}
        </motion.div>
      </div>
    </TransitionAnimation>
  );
}

export default MainMenuPage;
