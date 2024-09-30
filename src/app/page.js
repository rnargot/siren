"use client";
import { Analytics } from "@vercel/analytics/react"
import "./page.css";
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="main">
    <motion.div
      initial={{ opacity: 0, y: -10 }}   // Initial fade-in effect
      animate={{ opacity: 1, y: 0 }}     // Vertical movement
      transition={{ delay: 1, duration: 2 }}       // Transition for the fade-in
    >
      <div className="title">
        siren studios
      </div>
    </motion.div>

      <motion.div 
        initial={{opacity:0, y:-10}}
        animate={{opacity:1, y:0}}
        transition={{delay: 3, duration:2}}>
      <div className="sub">
        an immersive experience featuring works of Quincie Ndiaye and Kyle Nelson
      </div>
      </motion.div>
      <motion.div 
        initial={{opacity:0, y:-10}}
        animate={{opacity:1, y:0}}
        transition={{delay: 6, duration:2}}>
      <div className="sub">
        coming 2025 
      </div>
      </motion.div>
      <Analytics />
    </div>
    
  );
}
