import PrimaryButton from '../components/buttons/PrimaryButton';
import WhiteLogo from '../components/logo/WhiteLogo';
import TransitionAnimation from '../components/transition/TransitionAnimation';
import '../css/opening.css';
import { motion } from "framer-motion";


function OpeningPage() {
  return (<TransitionAnimation>
    <motion.div 

transition={{ duration: 0.75, ease: "easeInOut", delay: 0 }}
initial={{ opacity: 1 }}
animate={{ opacity: 1 }}
exit={{

  transition: { duration: 1 },  // משך זמן האנימציה ביציאה
  animation: 'exitAnimation 1s', // אנימציה ספציפית ביציאה
  animationFillMode: 'forwards'
}}
    
    className="container homePage">

   <WhiteLogo/>
   <div className="holdingPrimaryButton">
     <PrimaryButton text='MENU' to={'/mainMenu'} />
   </div>

    </motion.div>
    </TransitionAnimation>
  );
}

export default OpeningPage;
