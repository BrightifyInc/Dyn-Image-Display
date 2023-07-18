import React from 'react'
import { motion } from "framer-motion";

function Home() {
  return (
    <section className='flex justify-center'>
                
        <div className='Container'>
            <div className='flex h-screen'>
                <motion.h1 
                  initial={{ opacity: 0, y: -400}}
                  animate={{
                    scale: 1.5,
                    opacity: 1,
                    y: 0,
                    transition: { duration: 2 },
                    rotate: 360,
                  }}
                  className='m-auto font-semibold text-[45px] text-green-600'>
                    Dyn Img Display
                </motion.h1>
            </div>
        </div>
    </section>
  );
}

export default Home
