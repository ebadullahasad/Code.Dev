import { motion } from "framer-motion";

const AnimatedDiv = ({
  children,
  animationType = "fadeIn",
  className = "",
  delay = 0,
  triggerOnce = true, // Animation should run once or every time
}) => {
  const animations = {
    fadeIn: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    },
    slideInLeft: {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
    },
    slideInRight: {
      hidden: { opacity: 0, x: 100 },
      visible: { opacity: 1, x: 0 },
    },
    scaleUp: {
      hidden: { scale: 0.8, opacity: 0 },
      visible: { scale: 1, opacity: 1 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={animations[animationType]}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: triggerOnce, amount: 0.3 }} // 'amount' defines how much should be visible before triggering
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
